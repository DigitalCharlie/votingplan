function loadCalendar() {
  var calTitle = $("#inputTitle").val();
  $("#calEventTitle").text(calTitle);
  var calDesc = $("#inputDescription").val();
  $("#calEventDescription").text(calDesc);

  addtocalendar.load();
}

$(function() {
  
  $('.addtocalendar').off('mousedown');
  $('.addtocalendar').on('mousedown', function(event) {

    // $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    $('#an_event_description').val($('#inputDescription').val());
    $('#an_event_title').val($('#inputTitle').val());

    if($(".want-an-email").is(':checked')) {

      event.preventDefault();
      $('#can-form-area-dont-forget-the-midterms input[type="submit"]').trigger('click');
    } else {
      loadCalendar();
    }
  });

  $(document).on('can_embed_submitted', function() {
    // $('#dont-forget-the-midterms').css('display','none');
    // $('#can-form-thanks').removeClass('hidden').fadeIn();
    loadCalendar();
    $('.addtocalendar .atcb-link').focus();
  });

  $(".want-an-email").change(function() {
      if ( $(this).is(':checked') ) {
        $("#form-zip_code").attr("size", "15");
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

function calendarClick () {

    if ( $(".want-an-email").is(':checked') ) {
      $('form.email-reminder').hide();
      $(".want-an-email").prop('checked', false); 
    };

    var showModal = function(selector) {
      $(selector).css('display', 'block');
      $('.atcb-list').css('display', 'none');
      setTimeout(function() {
        $(selector).css('opacity', 1);
      }, 50);
    };

    var hideModal = function(selector) {
      $(selector).css('display', 'none');
      $('.atcb-list').css('display', 'initial');
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

//$('#inputTitle').on('keypress keyup blur', function() {
//    $('#an_event_title').val($(this).val());
//});

//$('#inputDescription').on('keypress keyup blur', function() {
//    $('#an_event_description').val($(this).val());
//});
