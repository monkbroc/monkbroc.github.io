$(document).ready(function() {
	$(".fancybox-thumb").fancybox({
		helpers	: {
			title	: {
				type: 'inside'
			},
			overlay : {
				css : {
					'background' : 'rgba(1,1,1,0.65)'
				}
			}
		},
		beforeLoad: function() {
			this.title = $(this.element).next("article").html();
		}
	});
	$(".expand-bg").one('inview', function() {
		var el = $(this);
		setTimeout(function() {
			el.find('.expand-inview').addClass('expand');
		}, 1000);
	});
	$("#resume .reach-out").on('click', function() {
		_gaq.push(['_trackEvent','Download','PDF',this.href]);
	});
	$(".social-icons a").on('click', function() {
		_gaq.push(['_trackEvent','Social','Visit',$(this).find('img').attr('alt')]);
	});
	$('#myModal').on('shown.bs.modal', function () {
		_gaq.push(['_trackEvent','ContactForm', 'Open']);
	});
	$(".work-images a").on('click', function() {
		_gaq.push(['_trackEvent','Work','Open',this.href]);
	});

	var Badge = function(selector) {
		this.$el = $(selector);
		this.initialWidth = this.$el.width();
		$(window).on('resize', $.proxy(this.adjustWidth, this));
		this.adjustWidth();
	};
	$.extend(Badge.prototype, {
		widthOffset: 50,
		adjustWidth: function() {
			var currentWidth = $(window).width() - this.widthOffset;
			if(currentWidth > this.initialWidth) {
				this.setScale(null);
			} else {
				this.setScale(currentWidth * 1.0 / this.initialWidth);
			}
		},

		setScale: function(scale) {
			var transformScale = scale ? "scale(" + scale + ")" : null;
			this.$el.css({
				"-ms-zoom": scale,
				"-moz-transform": transformScale,
				"-moz-transform-origin": "0 0",
				"-o-transform": transformScale,
				"-o-transform-origin": "0 0",
				"-webkit-transform": transformScale,
				"-webkit-transform-origin": "0 0",
			});
		},
	});
	var badge = new Badge("#badge");
});
