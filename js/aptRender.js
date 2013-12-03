/*
	aptRender.js
*/

//on ready function
$(function(){
	var aptTemplate = $('.apt-template');
	var container = $('.apt-container');
	var instance = aptTemplate.clone();
	var neighborhood;

	if ($('.this-neighborhood').attr('value') == 'downtown') {
		neighborhood = downtown;
	} else if ($('.this-neighborhood').attr('value') == 'lictonSprings') {
		neighborhood = lictonSprings;
	}

	instance.find('.apt-name').html(neighborhood.name);
	instance.find('.apt-addr1').html(neighborhood.address1);
	instance.find('.apt-addr2').html(neighborhood.address2);
	instance.find('.apt-units').html(neighborhood.units);
	instance.find('.apt-vacancies').html(neighborhood.vacancies);
	instance.find('.apt-bedroom').html(neighborhood.bedroom);
	instance.find('.apt-bath').html(neighborhood.bath);

	instance.removeClass('template');
	container.append(instance);
});


 