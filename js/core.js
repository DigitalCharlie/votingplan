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
