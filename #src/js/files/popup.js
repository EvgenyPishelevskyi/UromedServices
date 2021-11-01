/* Modal 1  */

$(function () {
	$('#callback-button').click(function () {
	  $('#modal-1').addClass('modal_active');
	  $('body').addClass('hidden');
	});
  
	$('.modal__close-button').click(function () {
	  $('#modal-1').removeClass('modal_active');
	  $('body').removeClass('hidden');
	});
  
	$('#modal-1').mouseup(function (e) {
	  let modalContent = $(".modal__content");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		 $(this).removeClass('modal_active');
		 $('body').removeClass('hidden');
	  }
	});
 });

 /* Modal 1  */

 /* Modal 1  */

$(function () {
	$('#callback-button1').click(function () {
	  $('#modal-1').addClass('modal_active');
	  $('body').addClass('hidden');
	});
  
	$('.modal__close-button').click(function () {
	  $('#modal-1').removeClass('modal_active');
	  $('body').removeClass('hidden');
	});
  
	$('#modal-1').mouseup(function (e) {
	  let modalContent = $(".modal__content");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		 $(this).removeClass('modal_active');
		 $('body').removeClass('hidden');
	  }
	});
 });

 /* Modal 1  */

  /* Modal 1  */

$(function () {
	$('#callback-button2').click(function () {
	  $('#modal-2').addClass('modal_active');
	  $('body').addClass('hidden');
	});
  
	$('.modal__close-button').click(function () {
	  $('#modal-2').removeClass('modal_active');
	  $('body').removeClass('hidden');
	});
  
	$('#modal-2').mouseup(function (e) {
	  let modalContent = $(".modal__content");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		 $(this).removeClass('modal_active');
		 $('body').removeClass('hidden');
	  }
	});
 });

 /* Modal 1  */