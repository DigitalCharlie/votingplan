
function loadCalendar() {
  var calTitle = $("#inputTitle").val();
  $("#calEventTitle").text(calTitle);
  var calDesc = $("#inputDescription").val();
  $("#calEventDescription").text(calDesc);

  addtocalendar.load();
}

$(function() {
  
  $('.addtocalendar a.atcb-link').on('click', function(event) {
    console.log('clicked?');
  });

  $('.addtocalendar').off('mousedown');
  $('.addtocalendar').on('mousedown', function(event) {
    event.preventDefault();
    // event.stopImmediatePropagation();

    console.log( "CLICKING HAPPENED" );

    if($(".want-an-email").is(':checked')) {
      $('#can-form-area-dont-forget-the-midterms input[type="submit"]').trigger('click');
    } else {
      loadCalendar();
      $('.addtocalendar .atcb-link').focus();
    }
  });

  $(document).on('can_embed_submitted', function() {
    // $('#dont-forget-the-midterms').css('display','none');
    // $('#can-form-thanks').removeClass('hidden').fadeIn();
    $('form.email-reminder').hide();
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
