/* Бургер */

$('.burger').on('click', () => {
   $('.burger').toggleClass('active');
   $('.mobile nav').toggleClass('open');
   $('.mobile__nav').toggleClass('show');
	$('body').toggleClass('_lock')
});

$(document).ready(function(){
	$('._block__title').click(function(event){
		if($('.questions-sp').hasClass('one')){
			$('._block__title').not($(this)).removeClass('.active');
			$('._block__text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});

$('.slider').slick({
	arrows:true,
	dots:true,
	slidesToShow:1,
	speed:100,
	cssEase: 'ease',
	variableWidth:true,
	touchMove:false,
	Infinity:false,
	centerMode:true,
	initialSlide:0,
	focusOnSelect: true,
	responsive:[
		{
			breakpoint: 767,
			settings: {
				slidesToShow:1,
				variableWidth:true,
				centerMode:true,
				centerPadding:'50px'
			}
		},
		
	],
	});
