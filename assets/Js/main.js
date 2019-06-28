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
    $('#signInT').click(function() {
     $('.overlay').css("display", "block");
     $('.logBack').css("display", "none");
     $('.logInBack').css("display", "block");
});
   $('#consumerTrigger').click(function() {
     $('#consumerForm').css("display", "block");
     $('#vendorForm').css("display", "none");
     $('#consumerTrigger').css("background", "#F3703C");
     $('#consumerTrigger').css("color", "white");
     $('#vendorTrigger').css("background", "white");
     $('#vendorTrigger').css("color", "#F3703C");

});
    $('#vendorTrigger').click(function() {
     $('#vendorForm').css("display", "block");
     $('#consumerForm').css("display", "none");
     $('#vendorTrigger').css("background", "#F3703C");
     $('#vendorTrigger').css("color", "white");
      $('#consumerTrigger').css("background", "white");
     $('#consumerTrigger').css("color", "#F3703C");
});
    

   var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("activedropCateg");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
var searchCounter = 1

$('#search-trigger').click(function(){
  if (searchCounter) {
   $('#input-appender').html('<input id="searching-trigger" type="text" class=" simplebox orbord form-control orcol" placeholder="Search">');
   searchCounter = 0
}
else{
  $('#input-appender').html('<div class="brandLogo col-md-5 col-8"><img src="assets/images/mayaslogo.svg"></div>');
   searchCounter = 1
}
})
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
/* wait for images to load */
function add(num){
 var num1 = $('#quantityforPRo').text() ;
 num1 = parseInt(num1);
 num1 +=num;
 $('#quantityforPRo').html(num1);
}