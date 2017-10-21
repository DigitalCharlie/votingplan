$(function() {
  
  $('.addtocalendar').off('click');
  $('.addtocalendar').on('click', function() {
    console.log( "CLICKING HAPPENED" );
    var calTitle = $("#inputTitle").val();
    $("#calEventTitle").text(calTitle);
    var calDesc = $("#inputDescription").val();
    $("#calEventDescription").text(calDesc);

    addtocalendar.load();
  });

});

$(".want-an-email").change(function() {
    if ( $(this).is(':checked') ) {
    	$("#can-form-area-dont-forget-the-midterms").css('display', 'block');
    	setTimeout(function() {
        	$("#can-form-area-dont-forget-the-midterms").css('opacity', 1);
    	}, 30);
    } else {
    	$("#can-form-area-dont-forget-the-midterms").css('display', 'none');
    	setTimeout(function() {
        	$("#can-form-area-dont-forget-the-midterms").css('opacity', 0);
        }, 30);
    }
});

function calendarClick () {

	  var showModal = function(selector) {
	    $(selector).css('display', 'block');
	    setTimeout(function() {
	      $(selector).css('opacity', 1);
	    }, 50);
	  };

	  var hideModal = function(selector) {
	    $(selector).css('display', 'none');
	    setTimeout(function() {
	      $(selector).css('opacity', 0);
	    }, 50);
	  };

	  setTimeout(function(){
	    showModal('#shareModal');
	  }, 1000);

	  $("#shareX").click(function() {
	    hideModal('#shareModal');
	  });
}

window.addEventListener('load', function () {
  var anForm = document.getElementById('new_answer');

  document.getElementById('form-email').setAttribute('required', true);
  document.getElementById('form-zip_code').setAttribute('required', true);

  anForm.removeAttribute('novalidate');
  anForm.elements.commit.classList.add('hidden');

  document.getElementById('calendar-button').addEventListener('click', function () {
    if (anForm.checkValidity()) {
      anForm.submit();
    }
  });

  (function () {
    if (window.addtocalendar && typeof window.addtocalendar.start === 'function') return;
    if (window.ifaddtocalendar === undefined) {
      window.ifaddtocalendar = 1;
      var
        d = document,
        s = d.createElement('script'),
        g = 'getElementsByTagName';

      s.type = 'text/javascript';
      s.charset = 'UTF-8';
      s.async = true;
      s.src = ('https:' === window.location.protocol ? 'https' : 'http') + '://addtocalendar.com/atc/1.5/atc.min.js';
      var h = d[g]('body')[0];
      h.appendChild(s);
    }
  }());
});


$(document).on('can_embed_submitted', function () {
  $('#dont-forget-the-midterms').css('display', 'none');
  $('#can-form-thanks').removeClass('hidden').fadeIn();
});
