$('.hoverme').hover(function(){
	$(this).find('.foodpic1').addClass('expand');
	$(this).find('.date1').addClass('textorange');
},function (){$(this).find('.foodpic1').removeClass('expand');
$(this).find('.date1').removeClass('textorange');})

$(document).ready(function() {
	$('.gallery-list-item').click(function() {
    let value = $(this).attr('data-filter');
    if(value === 'all') {
      $('.filter').show(300);
    } else {
      $('.filter').not('.' + value).hide(300);
      $('.filter').filter('.' + value).show(300);
    }
  });
});
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

$(document).ready(function() {
	$('.gallery-list-item1').click(function() {
    let value = $(this).attr('data-filter');
    if(value === 'All') {
      $('.filter').show(300);
    } else {
      $('.filter').not('.' + value).hide(300);
      $('.filter').filter('.' + value).show(300);
    }
  });
});