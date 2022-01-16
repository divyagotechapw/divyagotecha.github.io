// var slideIndex=1 ;
// showSlides(slideIndex);

// function pushSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n){
//   var i;
//   var slides=document.getElementsByClassName("");
//   if (n > slides.length) {slideIndex = 1;} 
//     if (n < 1) {slideIndex = slides.length;}
//     for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none"; 
//   }
// slides[slideIndex-1].style.display = "block";
// }
var slideIndex=0 ;
showSlides();

// function pushSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

function showSlides(){
	console.log(0);
  var i;
  var imgslides=document.getElementsByClassName("imgView");
   var namelides=document.getElementsByClassName("nameView");
    var textslides=document.getElementsByClassName("textView");
 
    console.log(textslides);
    for (i = 0; i < imgslides.length; i++) {
    imgslides[i].style.display = "none";
    namelides[i].style.display = "none";
    textslides[i].style.display = "none"; 
    namelides[i].classList.remove("fromtop");
    textslides[i].classList.remove("fromleft");
    imgslides[i].classList.remove("fade1");
  }
  slideIndex++;
   if (slideIndex > imgslides.length) {slideIndex = 1;} 
imgslides[slideIndex-1].style.display = "block";
imgslides[slideIndex-1].classList += " fade1";
namelides[slideIndex-1].style.display = "block";
namelides[slideIndex-1].classList += " fromtop";
textslides[slideIndex-1].style.display = "block";
textslides[slideIndex-1].classList += " fromleft";
setTimeout(showSlides,3000);
;}

// $('.over1').mouseenter(function(){
//   $(this).addClass('show2');
//   $(this).find('.i1').addClass('fromt');
  
// });
// $('.over1').mouseleave(function(){
//   $(this).removeClass('show2');
//   $(this).find('.i1').removeClass('fromt');
//  });
	
$(window).scroll(function()
{
var posn = $(window).scrollTop();

if($(window).innerWidth()>500)
{
	if(posn>550)
	{
		$('nav').addClass('navposn');
	}
	else
	{
		$('nav').removeClass('navposn');
	}
	
}
else
{
	if(posn>500)
	{
		$('nav').addClass('navposn');
	}
	else
	{
		$('nav').removeClass('navposn');
	}
}
});

var slideIndexx=1 ;
showSlidess(slideIndexx);
function currentSlides(n)
{
	showSlidess(slideIndexx = n);

}
function showSlidess(n){

  var i;
  var imgslidess=document.getElementsByClassName("imgview1");
  var textslidess=document.getElementsByClassName("textview1");
  var dots=document.getElementsByClassName("dot1")	;
  $('.dot1').removeClass('active1');
  console.log(dots)	;
    console.log(textslidess);
    for (i = 0; i < imgslidess.length; i++) {
    imgslidess[i].style.display = "none";
    textslidess[i].style.display = "none"; 
    textslidess[i].classList.remove("fromleft");
    imgslidess[i].classList.remove("fade1");
    
  }

   if (slideIndexx > imgslidess.length) {slideIndexx = 1;} 
	imgslidess[slideIndexx-1].style.display = "block";
	imgslidess[slideIndexx-1].classList += " fade1";
	textslidess[slideIndexx-1].style.display = "block";
	textslidess[slideIndexx-1].classList += " fromleft";
	dots[slideIndexx-1].classList+=" active1";
	// setTimeout(showSlidess,3000);
;}

