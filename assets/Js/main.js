function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
$(document).ready(function () {
 $('#accBtn').click(function() {
     $('.overlay').css("display", "block");
     $('.logBack').css("display", "block");
});
  $('.overlay').click(function() {
     $('.overlay').css("display", "none");
     $('.logBack').css("display", "none");
     $('.logInBack').css("display", "none");
     closeNav()

});
   $('#signIn').click(function() {
     $('.overlay').css("display", "block");
     $('.logBack').css("display", "none");
     $('.logInBack').css("display", "block");

});

});
  // Get the element with id="defaultOpen" and click on it
  // SideNav Button Initialization
  function openNav() {
 var broWidth =  $( document ).width()
 if(broWidth>700){
  document.getElementById("mySidenav").style.width = "60%";
     $('.overlay').css("display", "block");

}
else{
  document.getElementById("mySidenav").style.width = "100%";
     $('.overlay').css("display", "block");

}
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
     $('.overlay').css("display", "none");
  
}