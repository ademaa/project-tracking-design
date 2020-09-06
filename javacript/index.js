
function myFunction(x) {
  if (x.matches) { // If media query matches
    $("img").attr("alt","hamburger").removeClass("burger");
    $("ul.top").addClass("burger");
    $("hr").addClass("burger");
    $("#part1").insertAfter($("#part2"));
  }else{
    $("#menuburger").addClass("burger");
    $("ul").removeClass("burger");
    $(".li-hr").removeClass("burger");
   $("#part2").insertAfter($("#part1"));
  }
}
var x = window.matchMedia("(max-width: 995px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction)

$("#menuburger").on("click",function(){
  $(this).fadeOut(300);
  $(".white-list").fadeIn(400);
  $("ul.burger-list").fadeIn(500);
});

$(".close").on("click",function(){
  $(this).fadeIn(300);
  $(".white-list").fadeOut(400);
  $("ul.burger-list").fadeOut(400);
  $("#menuburger").fadeIn(600);
});
