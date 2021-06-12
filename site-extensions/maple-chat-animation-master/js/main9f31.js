var jx = jQuery.noConflict();

jx(function(){
	jx("#maple-anim-wrapper").css('display', 'block');
	startmaple();
});

function startmaple() {

	// Phase one
	jx("#maple-anim-tofade").css({'opacity': '1','transform': 'scale(1)'});
	setTimeout(function(){
		jx("#maple-anim-tofade").css({'color': '#9e9e9e'});
		jx("#maple-anim-rb1").css('opacity', '.4');
	},350)
	setTimeout(function(){
		jx(".maple-anim-desinput").css('opacity', '0');
		jx("#maple-anim-rb1").css('opacity', '1');
		jx("#maple-anim-tocome").css('opacity', '1')
	},1200)
	setTimeout(function(){
		jx("#maple-anim-rb1").css('transform', 'scale(.7)');
	},2500)
	setTimeout(function(){
		jx("#maple-anim-rb1").css('transform', 'scale(1)');
	},2850)
	setTimeout(function(){
		jx("#maple-anim-rb1, .maple-anim-desinput").css('opacity', '0');
	},3600)

	// Phase two 
	setTimeout(function(){
		jx("#maple-anim-p2first").css({
			'opacity': '1',
			'transform': 'scale(1)'
		});
	},4600)
	setTimeout(function(){
		jx("#maple-anim-p2first").css({
			'transform': 'translateY(-140%)'
		});
	},5200)
	setTimeout(function(){
		jx("#maple-anim-tocircle").css('transform', 'translateX(-50%) scale(1)');
		jx("#maple-anim-doctext").css('opacity', '1');
	},6200)
	setTimeout(function(){
		jx("#maple-anim-incircle").css('transform', 'scale(1.1)');
	},7200)
	setTimeout(function(){
		jx("#maple-anim-incircle, #maple-anim-doctext, #maple-anim-tocircle").css('opacity', '0');
		jx("#maple-anim-p2first").css('transform', 'translateY(-180px)');
	},7800)
	setTimeout(function(){
		jx("#maple-anim-p2second").css({
			'opacity': '1',
			'transform': 'scale(1)'
		});
	},8400);
	setTimeout(function(){
		jx("#maple-anim-p2first").css({'transform': 'translateY(-260px)'});
		jx("#maple-anim-p2second").css({
		 	'opacity': '1',
		 	'transform': 'translateY(-80px) scale(1)',
		 });
	},9000)
	setTimeout(function(){
		jx("#maple-anim-p2third").css({
		 	'opacity': '1',
		 	'transform': 'scale(1)',
		 });
	},9800)
	setTimeout(function(){
		jx("#maple-anim-p2first").css({'transform': 'translateY(-480px)'});
		jx("#maple-anim-p2second").css({
		 	'opacity': '1',
		 	'transform': 'translateY(-360px) scale(1)',
		 });
		jx("#maple-anim-p2third").css({
		 	'opacity': '1',
		 	'transform': 'scale(1) translateY(-280px)',
		 });
	},10800)
	setTimeout(function(){
		jx(".maple-anim-callbox").css({
			'opacity': '1',
			'transform': 'translateY(0px) scale(1)',
		});
		setTimeout(function(){
			jx("#maple-anim-accept").css('transform', 'translateY(50%) scale(1)');
		},200)
		setTimeout(function(){
			jx("#maple-anim-reject").css('transform', 'translateY(50%) rotate(135deg) scale(1)');
		},400)
	},11000)
	setTimeout(function(){
		jx("#maple-anim-reject").css('transform', 'translateY(50%) rotate(135deg) scale(0)');
		setTimeout(function(){
			jx("#maple-anim-accept").css('transform', 'translateY(50%) scale(0)');
		},200)
		setTimeout(function(){
			jx(".maple-anim-callbox").css({
				'transform': 'translateY(0px) scale(0)',
				'opacity': '0'
			});
		},400)
		setTimeout(function(){
			jx(".maple-anim-cend").css('opacity', '1');
		},800)
	},12400)
	setTimeout(function(){
		jx("#maple-anim-p1").css({
		 	'opacity': '1',
		 	'transform': 'scale(1) translateY(60px)',
		 });
	},14200)
	setTimeout(function(){
		jx(".maple-anim-cend").css('transform', 'translateY(-60px)');
		jx("#maple-anim-p2third").css({
		 	'opacity': '1',
		 	'transform': 'scale(1) translateY(-360px)',
		 });
		jx("#maple-anim-p1").css({
		 	'transform': 'scale(1) translateY(0px)',
		 });
	},15000)
	setTimeout(function(){
		jx("#maple-anim-p2").css({
			'opacity': '1',
		 	'transform': 'scale(1)',
		 });
		setTimeout(function(){
			jx("#maple-anim-rb2").css({
			 	'opacity': '1',
			 });
		},400);
	},15400)
	setTimeout(function(){
		jx("#maple-anim-rb2").css('transform', 'scale(.7)');
	},16800)
	setTimeout(function(){
		jx("#maple-anim-rb2").css('transform', 'scale(1)');
	},17150)
	setTimeout(function(){
		jx(".maple-anim-pharmbox, #maple-anim-rb2, .maple-anim-cend").css({'transform': 'scale(1) translateY(-200px)', 'opacity': '0'});
	},17700)
	setTimeout(function(){
		jx("#maple-anim-p4first, .maple-anim-select-pharm").css({
		 	'opacity': '1',
		 	'transform': 'scale(1)',
		 });
		setTimeout(function(){
			jx("#maple-anim-p4second").css({
			 	'opacity': '1',
			 	'transform': 'scale(1)',
			 });
		},200)
		setTimeout(function(){
			jx("#maple-anim-p4third").css({
			 	'opacity': '1',
			 	'transform': 'scale(1)',
			 });
		},400)
		setTimeout(function(){
			jx("#maple-anim-p4third, #maple-anim-p4second, #maple-anim-p4first, .maple-anim-select-pharm").css({
			 	'opacity': '1',
			 	'transform': 'scale(1) translateY(-50px)',
			 });
		},1200)
	},18500)
	setTimeout(function(){
		jx("#maple-anim-tofadex").css('opacity', '0');
		jx("#maple-anim-p4second").css('border', '1px solid #F44336');
		jx("#maple-anim-p4first, #maple-anim-p4third").css('opacity', '.4');
	},20200)
	setTimeout(function(){
		jx("#maple-anim-p4first, #maple-anim-p4third, .maple-anim-select-pharm").css('opacity', '0');
		jx("#maple-anim-p4second").css('transform', 'translateY(-180px)');
	},21000)
	setTimeout(function(){
		jx("#maple-anim-p4fourth").css({
			 	'opacity': '1',
			 	'transform': 'scale(1)',
			 });
	},21800)
	setTimeout(function(){
		jx("#maple-anim-p4fourth, #maple-anim-p4second").css('opacity', '0');
	},24000)
	setTimeout(function(){
		jx("#maple-anim-inwrapper").css('opacity', '0');
		setTimeout(function(){
			jx("#maple-anim-tofade, #maple-anim-rb1, #maple-anim-tocome, .maple-anim-desinput, #maple-anim-p2first, #maple-anim-tocircle, #maple-anim-doctext, #maple-anim-incircle, #maple-anim-p2second, #maple-anim-p2third, .maple-anim-callbox, #maple-anim-accept, #maple-anim-reject, .maple-anim-cend, #maple-anim-p1, #maple-anim-p2third, #maple-anim-p2, #maple-anim-rb2, .maple-anim-pharmbox, #maple-anim-p4first, #maple-anim-p4second, #maple-anim-p4third, #maple-anim-tofadex, #maple-anim-p4fourth, .maple-anim-select-pharm").removeAttr('style');
		},500)
		setTimeout(function(){
			jx("#maple-anim-inwrapper").css('opacity', '1');
			startmaple()
		}, 1000)
	},25000)
}