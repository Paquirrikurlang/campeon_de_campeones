$(document).ready(function() {

	$('#preloader').delay(500).fadeOut(1000);

	var preLoaded = false;
	var logoBuzzed = false;
	var logoBuzzed = true;
	var isInView = "";

// Preloader ########################################

	function preloader(srcs, callback) {
		var img;
		var remaining = srcs.length;
		for (var i = 0; i < srcs.length; i++) {
			img = new Image();
			img.onload = function() {
				--remaining;
				if (remaining <= 0) {
					callback();
				}
			};
			img.src = srcs[i];
		}
	}
	var imageSrcs = [
		"images/werbeagentur.png",
		"images/ingolstadt-webdesign.png",
		"images/werbeagentur-ingolstadt/werbeagentur.png",
		"images/werbeagentur-ingolstadt/webdesign-ingolstadt.png",
		"images/werbeagentur-ingolstadt/ingolstadt-werbung.png",
		"images/werbeagentur-ingolstadt/werbung-ingolstadt.png",
		"images/werbeagentur-ingolstadt/design-ingolstadt.png",
		"images/werbeagentur-ingolstadt/websites-ingolstadt.png",
		"images/werbeagentur-ingolstadt/homepages-ingolstadt.png",
		"images/werbeagentur-ingolstadt/web-design-ingolstadt.png",
		"images/de/bdg-grafikdesign-ingolstadt.jpg",
		"images/de/ihk-mediengestalter-ingolstadt.jpg"
	];
	preloader(imageSrcs, loader);


	(function($) {
		var imgList = [];
		$.extend({
			preload: function(imgArr, option) {
				var setting = $.extend({
					init: function(loaded, total) {},
					loaded: function(img, loaded, total) {},
					loaded_all: function(loaded, total) {}
				}, option);
				var total = imgArr.length;
				var loaded = 0;
			
				setting.init(0, total);
				for(var i in imgArr) {
					imgList.push($("<img />")
						.attr("src", imgArr[i])
						.load(function() {
							loaded++;
							setting.loaded(this, loaded, total);
							if(loaded == total) {
								setting.loaded_all(loaded, total);
							}
						})
					);
				}
			}
		});
	})(jQuery);

	function loader() {
		setTimeout(function() {
			$("#logo").fadeIn("slow");
			setTimeout(function() {$("#logo5").css("opacity", "1");}, 500);
			setTimeout(function() {$("#logo1").css("opacity", "1");}, 600);
			setTimeout(function() {$("#logo6").css("opacity", "1");}, 700);
			setTimeout(function() {$("#logo3").css("opacity", "1");}, 800);
			setTimeout(function() {$("#logo7").css("opacity", "1");}, 900);
			setTimeout(function() {$("#logo2").css("opacity", "1");}, 1000);
			setTimeout(function() {$("#logo4").css("opacity", "1");}, 1100);
			setTimeout(function() {$("#claim").fadeIn("slow");}, 1000);
			setTimeout(function() {$("#bdg-ihk").fadeIn("slow");}, 750);
			setTimeout(function() {$("#video-container").fadeIn(500);}, 1000);
			setTimeout(function() {logoBuzz();}, 1700 );
			logoBuzzed = true;
		}, 0);

		setTimeout(function() {
			$.preload([

				// Base
				"images/agentur-ingolstadt.png",
				"images/branding-bayern.png",
				"images/ingolstadt-webdesign.png",
				"images/ingolstadt-werbeagentur.png",
				"images/ingolstadt-werbung.png",
				"images/webdesign-bayern.png",
				"images/webdesign-ingolstadt.png",
				"images/werbeagentur-bayern.png",
				"images/werbeagentur-ingolstadt.png",
				"images/werbeagentur.png",
				"images/werbung-bayern.png",

				// Backgrounds
				"images/agentur/bg-agentur.jpg",
				"images/grafikdesign/bg-heaven.jpg",
				"images/grafikdesign/bg-hell.jpg",
				"images/kontakt/bg-kontakt.jpg",
				"images/kunden/bg-kunden.jpg",
				"images/kunden/bg-lab-floor.jpg",
				"images/testimonials/bg-testimonials.jpg",
				"images/webdesign-ingolstadt/bg-webdesign.jpg",
				"images/werbeagentur-ingolstadt/bg-werbeagentur.jpg",

				// Werbung
				"images/grafikdesign/glass1.png",
				"images/grafikdesign/glass2.png",
				"images/grafikdesign/angel-icon.png",
				"images/grafikdesign/devil-icon.png",

				// Agentur
				"images/agentur/werbeagentur-ingolstadt.png",
				"images/agentur/printwerbung-ingolstadt.gif",
				"images/agentur/webdesign-ingolstadt.gif",
				"images/agentur/werbeagentur-ingolstadt.gif",
				"images/agentur/webdesign-ingolstadt.png",
				"images/agentur/responsive-webdesign.png",
				"images/agentur/webdesign-agentur.png",
				"images/agentur/agentur-head.png",
				"images/agentur/xray.jpg",
				"images/agentur/xray.png",
				"images/agentur/butterfly-body.png",
				"images/agentur/clock-hours.png",
				"images/agentur/clock-minutes.png",
				"images/agentur/clock-seconds.png",

				// Stats
				"images/werbeagentur-ingolstadt/werbeagentur-ingolstadt.png",

				// Design
				"images/webdesign-ingolstadt/bulb.png",
				"images/webdesign-ingolstadt/mint-head.png",
				"images/webdesign-ingolstadt/mint-body.jpg",
				"images/webdesign-ingolstadt/mint-shadow.png",
				"images/webdesign-ingolstadt/rays-left.png",
				"images/webdesign-ingolstadt/rays-right.png",

/*
				// Portfolio
				"images/werbeagentur/anticipate-it-ingolstadt.jpg",
				"images/werbung/anticipate-it-ingolstadt.png",
				"images/webdesign/anticipate-it-ingolstadt.png",

				"images/werbeagentur/audi-ingolstadt.jpg",
				"images/werbung/audi-ingolstadt.png",
				"images/webdesign/audi-ingolstadt.png",

				"images/werbeagentur/besl-ingolstadt.jpg",
				"images/werbung/besl-ingolstadt.png",
				"images/webdesign/besl-ingolstadt.png",

				"images/werbeagentur/bival-ingolstadt.jpg",
				"images/werbung/bival-ingolstadt.png",
				"images/webdesign/bival-ingolstadt.png",

				"images/werbeagentur/bonfire-deutschland.jpg",
				"images/werbung/bonfire-deutschland.png",
				"images/webdesign/bonfire-deutschland.png",

				"images/werbeagentur/cluebiz-schweiz.jpg",
				"images/werbung/cluebiz-schweiz.png",
				"images/webdesign/cluebiz-schweiz.png",

				"images/werbeagentur/danstyle-ingolstadt.jpg",
				"images/werbung/danstyle-ingolstadt.png",
				"images/webdesign/danstyle-ingolstadt.png",

				"images/werbeagentur/desboroughs-uk.jpg",
				"images/werbung/desboroughs-uk.png",
				"images/webdesign/desboroughs-uk.png",

				"images/werbeagentur/elfinger-ingolstadt.jpg",
				"images/werbung/elfinger-ingolstadt.png",
				"images/webdesign/elfinger-ingolstadt.png",

				"images/werbeagentur/eq7-bayern.jpg",
				"images/werbung/eq7-bayern.png",
				"images/webdesign/eq7-bayern.png",

				"images/werbeagentur/erc-ingolstadt.jpg",
				"images/werbung/erc-ingolstadt.png",
				"images/webdesign/erc-ingolstadt.png",

				"images/werbeagentur/exponyl-ingolstadt.jpg",
				"images/werbung/exponyl-ingolstadt.png",
				"images/webdesign/exponyl-ingolstadt.png",

				"images/werbeagentur/fc-ingolstadt-04.jpg",
				"images/werbung/fc-ingolstadt-04.png",
				"images/webdesign/fc-ingolstadt-04.png",

				"images/werbeagentur/flughafen-muenchen.jpg",
				"images/werbung/flughafen-muenchen.png",
				"images/webdesign/flughafen-muenchen.png",

				"images/werbeagentur/haantjes-ingolstadt.jpg",
				"images/werbung/haantjes-ingolstadt.png",
				"images/webdesign/haantjes-ingolstadt.png",

				"images/werbeagentur/haberfelder-deutschland.jpg",
				"images/werbung/haberfelder-deutschland.png",
				"images/webdesign/haberfelder-deutschland.png",

				"images/werbeagentur/hagn-partner-ingolstadt.jpg",
				"images/werbung/hagn-partner-ingolstadt.png",
				"images/webdesign/hagn-partner-ingolstadt.png",

				"images/werbeagentur/havit-ingolstadt.jpg",
				"images/werbung/havit-ingolstadt.png",
				"images/webdesign/havit-ingolstadt.png",

				"images/werbeagentur/heinz-baustoffe-ingolstadt.jpg",
				"images/werbung/heinz-baustoffe-ingolstadt.png",
				"images/webdesign/heinz-baustoffe-ingolstadt.png",

				"images/werbeagentur/heizomat-bayern.jpg",
				"images/werbung/heizomat-bayern.png",
				"images/webdesign/heizomat-bayern.png",

				"images/werbeagentur/hiro-restaurant-bayern.jpg",
				"images/werbung/hiro-restaurant-bayern.png",
				"images/webdesign/hiro-restaurant-bayern.png",

				"images/werbeagentur/hotel-am-campus-ingolstadt.jpg",
				"images/werbung/hotel-am-campus-ingolstadt.png",
				"images/webdesign/hotel-am-campus-ingolstadt.png",

				"images/werbeagentur/hotel-bauer-ingolstadt.jpg",
				"images/werbung/hotel-bauer-ingolstadt.png",
				"images/webdesign/hotel-bauer-ingolstadt.png",

				"images/werbeagentur/hotel-block-ingolstadt.jpg",
				"images/werbung/hotel-block-ingolstadt.png",
				"images/webdesign/hotel-block-ingolstadt.png",

				"images/werbeagentur/in-aesthetik-ingolstadt.jpg",
				"images/werbung/in-aesthetik-ingolstadt.png",
				"images/webdesign/in-aesthetik-ingolstadt.png",

				"images/werbeagentur/inotec-bayern.jpg",
				"images/werbung/inotec-bayern.png",
				"images/webdesign/inotec-bayern.png",

				"images/werbeagentur/james-direct-ingolstadt.jpg",
				"images/werbung/james-direct-ingolstadt.png",
				"images/webdesign/james-direct-ingolstadt.png",

				"images/werbeagentur/jesuiten-quelle-ingolstadt.jpg",
				"images/werbung/jesuiten-quelle-ingolstadt.png",
				"images/webdesign/jesuiten-quelle-ingolstadt.png",

				"images/werbeagentur/kip-winger-usa.jpg",
				"images/werbung/kip-winger-usa.png",
				"images/webdesign/kip-winger-usa.png",

				"images/werbeagentur/klinik-dr-maul-ingolstadt.jpg",
				"images/werbung/klinik-dr-maul-ingolstadt.png",
				"images/webdesign/klinik-dr-maul-ingolstadt.png",

				"images/werbeagentur/kollmannsberger-ingolstadt.jpg",
				"images/werbung/kollmannsberger-ingolstadt.png",
				"images/webdesign/kollmannsberger-ingolstadt.png",

				"images/werbeagentur/kuttenreich-ingolstadt.jpg",
				"images/werbung/kuttenreich-ingolstadt.png",
				"images/webdesign/kuttenreich-ingolstadt.png",

				"images/werbeagentur/legacy-usa.jpg",
				"images/werbung/legacy-usa.png",
				"images/webdesign/legacy-usa.png",

				"images/werbeagentur/m60-immobilien-ingolstadt.jpg",
				"images/werbung/m60-immobilien-ingolstadt.png",
				"images/webdesign/m60-immobilien-ingolstadt.png",

				"images/werbeagentur/mallorca-spanien.jpg",
				"images/werbung/mallorca-spanien.png",
				"images/webdesign/mallorca-spanien.png",

				"images/werbeagentur/mia-aegerter-schweiz.jpg",
				"images/werbung/mia-aegerter-schweiz.png",
				"images/webdesign/mia-aegerter-schweiz.png",

				"images/werbeagentur/mukisoft-ingolstadt.jpg",
				"images/werbung/mukisoft-ingolstadt.png",
				"images/webdesign/mukisoft-ingolstadt.png",

				"images/werbeagentur/nordbraeu-ingolstadt.jpg",
				"images/werbung/nordbraeu-ingolstadt.png",
				"images/webdesign/nordbraeu-ingolstadt.png",

				"images/werbeagentur/paepsy-ingolstadt.jpg",
				"images/werbung/paepsy-ingolstadt.png",
				"images/webdesign/paepsy-ingolstadt.png",

				"images/werbeagentur/rafatsch-ingolstadt.jpg",
				"images/werbung/rafatsch-ingolstadt.png",
				"images/webdesign/rafatsch-ingolstadt.png",

				"images/werbeagentur/reisch-fahrzeugbau-bayern.jpg",
				"images/werbung/reisch-fahrzeugbau-bayern.png",
				"images/webdesign/reisch-fahrzeugbau-bayern.png",

				"images/werbeagentur/rieper-silbernagl-ingolstadt.jpg",
				"images/werbung/rieper-silbernagl-ingolstadt.png",
				"images/webdesign/rieper-silbernagl-ingolstadt.png",

				"images/werbeagentur/ruediger-woog-deutschland.jpg",
				"images/werbung/ruediger-woog-deutschland.png",
				"images/webdesign/ruediger-woog-deutschland.png",

				"images/werbeagentur/salzgrotte-meeresluft-bayern.jpg",
				"images/werbung/salzgrotte-meeresluft-bayern.png",
				"images/webdesign/salzgrotte-meeresluft-bayern.png",

				"images/werbeagentur/scares-tv-uk.jpg",
				"images/werbung/scares-tv-uk.png",
				"images/webdesign/scares-tv-uk.png",

				"images/werbeagentur/schmidmeyer-bayern.jpg",
				"images/werbung/schmidmeyer-bayern.png",
				"images/webdesign/schmidmeyer-bayern.png",

				"images/werbeagentur/singapore-airlines-asien.jpg",
				"images/werbung/singapore-airlines-asien.png",
				"images/webdesign/singapore-airlines-asien.png",

				"images/werbeagentur/singer-deutsch-usa.jpg",
				"images/werbung/singer-deutsch-usa.png",
				"images/webdesign/singer-deutsch-usa.png",

				"images/werbeagentur/sinocert-ingolstadt.jpg",
				"images/werbung/sinocert-ingolstadt.png",
				"images/webdesign/sinocert-ingolstadt.png",

				"images/werbeagentur/smarts-dog-grooming-uk.jpg",
				"images/werbung/smarts-dog-grooming-uk.png",
				"images/webdesign/smarts-dog-grooming-uk.png",

				"images/werbeagentur/stadtwerke-ingolstadt.jpg",
				"images/werbung/stadtwerke-ingolstadt.png",
				"images/webdesign/stadtwerke-ingolstadt.png",

				"images/werbeagentur/tecon-ingolstadt.jpg",
				"images/werbung/tecon-ingolstadt.png",
				"images/webdesign/tecon-ingolstadt.png",

				"images/werbeagentur/timetalent-ingolstadt.jpg",
				"images/werbung/timetalent-ingolstadt.png",
				"images/webdesign/timetalent-ingolstadt.png",

				"images/werbeagentur/tourism-australia.jpg",
				"images/werbung/tourism-australia.png",
				"images/webdesign/tourism-australia.png",

				"images/werbeagentur/tourism-fiji-islands.jpg",
				"images/werbung/tourism-fiji-islands.png",
				"images/webdesign/tourism-fiji-islands.png",

				"images/werbeagentur/tourism-queensland-australien.jpg",
				"images/werbung/tourism-queensland-australien.png",
				"images/webdesign/tourism-queensland-australien.png",

				"images/werbeagentur/tourismusamt-ingolstadt.jpg",
				"images/werbung/tourismusamt-ingolstadt.png",
				"images/webdesign/tourismusamt-ingolstadt.png",

				"images/werbeagentur/vitality-bowls-usa.jpg",
				"images/werbung/vitality-bowls-usa.png",
				"images/webdesign/vitality-bowls-usa.png",

				"images/werbeagentur/winax-ingolstadt.jpg",
				"images/werbung/winax-ingolstadt.png",
				"images/webdesign/winax-ingolstadt.png",

				"images/werbeagentur/wraith-uk.jpg",
				"images/werbung/wraith-uk.png",
				"images/webdesign/wraith-uk.png",

				// Kunden
				"images/kunden/bubble.png",
				"images/kunden/chemistry-1.png",
				"images/kunden/chemistry-2.png",
				"images/kunden/instruments.png",

				// Testimonials - FERTIG
				"images/testimonials/coffee.jpg",
				"images/testimonials/coffee.png",
				"images/testimonials/danke-head.png",
				"images/testimonials/danke-foot.png",
				"images/testimonials/werbeagentur-ingolstadt.png",
				"images/testimonials/design-last.png",
				"images/testimonials/design-next.png",
				"images/testimonials/responsive-webdesign.png",
				"images/testimonials/planets-shadow.png",
				"images/testimonials/werbeagentur-saturn.png",
				"images/testimonials/design-open.png",
				"images/testimonials/design-close.png",
				"images/testimonials/corporate-design.png",

				// Kontakt / Impressum
				"images/kontakt/kontakt-head.png",
*/

				"images/impressum/footer-header.png"
			], {
				init: function(loaded, total) {
				},
				loaded: function(img, loaded, total) {
				},
				loaded_all: function(loaded, total) {

					setTimeout(function() {
						setTimeout(function() {$("#sprachen").fadeIn("slow");}, 0);
						setTimeout(function() {$(".downlink").fadeIn("slow");}, 0);
						setTimeout(function() {$("#loadwheel").fadeOut(1000);},0);
						setTimeout(function() {$("#intronav").fadeIn(1000);}, 0);
						setTimeout(function() {$("#nav").fadeIn(500);},0);

						setTimeout(function() {$("#intro1 a").show().shuffleLetters();},0);
						setTimeout(function() {$("#intro2 a").show().shuffleLetters();},300);
						setTimeout(function() {$("#intro3 a").show().shuffleLetters();},600);
						setTimeout(function() {$("#intro4 a").show().shuffleLetters();},900);
						setTimeout(function() {$("#intro5 a").show().shuffleLetters();},1200);
						setTimeout(function() {$("html,body").animate({scrollTop: 0}, 100);}, 1200);
						setTimeout(function() {$("#intro").css({"position" : "relative"});}, 1000);
						setTimeout(function() {$('body').addClass('navlaunch');},1500);
						setTimeout(function() {$("#nav-symbol, #nav-dots ul").show();},2000);
					}, 0);
				}
			});
		}, 3500);
	};




// ########################################

// Scrolled

// Load at top
	$("html,body").animate({scrollTop: 0}, 100);



// Browser-Höhe ermitteln
	function getBrowserHeight() {
		windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
		sectionBorder = 30;
		jQuery("#werbeagentur, #testimonials").css("height", windowHeight);
		jQuery("#werbung").css("height", windowHeight+sectionBorder);
		jQuery("#hell, #hell-bg").css("height", (windowHeight/2)+sectionBorder);
	}



// Detect IE (All versions) and Mobile
	function checkBrowser() {
		ms_ie = false;
		mobile = false;

		var ua = window.navigator.userAgent;
		var msie = ua.indexOf('MSIE ');
		var trident = ua.indexOf('Trident/');
		var edge = ua.indexOf('Edge/');

		if (msie > -1 || trident > -1 || edge > -1) {
			ms_ie = true;
		}

		var isiPhone = navigator.userAgent.toLowerCase().indexOf("iphone");
		var isiPad = navigator.userAgent.toLowerCase().indexOf("ipad");
		var isiPod = navigator.userAgent.toLowerCase().indexOf("ipod");
		var isAndroid = /android/i.test(navigator.userAgent.toLowerCase());
		var isBlackberry = navigator.userAgent.toLowerCase().indexOf("BlackBerry");
		var isOpera = /Opera/i.test(navigator.userAgent.toLowerCase());
		var isIE = navigator.userAgent.toLowerCase().indexOf("IEMobile");

		if(isiPhone > -1 || isiPad > -1 || isiPod > -1 || isAndroid || isBlackberry > -1 || isOpera || isIE > -1){
			mobile = true;
		}

		if (mobile) {
			$('body').addClass('mobile');
		}
	}
	checkBrowser();



// Logo Buzz
	function logoBuzz() {
		var logoC = $('#logo-clear');
		var logoB = $('#logo-blur');
		var sound = document.getElementById("logo-sound");

//		sound.play();
		setTimeout(function() {$(logoC).hide();}, 0);
		setTimeout(function() {$(logoB).show();}, 0);
		setTimeout(function() {$(logoB).css("left", "-30px");}, 30);
		setTimeout(function() {$(logoB).css("left", "-20px");}, 60);
		setTimeout(function() {$(logoB).css("left", "-35px");}, 90);
		setTimeout(function() {$(logoB).hide();}, 120);
		setTimeout(function() {$(logoC).show();}, 120);

		setTimeout(function() {$(logoC).hide();}, 200);
		setTimeout(function() {$(logoB).show();}, 200);
		setTimeout(function() {$(logoB).css("left", "-20px");}, 230);
		setTimeout(function() {
			$(logoB).css({
				'-webkit-transform' : 'rotate(-3deg)',
				'-moz-transform'	: 'rotate(-3deg)',
				'-ms-transform'	 : 'rotate(-3deg)',
				'-o-transform'	  : 'rotate(-3deg)',
				'transform'		 : 'rotate(-3deg)'
			});
		}, 230);
		setTimeout(function() {$(logoB).hide();}, 250);
		setTimeout(function() {$(logoC).show();}, 250);

		setTimeout(function() {$(logoC).hide();}, 300);
		setTimeout(function() {$(logoB).show();}, 300);
		setTimeout(function() {$(logoB).css("left", "-35px");}, 330);
			setTimeout(function() {
			$(logoB).css({
				'-webkit-transform' : 'rotate(3deg)',
				'-moz-transform'	: 'rotate(3deg)',
				'-ms-transform'	 : 'rotate(3deg)',
				'-o-transform'	  : 'rotate(3deg)',
				'transform'		 : 'rotate(3deg)'
			});
		}, 360);
		setTimeout(function() {$(logoB).css("left", "-20px");}, 390);
		setTimeout(function() {$(logoB).css("left", "-35px");}, 420);
		setTimeout(function() {$(logoB).hide();}, 450);
		setTimeout(function() {$(logoC).show();}, 450);
		preLoaded = true;
	}



// Logo Buzz Scroll Control
	$(window).scroll(function() {
	 	if($(this).scrollTop() < 200 && !logoBuzzed) {
	 		$('body').addClass('navlaunch');
	 		$('#nav-home').hide();
			setTimeout(function() {logoBuzz();}, 500 );
			logoBuzzed = true;
		} else if($(this).scrollTop() > 200) {
			$('body').removeClass('navlaunch');
			$('#nav-home').show();
			logoBuzzed = false;
		}
	});


// Video Control
	if (!mobile) {
		var video = document.getElementById("video");
		video.pause();
		clearTimeout($.data(this, 'scrollTimer'));
		$.data(this, 'scrollTimer', setTimeout(function() {
			if($(this).scrollTop() < windowHeight-50) {
				if (video.paused) {
					video.play();
				}
			} else if($(this).scrollTop() > windowHeight-50) {
				video.pause();
			}
		}, 250));
	}



// Map Pointer Events
	$(document).ready(function() {
		$('.apcmap iframe').css('pointer-events', 'none');
		$('.apcmap').click(function() {
			$(this).find('iframe').css('pointer-events', 'auto');
		});
		$('.apcmap').mouseleave(function() {
			$(this).find('iframe').css('pointer-events', 'none');
		});
	});



// Bubbles
	var bubbles = $('fn').BubbleEngine({
		particleSizeMin:			0,
		particleSizeMax:			30,
		particleSourceX:			$(window).width()/2-15,
		particleSourceY:			520,
		particleDirection:		  'center',
		particleAnimationDuration:  4000,
		particleAnimationVariance:  200,
		particleScatteringX:		150,
		particleScatteringY:		200,
		gravity:					-100
	});
	bubbles.addBubbles(15);


var j = 1;
var k = 1;
// Chem Symbols
	var ChemTo = false;
	function changeChemSymbols() {
		var i = chemArray.shift();
		chemArray.push(i);
		chemWord = 0-(i*250);

		$(".chem-symbol").clearQueue();
		setTimeout(function() {
			$("#chem-1 .chem-symbol").fadeOut("slow", function() {});
			$("#chem-2 .chem-symbol").delay(100).fadeOut("slow");
			$("#chem-3 .chem-symbol").delay(200).fadeOut("slow");
			$("#chem-4 .chem-symbol").delay(300).fadeOut("slow");
			$("#chem-5 .chem-symbol").delay(400).fadeOut("slow", function () {

				$('#chem-1 .chem-symbol').css({'background-position': '0px ' + chemWord + 'px'});
				$('#chem-2 .chem-symbol').css({'background-position': '-130px '+ chemWord + 'px'});
				$('#chem-3 .chem-symbol').css({'background-position': '-350px ' + chemWord + 'px'});
				$('#chem-4 .chem-symbol').css({'background-position': '-449px ' + chemWord + 'px'});
				$('#chem-5 .chem-symbol').css({'background-position': '-579px ' + chemWord + 'px'});

				setTimeout( function() {
					$("#chem-1 .chem-symbol").fadeIn("slow");
					$("#chem-2 .chem-symbol").delay(100).fadeIn("slow");
					$("#chem-3 .chem-symbol").delay(200).fadeIn("slow");
					$("#chem-4 .chem-symbol").delay(300).fadeIn("slow");
					$("#chem-5 .chem-symbol").delay(400).fadeIn("slow");
				},200);

				clearTimeout(ChemTo);
				if(kundenBG.hasClass('inview')) {
					ChemTo = setTimeout( function() {
						changeChemSymbols();
					}, 5000);	
				}
			});
		}, 30);
	}

	// Random ChemSymb beim Page-Entry durch Random Array von 0-8 (9x Variationen)
	var chemArray = [0,1,2,3,4,5,6,7,8];
//	changeChemSymbols();



// Hide all animations
	$(document).find(".anibox").hide();



// X-Ray Positioning
	xray = 300;
	jQuery("#agentur-links li").mouseenter(function(e) {
		e.stopPropagation();
		if ( $( this ).hasClass( "hirn" ) ) {
			xray = 180;
		} else if ( $( this ).hasClass( "herz" ) ) {
			xray = 420;
		} else if ( $( this ).hasClass( "bauch" ) ) {
			xray = 550;
		} else {
			xray = 300;
		}
		var t = jQuery('#agentur').scrollTop();
		$('#agentur .anibox').clearQueue().animate({'top': t + xray});
		$('#agentur #organs').clearQueue().animate({'top': t - xray });
	});



// Uhr-Funktionen
	var m2,h2;
	var runClock = function() {
		var hours = new Date().getHours();
		var mins = new Date().getMinutes();
		var seconds = new Date().getSeconds();
		
		var sdegree = seconds * 6;
		var srotate = "translateZ(-0.01px) scale(1) rotate(" + sdegree + "deg)";
		$(".seconds").css({"-ms-transform" : srotate, "-webkit-transform" : srotate, "-moz-transform" : srotate, "-o-transform" : srotate, "transform" : srotate});

		if(h2 != hours) {
			var hdegree = hours * 30 + (mins / 2);
			var hrotate = "translateZ(-0.01px) scale(1) rotate(" + hdegree + "deg)";
			$(".hours").css({"-ms-transform" : hrotate, "-webkit-transform" : hrotate, "-moz-transform" : hrotate, "-o-transform" : hrotate, "transform" : hrotate});			
		}
	
		if(m2 != mins) {
			var mdegree = mins * 6;
			var mrotate = "translateZ(-0.01px) scale(1) rotate(" + mdegree + "deg)";
			$(".minutes").css({"-ms-transform" : mrotate , "-webkit-transform" : mrotate, "-moz-transform" : mrotate, "-o-transform" : mrotate, "transform" : mrotate});
		}
		h2 = hours;
		m2 = mins;
		setTimeout( function() {
			if (jQuery("#agentur").hasClass('inview')) {
				runClock();
			}
		}, 1000 );
	};



// Formular
	jQuery("#kontakt-form input").on("change", function(e) {
		e.preventDefault();
		/*form = jQuery("#kontakt-form");
		form.valid();*/
	});

	jQuery("#send-form").on("click" , function(e) {
		e.preventDefault();
		tmp_form = jQuery("#kontakt-form");
		if(tmp_form.valid()) {
			action 	 = tmp_form.attr('action');
			formData = tmp_form.serializeArray();
			jQuery.post( action, formData, function(data) {
				if(data.status == "OK") {
					tmp_form.hide();
					jQuery("#kontaktformular #thank-you").fadeIn();
				}
			}, "json" );
		} else {
			return false;
		}
	}); 



// Toplink
	jQuery('a.toplink').click(function(e){
		e.preventDefault();
		jQuery("html, body").animate({ scrollTop: 0 }, 900);
	});




// One Page
	$("a.nav-item").click( function() {
		id = $(this).attr("href").split("#");
		id = id[1];
		slide = $("#"+id).offset();
		$('html,body').animate({scrollTop: slide.top}, {queue: false, duration: 1000 , easing: 'easeOutCubic'});
		return false;
	});




// Toggle Agentur
	$('.agenturlink').on('click', function() {
		var id = $(this).attr('id');
		var actualFlyout = $('.agentur_'+id);

		if(id) {
			if(actualFlyout.hasClass('opened') ) {
				actualFlyout.toggleClass('opened').slideUp(350);
					$(".agenturlead").toggleClass('opened').toggle(500);
			} else {
				if($(".agentur_text.opened").length > 0) {
					$(".agentur_text.opened").toggleClass('opened').slideUp(350, function() {}); 
				}
			actualFlyout.toggleClass('opened').toggle(500);
			}

			if (!$(".agentur_text").hasClass('opened') ) {
				$(".agenturlead").toggleClass('opened').toggle(500);
			}
		}
	});



// Toggle Design
	$('.designlink').on('click', function() {
		var id = $(this).attr('id');
		var actualFlyout = $('.design_'+id);

		if(id) {
			if(actualFlyout.hasClass('opened') ) {
				actualFlyout.toggleClass('opened').slideUp(350);
					$(".designlead").toggleClass('opened').toggle(500);
			} else {
				if($(".design_text.opened").length > 0) {
					$(".design_text.opened").toggleClass('opened').slideUp(350, function() {}); 
				}
			actualFlyout.toggleClass('opened').toggle(500);
			}

			if (!$(".design_text").hasClass('opened') ) {
				$(".designlead").toggleClass('opened').toggle(500);
			}
		}
	});




// Toggle Datenschutz
	jQuery('.datenschutz').on('click', function() {
		var datenschutzFlyout = jQuery('#datenschutz');
		if( $(this).hasClass('opened') ) {
			datenschutzFlyout.slideUp(350);
			$(this).removeClass('opened');
		} else {
			datenschutzFlyout.slideDown(350); 
			$(this).addClass('opened');
		}
	});



// Counters
	var runCounter = function() {
		$('.stats span').text('0');

		var heute = new Date();
		var monat = heute.getMonth();
		var jahr = heute.getFullYear();
		var counterTime = 3000;

		var countEnd1 = jahr-1997;
		var countEnd2 = ((jahr-(1997-1))*24)+(monat*2);
		var countEnd3 = countEnd2*3.5;
		var countEnd4 = 18; 
		// Länder = AT, AU, CH, CN, DE, DK, ES, FJ, FR, IT, LI, PT, SE, SN, NZ, UK, US, VN

		$({countNum: $('#counter1 span').text()}).animate({countNum: countEnd1}, {
			duration: counterTime,
			easing:'linear',
			step: function() {
				$('#counter1 span').text(Math.floor(this.countNum));
			},
			complete: function() {
				$('#counter1 span').text(this.countNum);
			}
		});

		$({countNum: $('#counter2 span').text()}).animate({countNum: countEnd2}, {
			duration: counterTime,
			easing:'linear',
			step: function() {
				$('#counter2 span').text(Math.floor(this.countNum));
			},
			complete: function() {
				$('#counter2 span').text(this.countNum);
			}
		});

		$({countNum: $('#counter3 span').text()}).animate({countNum: countEnd3}, {
			duration: counterTime,
			easing:'linear',
			step: function() {
				$('#counter3 span').text(Math.floor(this.countNum));
			},
			complete: function() {
				$('#counter3 span').text(this.countNum);
			}
		});

		$({countNum: $('#counter4 span').text()}).animate({countNum: countEnd4}, {
			duration: counterTime,
			easing:'linear',
			step: function() {
				$('#counter4 span').text(Math.floor(this.countNum));
			},
			complete: function() {
				$('#counter4 span').text(this.countNum);
			}
		});
	};



// Coffee
	$(document).ready(function() {
		try {
			$('#ripple').ripples({
				resolution: 128,
				dropRadius: 50, //px
				perturbance: 0.07,
				interactive: false
			});
		}
		catch (e) {
			$('.error').show().text(e);
		}
		$(".testimonials-link").on('click', function() {
			runRipple();
		});
	});



// Testimonials
	var testimonialCount = $('.testimonial').length;
	var testimonial = 1;

	switchSlide();
	function switchSlide(action) {
		if( action == 'prev') {
			testimonial--;
			if( testimonial == 0) {
				testimonial = testimonialCount;
			}
		} else {
			testimonial++;
			if( testimonial > testimonialCount) {
				testimonial = 1;
			}
		}	
		jQuery('.testimonial').removeClass('show');
		setTimeout( function() {$("#testimonial"+testimonial).addClass('show');},500);
	}

	jQuery("#tprev").click(function() {
		switchSlide('prev')
	});

	jQuery("#tnext").click(function() {
		switchSlide('next')
	});

	var runRipple = function() {
	// Automatic drops
		var $el = $('#ripple');
		var x = Math.random() * $el.outerWidth();
		var y = Math.random() * $el.outerHeight();
		var dropRadius = 50;
		var strength = 0.07 + Math.random() * 0.07;
		$el.ripples('drop', x, y, dropRadius, strength);
	};



// Portfolio
	var porttemp = 31;

	$(document).on('click', '.portfolio', function(){
		event.preventDefault();
		var refid = $(this).data('portfolio');
		var reftag = $(this).data('tag');
		var refgrid = $(this).data('refgrid');
		var refimages = refgrid.charAt(refgrid.length - 1)
		var doors = jQuery('#left-door, #right-door');
		if (!doors.hasClass('in')) {
			doors.css('z-index', '9999');
			doors.addClass('in');
			jQuery('#ref'+refid).addClass('show');
			if (refid > porttemp) {
				jQuery('#left-door').addClass('stay');
				jQuery('#portfolio_thumbs').addClass('stay');
			} else {
				jQuery('#left-door').removeClass('stay');
				jQuery('#portfolio_thumbs').removeClass('stay');

			var refgridcontent = '<div class="refgrid '+refgrid+'">'
				+'<div class="reflineh"></div>'
				+'<div class="reflinev"></div>';
				for (var i = 1; i <= refimages; i++) {
					refgridcontent +='<div class="refbild refbild'+i+'"><div class="refbildbg" style="background-image: url(images/design/'+reftag+'-'+i+'.jpg)"></div></div>';
				}
				refgridcontent +='</div>';
				$('#left-door').html(refgridcontent);
				setTimeout(function() {$('.refgrid').fadeIn(500);}, 500);
			}
		} else {
		switchRef('', refid);
		}
	});

	function switchRef(action, refid) {
		var refCount = $('.portfolio').length;
		if( action == 'prev') {
			refid--;
			if( refid == 0) {
				refid = refCount;
			}
		} else if( action == 'next') {
			refid++;
			if( refid > refCount) {
				refid = 1;
			}
		}

		$('.refgrid').fadeOut(500);
		setTimeout(function() {
			var reftag = $('#ref'+refid).data('reftag');
			var refgrid = $('#ref'+refid).data('refgrid');
			var refimages = refgrid.charAt(refgrid.length - 1)

			var refgridcontent = '<div class="refgrid '+refgrid+'">'
			+'<div class="reflineh"></div>'
			+'<div class="reflinev"></div>';

			if (refid <= porttemp) {
				for (var i = 1; i <= refimages; i++) {
					refgridcontent +='<div class="refbild refbild'+i+'"><div class="refbildbg" style="background-image: url(images/design/'+reftag+'-'+i+'.jpg)"></div></div>';
				}
			}

			refgridcontent +='</div>';
			$('#left-door').html(refgridcontent);
			setTimeout(function() {$('.refgrid').fadeIn(500);}, 500);
		}, 500);

		if (refid > porttemp) {
			jQuery('#left-door').addClass('stay');
			jQuery('#portfolio_thumbs').addClass('stay');
		} else {
			jQuery('#left-door').removeClass('stay');
			jQuery('#portfolio_thumbs').removeClass('stay');
		}

		setTimeout(function() {jQuery(".reference").removeClass('show');}, 500);

		setTimeout( function() {
			jQuery('#ref'+refid).addClass('show');
		},500);
	}

	jQuery(".refprev").click(function() {
		var refid = $(this).data('nav');
		jQuery(this).closest('reference').animate({"opacity": "0"},250, "easeOutCubic");
		switchRef('prev', refid);
	});

	jQuery(".refnext").click(function() {
		var refid = $(this).data('nav');
		jQuery(this).closest('reference').animate({"opacity": "0"},250, "easeOutCubic");
		switchRef('next', refid);
	});

	$(document).on('click', '.close-doors', function(){
		event.preventDefault();
		var doors = jQuery('#left-door, #right-door');
		if (doors.hasClass('in')) {
			jQuery('#left-door').removeClass('stay');
			jQuery('#portfolio_thumbs').removeClass('stay');
			setTimeout(function (){
				jQuery('.reference').removeClass('show');
				jQuery('.refgrid').removeClass('show');
				doors.css('z-index', '-1');
			}, 600); // how long do you want the delay to be? 	
			doors.removeClass('in');
		}
	});





// Toggle Form
	$('.toggleform').on('click', function() {
		var actualFlyout = $(".flyoutform");
		if( actualFlyout.hasClass('opened') ) {
			actualFlyout.toggleClass('opened').slideUp(350);
				$(".toggleformlead").toggleClass('opened').toggle(500);
			} else {
			if($(".toggleformtext.opened").length > 0) {
				$(".toggleformtext.opened").toggleClass('opened').slideUp(350, function() {}); 
			}
		actualFlyout.toggleClass('opened').toggle(500);
		}
	});





// InView

	// InView Selectors vordefinieren
	var $window = $(window);

	var werbungBG = $('#werbung');
	var agenturBG = $('#agentur');
	var werbeagenturBG = $('#werbeagentur');
	var countersBG = $('#werbeagentur .content');
	var designBG = $('#design');
	var testimonialsBG = $('#testimonials');
	var kundenBG = $('#kunden');
	var kontaktBG = $('#kontakt');

	var windowHeight = $window.height(); //get the height of the window

	/* author Remy Sharp - url http://remysharp.com/2009/01/26/element-in-view-event-plugin */
	(function ($) {
		function getViewportHeight() {
			var height = window.innerHeight; // Safari, Opera
			var mode = document.compatMode;

			if ( (mode || !$.support.boxModel) ) { // IE, Gecko
				height = (mode == 'CSS1Compat') ?
				document.documentElement.clientHeight : // Standards
				document.body.clientHeight; // Quirks
			}
			return height;
		}

		$(window).scroll(function () {
			var vpH = getViewportHeight(),
			scrolltop = (document.documentElement.scrollTop ?
			document.documentElement.scrollTop :
			document.body.scrollTop),
			elems = [];

			// naughty, but this is how it knows which elements to check for
			$.each($.cache, function () {
				if (this.events && this.events.inview) {
					elems.push(this.handle.elem);
				}
			});

			if (elems.length) {
				$(elems).each(function () {
					var $el = $(this),
					top = $el.offset().top,
					height = $el.height(),
					inview = $el.data('inview') || false;

					if (scrolltop > (top + height) || scrolltop + vpH < top) {
						if (inview) {
							$el.data('inview', false);
							$el.trigger('inview', [ false ]);
						}
					} else if (scrolltop < (top + height)) {
						if (!inview) {
							$el.data('inview', true);
							$el.trigger('inview', [ true ]);
						}
					}
				});
			}
		});

		// kick the event to pick up any elements already in view.
		// note however, this only works if the plugin is included after the elements are bound to 'inview'
		$(function () {
			$(window).scroll();
		});
	})(jQuery);


	// InView Custom
	$('.section').bind('inview', function (event, isInView) {
		var el = $(this);
		if (isInView === true) {
			$(this).addClass("inview");
			el.find(".fx").show();
			el.find(".anibox").show();
			// $(this).css({'visibility': 'visible'});

		} else {
			$(this).removeClass("inview");
			el.find(".fx").hide();
			el.find(".anibox").hide();
			// $(this).css({'visibility': 'hidden'});
		}
	});


	var inAgenturView = false;
	agenturBG.on('inview', function(event, isInView) {
		if (isInView) {
			setTimeout( function() {$("#organs").fadeIn(1000);
				$("#heart").addClass('animate');
				$(".cog").addClass('animate');
				$(".butterfly-wing").addClass('animate');
				runClock();
			},1000);
		} else {
			$("#heart").removeClass('animate');
			$(".cog").removeClass('animate');
			$(".butterfly-wing").removeClass('animate');
			setTimeout( function() {$("#organs").hide();},200);
		}
	});


	var snowIsFalling = false;
	werbeagenturBG.on('inview', function(event, isInView) {
		if (isInView) {
			if(snowIsFalling === false) {
				snowfall();
			}
			snowIsFalling = true;
		} else {
			if(snowIsFalling === true) {
				stopSnowfall();
				snowIsFalling = false;
			}
		}
	});


	countersBG.on('inview', function(event, isInView) {
		if (isInView) {
			runCounter();
		}
	});

	var inTestimonialsView = false;
	testimonialsBG.on('inview', function(event, isInView) {
		if(isInView) {
			$(".planet, .pball, .planet-shadow").addClass('animate');
		}
		else {
			$(".planet, .pball, .planet-shadow").removeClass('animate');
		}
		if(isInView && !inTestimonialsView) {
			runRipple();
			inTestimonialsView = true;
		}
		else {
			inTestimonialsView = false;
		}
	});


	kundenBG.on('inview', function(event, isInView) {
		if (isInView) {
			changeChemSymbols();
		}
	});


	var inKontaktView = false;
	kontaktBG.on('inview', function(event, isInView) {
		if (isInView && !inKontaktView) {
			document.getElementById('virtualcube_0').virtualcube.setAutorotate(1);
			inKundenView = true;
		} else {
			document.getElementById('virtualcube_0').virtualcube.setAutorotate(0);
			inKundenView = false;
		}
	});

	
	var inDesignView = false;
	designBG.on('inview', function(event, isInView) {
		if (isInView && !inDesignView) {
			inKundenView = true;
		} else {
			inKundenView = false;
		}
	});




// Cube Setup
if ($('body').hasClass('home')) {
	var checkCube = function() {
		var cube = document.getElementById('virtualcube_0');
		if(cube && cube.virtualcube) {
			cube.virtualcube.scramble();
		} else {
			setTimeout( function() {
				checkCube();
			},200);
		}
	}

	setTimeout( function() {
		checkCube();
	},200);


	setTimeout(function() {
		document.getElementById('virtualcube_0').virtualcube.scramble();
	}, 2000);


	jQuery('#cube').mouseenter(function() {
		document.getElementById('virtualcube_0').virtualcube.setAutorotate(0);
	}).mouseleave (function() {
		document.getElementById('virtualcube_0').virtualcube.setAutorotate(1);
	});

	function newPos(x, pos, adjuster, inertia, offset){
		return x + "% " + ((-(pos - adjuster) * inertia) + offset)  + "px";
	}

	function newTop(pos, adjuster, inertia, offset){
		return ((-(pos - adjuster) * inertia) + offset)  + "px";
	}

	function fixTop(pos, adjuster, inertia, offset){
		return 0-((-(pos - adjuster) * inertia) + offset)  + "px";
	}

	function newSkewLeft(pos, adjuster, inertia, offset){
		return "skewY(" + ((-(pos - adjuster) * inertia) + offset)  + "deg)";
	}

	function newSkewRight(pos, adjuster, inertia, offset){
		return "skewY(" + (0-((-(pos - adjuster) * inertia) + offset))  + "deg)";
	}

	isScramble = true; 

}

	function Move(){
		var pos = $window.scrollTop();

		if (werbungBG.hasClass('inview')) {
			$('#glass1').css({'backgroundPosition': newPos(0, pos, (windowHeight*1)+0, -0.6, 0)});
		}

		if (agenturBG.hasClass('inview')) {
			$('#agentur .anibox').css({'top': newTop(pos, (windowHeight*2)+0+sectionBorder, -0.7, xray)});
			$('#agentur #organs').css({'top': fixTop(pos, (windowHeight*2)+0+sectionBorder, -0.7, xray)});
		}

		if (werbeagenturBG.hasClass('inview')) {
			werbeagenturBG.css({'backgroundPosition': newPos(50, pos, (windowHeight*2)+1000+sectionBorder, 0.3, -400)});
		}

		if (designBG.hasClass('inview')) {
			$('#design #mint').css({'top': newTop(pos, (windowHeight*3)+1000+sectionBorder, 0.7, 400)});
			if ( ((windowHeight*3)+1000)-pos < 650 && pos-((windowHeight*3)+1000+sectionBorder) < 650 ) {
				$('#design #rays1').css({'top': newTop(pos, (windowHeight*3)+1000+sectionBorder, 0.1, -100), 'transform': newSkewLeft(pos, (windowHeight*3)+1000+sectionBorder, -0.1, 0)});
				$('#design #rays2').css({'top': newTop(pos, (windowHeight*3)+1000+sectionBorder, 0.1, -100), 'transform': newSkewRight(pos, (windowHeight*3)+1000+sectionBorder, -0.1, 0)});
			}
		}

		if (kundenBG.hasClass('inview')) {
			$('#chem-1').css({'top': newTop(pos, (windowHeight*3)+2000+sectionBorder, 0.7, 230)});
			$('#chem-2').css({'top': newTop(pos, (windowHeight*3)+2000+sectionBorder, -1.0, 200)});
			$('#chem-3').css({'top': newTop(pos, (windowHeight*3)+2000+sectionBorder, -0.5, 250)});
			$('#chem-4').css({'top': newTop(pos, (windowHeight*3)+2000+sectionBorder, 0.5, 280)});
			$('#chem-5').css({'top': newTop(pos, (windowHeight*3)+2000+sectionBorder, 1.5, 220)});
		}

		if (kontaktBG.hasClass('inview')) {
			if(isScramble === false) {
				document.getElementById('virtualcube_0').virtualcube.scramble();
				isScramble = true;
			}
		}

		$('#pixels').html("Position: " + pos);
		$('#browserh').html("B.Height: " + windowHeight);

	}



	// User-Interaktion
	getBrowserHeight();
	

	jQuery(window).on('resize', function(){
		Move();
		getBrowserHeight();
	});		
	
	$window.bind('scroll', function(){
		Move();
	});
	
});