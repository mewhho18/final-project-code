/* 
	neighborhoods.js
*/

var downtown = {
	"name": "Royal Crest Condos",
	"units": 2,
	"vacancies": 0,
	"address1": "2100 3rd Ave",
	"address2": "Seattle, WA 98121",
	"bedroom": 2,
	"bath": 2,
	"description": "test test test",
	"pic": [{image: 'img/royal-crest/building.jpg', caption: 'Exterior of Royal Crest Condos'},
			{image: 'img/royal-crest/floor.jpg', caption: 'Living Room'},
			{image: 'img/royal-crest/floor2.jpg', caption: 'Living Room'},
			{image: 'img/royal-crest/floor3.jpg', caption: 'Living Room'},
			{image: 'img/royal-crest/kitchen1.jpg', caption: 'Kitchen'},
			{image: 'img/royal-crest/kitchen2.jpg', caption: 'Kitchen'},
			{image: 'img/royal-crest/bathroom.jpg', caption: 'Bathroom'},
			{image: 'img/royal-crest/guest_bath.jpg', caption: 'Guest Bathroom'},
			{image: 'img/royal-crest/gate.jpg', caption: 'Gate'},
			{image: 'img/royal-crest/gym.jpg', caption: 'Gym'},
			{image: 'img/royal-crest/lobby.jpg', caption: 'Lobby'},
			{image: 'img/royal-crest/pool.jpg', caption: 'Pool'},
			{image: 'img/royal-crest/roof.jpg', caption: 'Roof'},
			{image: 'img/royal-crest/roof_garden.jpg', caption: 'Roof Garden'},
			{image: 'img/royal-crest/roof_garden2.jpg', caption: 'Roof Garden'}
	]
}

var lictonSprings = {
	"name": "Licton Springs Apartment Complex",
	"units": 6,
	"vacancies": "Unit 9208 Available in February, 2014",
	"address1": "9200 Densmore Ave N",
	"address2": "Seattle, WA 98103",
	"bedroom": "3 and 4",
	"bath": 2,
	"description": "test test test",
	"pic": [{image: 'img/licton-springs/facade1.jpg', caption: 'Exterior of Apartment'},
			{image: 'img/licton-springs/facade2.jpg', caption: 'Exterior of Apartment'},
			{image: 'img/licton-springs/front.jpg', caption: 'Front of Apartment'},
			{image: 'img/licton-springs/garden.jpg', caption: 'Garden'},
			{image: 'img/licton-springs/garden_entry.jpg', caption: 'Garden Entry'}
	]
}

var uDistrict = {
	"name": "University District Apartments",
	"units": 6,
	"vacancies": 0,
	"address1": "5210 11th NE",
	"address2": "Seattle, WA 98115",
	"bedroom": 3,
	"bath": 1,
	"description": "test test test",
	"pic": [{image: 'img/u-district/facade1.jpg', caption: 'Exterior'},
			{image: 'img/u-district/facade2.jpg', caption: 'Exterior'},
			{image: 'img/u-district/facade2.jpg', caption: 'Exterior Close Up'},
			{image: 'img/u-district/parking.jpg', caption: 'On-site Parking'},
			{image: 'img/u-district/dining_room.jpg', caption: 'Dining Room'},
			{image: 'img/u-district/living_room.jpg', caption: 'Living Room'},
			{image: 'img/u-district/main.jpg', caption: 'Common Area'},
			{image: 'img/u-district/kitchen.jpg', caption: 'Kitchen'},
			{image: 'img/u-district/kitchen2.jpg', caption: 'Kitchen'},
			{image: 'img/u-district/unit-a/bedroom_floor.jpg', caption: 'Unit A - Bedroom'},
			{image: 'img/u-district/unit-a/bedroom_floor2.jpg', caption: 'Unit A - Bedroom'},
			{image: 'img/u-district/unit-a/kitchen_unit_a.jpg', caption: 'Unit A - Kitchen'},
			{image: 'img/u-district/unit-a/main.jpg', caption: 'Unit A - Kitchen'},
			{image: 'img/u-district/kitchen_unit_b.jpg', caption: 'Unit B Kitchen'},
			{image: 'img/u-district/kitchen_unit_c.jpg', caption: 'Unit C Kitchen'},
			{image: 'img/u-district/unit-a/bathroom.jpg', caption: 'Unit A - Bathroom'},
			{image: 'img/u-district/unit-a/bathroom2.jpg', caption: 'Unit A - Bathroom'},
			{image: 'img/u-district/bathroom.jpg', caption: 'Bathroom'},
			{image: 'img/u-district/bedrooms.jpg', caption: 'Bedrooms'}
	]
}

var westGreenlake = {
	"name": "West Greenlake Apartment",
	"units": 4,
	"vacancies": 0,
	"address1": "7103 Linden Ave N",
	"address2": "Seattle, WA 98103",
	"bedroom": 1,
	"bath": 1,
	"description": "test test test",
	"pic": [{image: 'img/west-greenlake/facade1.jpg', caption: 'Exterior of Apartment'},
			{image: 'img/west-greenlake/facade1.jpg', caption: 'Exterior of Apartment'},
			{image: 'img/west-greenlake/bedroom.jpg', caption: 'Bedroom'},
			{image: 'img/west-greenlake/dining_room.jpg', caption: 'Dining Room'},
			{image: 'img/west-greenlake/dining_room2.jpg', caption: 'Dining Room'},
			{image: 'img/west-greenlake/living_room.jpg', caption: 'Living Room'},
			{image: 'img/west-greenlake/living_room2.jpg', caption: 'Living Room'},
			{image: 'img/west-greenlake/living_room_floor.jpg', caption: 'Living Room'}
	]
}

var eastGreenlake = {
	"name": "East Greenlake Apartments",
	"units": 4,
	"vacancies": 0,
	"address1": "7319 Woodlawn NE",
	"address2": "Seattle, WA 98115",
	"bedroom": 1,
	"bath": 1,
	"description": "test test test",
	"pic": [{image: 'img/east-greenlake/facade_both.jpg', caption: 'Exteriors of Apartments'},
			{image: 'img/east-greenlake/facade_both2.jpg', caption: 'Exteriors of Apartments'},
			{image: 'img/east-greenlake/facade_both3.jpg', caption: 'Exteriors of Apartments'},
			{image: 'img/east-greenlake/facade1.jpg', caption: 'Exteriors of Apartment 7311-17'},
			{image: 'img/east-greenlake/facade2.jpg', caption: 'Exteriors of Apartments 7319-25'},
			{image: 'img/east-greenlake/garden_entry.jpg', caption: 'Front of Apartment 7311-17'},
			{image: 'img/east-greenlake/living_room.jpg', caption: 'Living Room'},
			{image: 'img/east-greenlake/kitchen1.jpg', caption: 'Kitchen'},
			{image: 'img/east-greenlake/kitchen4.jpg', caption: 'kitchen'},
			{image: 'img/east-greenlake/doors.jpg', caption: 'Garden Entry'}
	]
}