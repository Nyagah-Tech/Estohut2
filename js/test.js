var names;
function calculator(){
    names=document.forms["myform"]["tpp"].value;
    alert(names);
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  };

// $(document).ready(function(){
//     $("#helpform").submit(function(event){
//         event.preventDefault();
//        var names = $("input[class:name]").val(); 
//         alert (names);
//     });
   
// })