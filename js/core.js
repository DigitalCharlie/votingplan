$(function() {
    $(".addtocalendar").click(function(){
    	console.log( "clicked!" );
        var calTitle = document.getElementById("inputTitle").value;
        document.getElementById("calEventTitle").innerHTML = calTitle;
        var calDesc = document.getElementById("inputDescription").value;
        document.getElementById("calEventDescription").innerHTML = calDesc;
    });
    
});