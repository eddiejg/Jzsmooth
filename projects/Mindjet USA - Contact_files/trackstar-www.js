/* |---------------------------------------------------------------------------|
   |  trackstar-www.js                                                         | 
   |  jul16 2013 abaldock                                                      | 
   |  - tracks significant user events in WWW pages via 'utag' Tealium script  | 
   |  - requires: mindjet.js and trackstar.js                                  | 
   |---------------------------------------------------------------------------|
*/

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	} else var expires = "";
	var domain = "; domain=.mindjet.com";
	if(document.URL.indexOf('mindjet.net')>=0) {
		domain = "; domain=.mindjet.net";
	};
	document.cookie = name+"="+value+expires+domain+"; path=/";
}

//throw this for every step one, to generate a new funnel visit id
function startFunnelVisit(prod, goal){
	var theDate = new Date;
	var theTime = theDate.getTime(); // length = 13 digits
	var fVisitID = prod + goal + theTime;
	if (prod == 'MJPD' && goal == 'TRY') {
		createCookie("mjpd_try_funnel_visit", fVisitID, 14);
	}
	if (prod == 'MJPD' && goal == 'BUY') {
		createCookie("mjpd_buy_funnel_visit", fVisitID, 14);
	}
	if (prod == 'MJMM' && goal == 'TRY') {
		createCookie("mjmm_try_funnel_visit", fVisitID, 14);
	}
	if (prod == 'MJMM' && goal == 'BUY') {
		createCookie("mjmm_buy_funnel_visit", fVisitID, 14);
	}
	if (prod == 'MJ4B' && goal == 'BUY') {
		createCookie("mj4b_buy_funnel_visit", fVisitID, 14);
	}
	if (prod =='SpigitEngage' && goal == 'TRY') {
		createCookie("SpigitEngage_try_funnel_visit", fVisitID, 14);
	}
	return fVisitID;
}


