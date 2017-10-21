
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

function loadCalendar() {
  var calTitle = $("#inputTitle").val();
  $("#calEventTitle").text(calTitle);
  var calDesc = $("#inputDescription").val();
  $("#calEventDescription").text(calDesc);

  addtocalendar.load();
}

$(function() {
  
  $('.addtocalendar').off('click');
  $('.addtocalendar').on('click', function() {
    console.log( "CLICKING HAPPENED" );
    loadCalendar();
  });

  $(document).on('can_embed_submitted', function() {
    // $('#dont-forget-the-midterms').css('display','none');
    // $('#can-form-thanks').removeClass('hidden').fadeIn();
    loadCalendar();
    $('.addtocalendar .atcb-link').focus();
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
});
