	

var stepSpeed = 1; // steps taken per iteration
var delaySpeed = 30; // milisecond delay between iterations

var ani= {
		freedom: {					// Initial animation of freedom, triggers art animation next
				type: 'opacity',
				from: 0,
				to: 100,
				step: stepSpeed,
				delay: delaySpeed,
				onfinish: function(){
					$fx('#art').fxAdd(ani.art).fxRun();
					$fx('#freedomGlow').fxAdd(ani.fadeOut).fxRun();
					$fx('#artGlow').fxAdd(ani.fadeIn).fxRun();
					runBanner('700px -150px', 8, 12)	// "Art"	
				}
		},
		art: {
				type: 'opacity',
				from: 0,
				to: 100,
				step: stepSpeed,
				delay: delaySpeed,
				onfinish: function(){
					$fx('#science').fxAdd(ani.science).fxRun();
					$fx('#artGlow').fxAdd(ani.fadeOut).fxRun();
					$fx('#scienceGlow').fxAdd(ani.fadeIn).fxRun();						
					runBanner('700px -500px', 8, 12)	// "Science"
				}
		},
		science: {
				type: 'opacity',
				from: 0,
				to: 100,
				step: stepSpeed,
				delay: delaySpeed,
				onfinish: function(){
					$fx('#medicine').fxAdd(ani.medicine).fxRun();
					$fx('#scienceGlow').fxAdd(ani.fadeOut).fxRun();
					$fx('#medicineGlow').fxAdd(ani.fadeIn).fxRun();						
					runBanner('700px -850px', 8, 12) // "Medicine"	
				}
		},
		medicine: {
				type: 'opacity',
				from: 0,
				to: 100,
				step: stepSpeed,
				delay: delaySpeed,
				onfinish: function(){
					$fx('#medicineGlow').fxAdd(ani.quickOut).fxRun();
					$fx('#bannerGlow').fxAdd(ani.bannerGlow).fxRun();											
				}
		},
		bannerRun: {
				type: 'backgroundx',
				from: 800,
				to: -800,
				step: -stepSpeed * 8,
				delay: delaySpeed,
		},
		bannerGlow: {
				type: 'opacity',
				from: 0,
				to: 100,
				step: stepSpeed * 4,
				delay: delaySpeed/2,			
				onfinish: function(){
					$fx('#bannerGlow').fxAdd(ani.fadeOut).fxRun();					
					$fx('#banner').fxAdd(ani.fadeIn).fxRun();					
				}														
		},
		fadeIn: {
				type: 'opacity',
				from: 0,
				to: 100,
				step: stepSpeed * 4,
				delay: delaySpeed,			
		},
		fadeOut: {
				type: 'opacity',
				from: 100,
				to: 0,
				step: -stepSpeed,
				delay: delaySpeed,
		
		},
		quickOut: {
				type: 'opacity',
				from: 100,
				to: 0,
				step: -stepSpeed*2,
				delay: delaySpeed,			
		},
		quickIn: {
				type: 'opacity',
				from: 0,
				to: 100,
				step: stepSpeed * 4,
				delay: delaySpeed/2,			
		},
};

	
function runBanner(position,bSpeed, bDelay){	
	var	bannerAni= {
				scroll: { 
					type: 'backgroundx',
					from: 750,
					to: -800,
					step: -bSpeed,
					delay: bDelay,
				},
	}
	document.getElementById('runningBanner').style.backgroundPosition = position;
	$fx('#runningBanner').fxAdd(bannerAni.scroll).fxRun();		
}
	
window.onload = function() {	
	runBanner('800px 200px',12, 12);	
	$fx('#freedom').fxAdd(ani.freedom).fxRun();
	$fx('#freedomGlow').fxAdd(ani.fadeIn).fxRun();
}