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
