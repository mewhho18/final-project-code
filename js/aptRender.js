/*
	aptRender.js
*/

//on ready function
$(function(){
	var aptTemplate = $('.apt-template');
	var picTemplate = $('.pic-template');
	var container = $('.apt-container');
	var picContainer = $('.pic-container');
	var instance = aptTemplate.clone();
	var imgInstance;
	var neighborhood;
	var idx;

	if ($('.this-neighborhood').attr('value') == 'downtown') {
		neighborhood = downtown;
	} else if ($('.this-neighborhood').attr('value') == 'lictonSprings') {
		neighborhood = lictonSprings;
	} else if ($('.this-neighborhood').attr('value') == 'uDistrict') {
		neighborhood = uDistrict;
	}

	instance.find('.apt-name').html(neighborhood.name);
	instance.find('.apt-addr1').html(neighborhood.address1);
	instance.find('.apt-addr2').html(neighborhood.address2);
	instance.find('.apt-units').html(neighborhood.units);
	instance.find('.apt-vacancies').html(neighborhood.vacancies);
	instance.find('.apt-bedroom').html(neighborhood.bedroom);
	instance.find('.apt-bath').html(neighborhood.bath);
	for (idx = 0; idx < neighborhood.pic.length; ++idx) {
		var image = neighborhood.pic[idx];
		imgInstance = picTemplate.clone();
		imgInstance.find('.pic').attr({
			src: image
		});
		instance.removeClass('');
		picContainer.append(imgInstance);
	}

	instance.removeClass('template');
	container.append(instance);
});


 