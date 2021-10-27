/* Бургер */

// $('.burger').on('click', () => {
//    $('.burger').toggleClass('active');
//    $('.mobile nav').toggleClass('open');
//    $('.mobile__nav').toggleClass('show');
// 	$('body').toggleClass('_lock')
// });

$(document).ready(function(){
	$('._block__title').click(function(event){
		if($('.questions-sp').hasClass('one')){
			$('._block__title').not($(this)).removeClass('.active');
			$('._block__text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});