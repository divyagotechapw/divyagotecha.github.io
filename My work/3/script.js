$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
  $('.third-button').on('click', function () {

    $('.animated-icon3').toggleClass('open');
  });
});

var acc = document.querySelectorAll(".accordion");
var pan=document.querySelectorAll(".panel");

console.log(acc);
console.log(pan);
var i;

function shutDown(){
for(i=0;i<acc.length;i++){
	console.log(acc[i]);
	console.log(pan[i]);
	if(acc[i].classList.contains("active")){
		this.classList.remove("active");
		this.nextElementSibling.classList.remove("show");
	}
}
}

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
  }
}


	$('.gallery-list-item1').click(function() {
    let value = $(this).attr('data-filter');
    if(value === 'all') {
      $('.filter').show(300);
    } else {
      $('.filter').not('.' + value).hide(300);
      $('.filter').filter('.' + value).show(300);
    }
  });

  var slideIndex=1 ;
  showSlides(slideIndex);

  function pushSlides(n) {
  showSlides(slideIndex += n);
}

  function currentSlide(n) {
  showSlides(slideIndex = n);
}

  function showSlides(n){
  var i;
  var slides=document.getElementsByClassName("person1");
  if (n > slides.length) {slideIndex = 1;} 
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none"; 
  }
slides[slideIndex-1].style.display = "block";
}

$(window).scroll(function()
{
var posn = $(window).scrollTop();

if($(window).innerWidth()>500)
{
	if(posn>700)
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
