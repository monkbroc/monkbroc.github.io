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
	$("#contact-form").on('submit', function(event) {
		event.preventDefault();
		var form = $(this);
		_gaq.push(['_trackEvent','ContactForm', 'Send']);
		form.find(".alert").removeClass("hide");
		$.ajax({
			url: form.attr('action'),
			data: form.serialize()
		});
		setTimeout(function() { $('#myModal').modal('hide'); }, 1500);
	});
	$("#resume .hire-me").on('click', function() {
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
});
