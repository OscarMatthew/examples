// Put your javascript or jquery here.
// Remember to comment well. Sections, which page it's used on, and what each function does, and in most cases what each line does.

// Variables are created in Featured video html so the user can change the video iframe manually

// $('.video-play').each(function() {
//   $(".video-play").on('click', function() {
//     $(this).addClass("js-active");
//     $(".video-items.slick-current").addClass('js-active');
//     $('.slick-current.js-active .video-1').html(autoPlayVideo1);
//     $('.slick-current.js-active .video-2').html(autoPlayVideo2);
//     $('.slick-current.js-active .video-3').html(autoPlayVideo3);
//     $('.slick-current.js-active .video-4').html(autoPlayVideo4);
//     $('.slick-current.js-active .video-5').html(autoPlayVideo5);
//   });
// });

$('.video-play').each(function() {
	var videoItem = $(this).parents();
	$(".video-play").on('click', function() {
		$(this).addClass("js-active");
		if ($(this).hasClass("js-active")) {
			$(videoItem).addClass('js-active');
		} else {
			$(videoItem).removeClass('js-active');
		}	
	});
});
	
// 	$('.video-items.js-active').each(function() {	
// 		if ($(this).hasClass("slick-current")) {
// 			$('.embed-video').addClass("js-active");
// 		} else {
// 				$('.embed-video').removeClass("js-active");
// 			}
// 		}); 
// });