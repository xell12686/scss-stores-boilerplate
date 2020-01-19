(function($) {
	
	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};


	// Avoid `console` errors in browsers that lack a console.
	var avoidConsoleErrors = function() {
	    var method;
	    var noop = function noop() {};
	    var methods = [
	        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
	        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
	        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
	        'timeStamp', 'trace', 'warn'
	    ];
	    var length = methods.length;
	    var console = (window.console = window.console || {});

	    while (length--) {
	        method = methods[length];

	        // Only stub undefined methods.
	        if (!console[method]) {
	            console[method] = noop;
	        }
	    }
	}

	function stripHeadingLinks() {
		$('.category-nav .level-0 > li > a').text().replace('EQUINOX', '');
	}
	function matchItemHeights() {
	}

	$(function(){
		stripHeadingLinks();
		matchItemHeights();
	});


	 $(window).scroll(function(){
		//scrollNavBar();
	 });

	 $(window).resize(function(){
		//function here
	 });



//END of scripts
})(jQuery); 
// Fully referenced jQuery BEYOND this point.