/*  BEGIN DOC READY  */
jQuery(document).ready(function($) {
	
	//step counters so that a step is only ever fired once per page
	mindJet.TRY_steps_completed = "|";
	mindJet.BUY_steps_completed = "|";
	
	//MAIN TRACKSTEP FUNCTION
		// tProd = MM, PD | tGoal = try (default), buy | tStep = step# | tCompletion = set to true if last step
		mindJet.trackstep = function (tProd, tGoal, tStep, tCompletion, tGCresponse, tConversion, tType, tSku, tUnitCount, tSubtotal, tCurrency) {
			uD = 'undefined';
			if (typeof tStep!=uD && typeof tProd!=uD && typeof tGoal!=uD && typeof utag!=uD) {
				tGoal = tGoal.toUpperCase();
				if ((tGoal == 'TRY' && mindJet.TRY_steps_completed.indexOf('|'+tStep+'|')==-1) || (tGoal == 'BUY' && mindJet.BUY_steps_completed.indexOf('|'+tStep+'|')==-1)) {
					
					// Try
					if (tGoal == 'TRY') {
						mindJet.TRY_steps_completed = mindJet.TRY_steps_completed + tStep + '|';
					}
					// Buy
					if (tGoal == 'BUY') {
						mindJet.BUY_steps_completed = mindJet.BUY_steps_completed + tStep + '|';
					}
					
					tCs = 0;
					if (window.location.href.indexOf('mindmanager-trial-download') > -1 ) {
						tConversion = 1;
						tType = 'trial';
						tSku = 'trialMJMM';
						tUnitCount = 1;
						tCurrency = 'USD';
						tSubtotal = 1;
					}
					if (window.location.href.indexOf('spigitengage') > -1 ) {
						tConversion = 1;
						tType = 'demo_request';
						tSku = 'demoSE';
						tUnitCount = 1;
						tCurrency = 'USD';
						tSubtotal = 1;
					}
						
					if(tCompletion == true) {
						tCs = 1;
					}
					
					//on step 1? create a funnel visit id
					if (tStep == 1) {
						var tFunnelVisit = startFunnelVisit(tProd, tGoal);
					} else {
						/*
						if (tProd == 'MJPD' && tGoal == 'TRY') {
							var tFunnelVisit = mindJet.readCookie('mjpd_try_funnel_visit');
						}
						if (tProd == 'MJPD' && tGoal == 'BUY') {
							var tFunnelVisit = mindJet.readCookie('mjpd_buy_funnel_visit');
						}
						if (tProd == 'MJ4B' && tGoal == 'BUY') {
							var tFunnelVisit = mindJet.readCookie('mj4b_buy_funnel_visit');
						}
						*/
						if (tProd == 'MJMM' && tGoal == 'TRY') {
							var tFunnelVisit = mindJet.readCookie('mjmm_try_funnel_visit');
						}
						if (tProd == 'MJMM' && tGoal == 'BUY') {
							var tFunnelVisit = mindJet.readCookie('mjmm_buy_funnel_visit');
						}
						if (tProd == 'SpigitEngage' && tGoal == 'TRY') {
							var tFunnelVisit = mindJet.readCookie('SpigitEngage_try_funnel_visit');
						}
					}
					
					if (typeof tGCresponse !='undefined') {
						var tPayload = {
							'WT.si_n' : tGoal,
							'WT.si_x' : tStep,
							'WT.si_cs' : tCs,
							'product' : tProd+'.'+tGoal,
							'env' : mindJet.environment,
							'funnelVisit' : tFunnelVisit,
							'email_gc_status' : tGCresponse,
						};
					} else {
						var tPayload = {
							'WT.si_n' : tGoal,
							'WT.si_x' : tStep,
							'WT.si_cs' : tCs,
							'WT.conv' : tConversion,
							'WT.tx_type' : tType,
							'WT.pn_sku' : tSku,
							'WT.tx_u' : tUnitCount,
							'WT.tx_s' : tSubtotal,
							'WT.tx_cur' : tCurrency,
							'product' : tProd+'.'+tGoal,
							'env' : mindJet.environment,
							'funnelVisit' : tFunnelVisit,
						};
					}
					
					utag.view(tPayload); // **** this appears to be making MJPD UDO appear ****
					console.log(tPayload);
				}
			};
		}
		
		// ------ MIND MANAGER -----------------------------------------------------------
		//land on products/mindmanager page
		// MM 'try' step 1
		// MM 'buy' step 1
		if( jQuery('#product-mindman1ager').exists() || 
		jQuery('.products_mindjet-for-mac').exists() || 
		jQuery('.au_products_mindjet-for-mac').exists() || 
		jQuery('.de_products_mindjet-for-mac').exists() || 
		jQuery('.eu_products_mindjet-for-mac').exists() || 
		jQuery('.fr_products_mindjet-for-mac').exists() || 
		jQuery('.uk_products_mindjet-for-mac').exists() || 
		jQuery('.products_mindjet-for-windows').exists() || 
		jQuery('.au_products_mindjet-for-windows').exists() || 
		jQuery('.de_products_mindjet-for-windows').exists() || 
		jQuery('.eu_products_mindjet-for-windows').exists() || 
		jQuery('.fr_products_mindjet-for-windows').exists() || 
		jQuery('.uk_products_mindjet-for-windows').exists()
		) {
			setTimeout("mindJet.trackstep('MJMM', 'try', 1)", 3000); //TRACKSTEP
			setTimeout("mindJet.trackstep('MJMM', 'buy', 1)", 3000); //TRACKSTEP
			
			// MM 'try' step 2
			if ( jQuery('a[href*="start/mindmanager"]').exists() ) {
				jQuery('a[href*="start/mindmanager"]').prop('href', "/start/mindmanager" + '?lang=' + mindJet.localeCode + queryString).click(function() {  
					createCookie("psku", 'MJMM', 14);
					mindJet.trackstep('MJMM', 'try', 2); //TRACKSTEP
				});
			}
			
			// MM 'buy' step 2
			if ( jQuery('a[href*="/addtobasket.aspx?p=45&i=451"]').exists() ) {
				jQuery('a[href*="/addtobasket.aspx?p=45&i=451"]').click(function() {
					createCookie("psku", 'MJMM', 14);
					mindJet.trackstep('MJMM', 'buy', 2); //TRACKSTEP
				});
			}
		}
		
		// ------ SpigitEngage -----------------------------------------------------------
		// land on home or project director page
		// SpigitEngage 'try' step 1
		// if (document.URL.indexOf('spigitengage') >= -1) {
		if($('.spigitengage').exists()) {
			$("#schedule-demo").on("click", function(){
				setTimeout("mindJet.trackstep('SpigitEngage', 'try', 1);", 3000); //TRACKSTEP
				//start of SpigitEngage funnel
			});
			$("#download-datasheet").on("click", function(){
				setTimeout("mindJet.trackstep('SpigitEngage', 'try', 1);", 3000); //TRACKSTEP
				//start of SpigitEngage funnel
			});
			$("#view-brochure").on("click", function(){
				setTimeout("mindJet.trackstep('SpigitEngage', 'try', 1);", 3000); //TRACKSTEP
				//start of SpigitEngage funnel
			});
			/*
			// edit the following with Pardot info
			$('#frameID').load(function(){
				
				$('#frameID').contents().find('body').html('Hey, i`ve changed content of <body>! Yay!!!');
			});
			*/
			/*
			// Did not work on first pass
			if ($('#form_00b2_ao_submit_button').exists()) {
				alert("HEYOOOO!");
			}
			*/
			/*
			jQuery("#form_00b2_ao_submit_button").click(function() {
				alert( "Handler for .click() called." );
			});
			jQuery("#form_00c3_ao_submit_input").click(function() {
				alert( "Handler for .click() called." );
			});
			jQuery("#form_00c4_ao_submit_input").click(function() {
				alert( "Handler for .click() called." );
			});
			*/
			setTimeout("mindJet.trackstep('SpigitEngage', 'try', 1);", 3000); //TRACKSTEP
			//start of SpigitEngage funnel
			
		}
		
		// ------ MIND MANAGER DL PAGE ---------------------------------------------------
		//land on mindmanager-trial-download page
		if(jQuery('.mindmanager-trial-download').exists()) {
			tConversion = 1;
			tType = 'trial';
			tSku = 'trialMJMM';
			tUnitCount = 1;
			tCurrency = 'USD';
			tSubtotal = 1;
			var p0S = mindJet.getUrlParam('os');
			//only track if user came through flow
			if (p0S == 'WIN' || p0S == 'mmwintrial' || p0S == 'MAC' || p0S == 'mmmactrial') {
				//this is a completion step, set param 4 to true
				setTimeout("mindJet.trackstep('MJMM', 'try', 20, true);", 3000); //TRACKSTEP
			}
		}
		
		// ------ MINDJET FOR BUSINESS -----------------------------------------------------------
		// land on /shop/business page
		// MJ4B 'try' step 1
		/*
		if(jQuery('#shop_business').exists()) {
			setTimeout("mindJet.trackstep('MJ4B', 'buy', 1);", 3000); //TRACKSTEP
			//start of MJ4B funnel
		}
		*/
		
		// land on shop page
		// PD 'buy' step 1
		/*
		if(jQuery('.shop_index').exists()) {
			setTimeout("mindJet.trackstep('MJ4B', 'buy', 2)", 3000);
			if (jQuery('a[href*="catalog/subscriptionConfiguration2.aspx?p=29"]').exists() ) {
				jQuery('a[href*="catalog/subscriptionConfiguration2.aspx?p=29"]').click(function() {
					mindJet.trackstep('MJ4B', 'buy', 3); //TRACKSTEP
				});
			}
		}
		*/
		
		// ------ PROJECT DIRECTOR -----------------------------------------------------------
		// land on home or project director page
		// PD 'try' step 1
		/*
		if(jQuery('.home-page').exists() || jQuery('.projectdirector').exists()) {
			setTimeout("mindJet.trackstep('MJPD', 'try', 1);", 3000); //TRACKSTEP
			//start of MJPD funnel
		}
		*/
		//put a trackstep on Project Director signup buttons
		// PD 'try' step 2
		/*
		if ( jQuery('a[href*="signup/form"]').exists() ) {
			jQuery('a[href*="signup/form"]').click(function() {
				mindJet.trackstep('MJPD', 'try', 2);
			});
		}
		*/
		// land on shop page
		// PD 'buy' step 1
		/*
		if(jQuery('.shop_index').exists() || jQuery('.shop_projectdirector').exists()) {
			setTimeout("mindJet.trackstep('MJPD', 'buy', 1)", 3000);
			if (jQuery('a[href*="catalog/subscriptionConfiguration2.aspx?p=36"]').exists() ) {
				jQuery('a[href*="catalog/subscriptionConfiguration2.aspx?p=36"]').click(function() {
					mindJet.trackstep('MJPD', 'buy', 2); //TRACKSTEP
				});
			}
		}
		*/
		
	});
/*  END DOC READY  */