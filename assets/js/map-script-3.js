/*==============================
	- MAP JS (ICON MARKER)
	- Template: MARRY - Responsive HTML Wedding Template
	- Author: DoubleEight
	- Version: 1.0.0
	- Website: themeforest.net/user/doubleeight/portfolio
================================= */

(function($) {

'use strict';

	// CHECK WINDOW RESIZE
	let is_windowresize = false;
	$(window).resize(function(){
		is_windowresize = true;
	});


	//INITIALIZE MAP
	function initialize() {

		// Create an array of styles
		//=======================================================================================
  		let styles = [
    		{
      			stylers: [
        			{ hue: "#f98d8a" },
        			{ saturation: -50 }
      			]
    		}
  		];

		// Create a new StyledMapType object, passing it the array of styles,
  		// as well as the name to be displayed on the map type control.
  		let styledMap = new google.maps.StyledMapType(styles,
   			{name: "Styled Map"});


		//DEFINE MAP OPTIONS
		//=======================================================================================
  		let mapOptions = {
    		zoom: 12,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
    		center: new google.maps.LatLng(41.734166, -111.827898),
			panControl: true,
  			zoomControl: true,
  			mapTypeControl: true,
  			//scaleControl: false,
  			streetViewControl: true,
  			overviewMapControl: true,
			//rotateControl:true,
			scrollwheel: false,

  		};

		//CREATE NEW MAP
		//=======================================================================================
  		let map = new google.maps.Map(document.getElementById('map-canvas-3'), mapOptions);

		//Associate the styled map with the MapTypeId and set it to display.
 		 map.mapTypes.set('map_style', styledMap);
 		 map.setMapTypeId('map_style');

		//MARKER ICON
		//=======================================================================================
		//let image = 'facebook30.svg';

		//ADD NEW MARKER
		//=======================================================================================
  		/*let marker = new google.maps.Marker({
    		position: map.getCenter(),
   		 	map: map,
    		title: 'Click to zoom',
			icon: image
  		});

		let marker1 = new google.maps.Marker({
    		position: new google.maps.LatLng(35.441938, -97.432494),
   		 	map: map,
    		title: 'Click to zoom'
  		});*/


		//ADD NEW MARKER WITH LABEL
		//=======================================================================================
		let marker1 = new MarkerWithLabel({
       		position: new google.maps.LatLng(41.734166, -111.827898),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map,
         	labelContent: '<div id="wedding-marker" class="main-icon-wrapper"><div class="big-circle scale-animation"></div><div class="main-icon-text">Wedding</br>Location</div></div>',
       		labelAnchor: new google.maps.Point(88, 88),
       		labelClass: "labels" // the CSS class for the label
     	});

		let marker2 = new MarkerWithLabel({
       		position: new google.maps.LatLng(41.745322, -111.803206),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map,
         	labelContent: '<div id="aggieicecream-marker" class="de-icon circle medium-size" style="background-color:#fc9e9e;"><i class="icon-ice-cream"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});

		let marker3 = new MarkerWithLabel({
       		position: new google.maps.LatLng(41.751243, -111.860484),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map,
         	labelContent: '<div id="gossners-marker" class="de-icon circle medium-size" style="background-color:#e9c24c;"><i class="icon-cheese"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});

		let marker4 = new MarkerWithLabel({
       		position: new google.maps.LatLng(41.947493, -111.830388),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map,
         	labelContent: '<div id="caspers-marker" class="de-icon circle medium-size" style="background-color:#bfd730;"><i class="icon-ice-cream"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});

		let marker5 = new MarkerWithLabel({
       		position: new google.maps.LatLng(41.786978, -111.839669),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map,
         	labelContent: '<div id="lazy-one-marker" class="de-icon circle medium-size" style="background-color:#8fcbda;"><i class="icon-pajamas"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});

		let marker6 = new MarkerWithLabel({
       		position: new google.maps.LatLng(41.784173, -111.835237),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map,
         	labelContent: '<div id="sockoutlet-marker" class="de-icon circle medium-size" style="background-color:#797ee6;"><i class="icon-socks"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});
		let marker7 = new MarkerWithLabel({
       		position: new google.maps.LatLng(41.719128, -111.846464),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map,
         	labelContent: '<div id="zootah-marker" class="de-icon circle medium-size" style="background-color:#797ee6;"><i class="icon-zoo"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});

		let marker8 = new MarkerWithLabel({
       		position: new google.maps.LatLng(41.939958, -111.815007),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map,
         	labelContent: '<div id="pepperidgefarm-marker" class="de-icon circle medium-size" style="background-color:#797ee6;"><i class="icon-cracker"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});
		let marker9 = new MarkerWithLabel({
       		position: new google.maps.LatLng(41.719610, -111.834964),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map,
         	labelContent: '<div id="firehouse-marker" class="de-icon circle medium-size" style="background-color:#797ee6;"><i class="icon-pizza"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});
		let marker10 = new MarkerWithLabel({
       		position: new google.maps.LatLng(41.754842, -111.834712),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map,
         	labelContent: '<div id="charlies-marker" class="de-icon circle medium-size" style="background-color:#797ee6;"><i class="icon-ice-cream"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});
		let marker11 = new MarkerWithLabel({
       		position: new google.maps.LatLng(41.733159, -111.851228),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map,
         	labelContent: '<div id="cafesabor-marker" class="de-icon circle medium-size" style="background-color:#797ee6;"><i class="icon-burrito"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});
		let marker12 = new MarkerWithLabel({
       		position: new google.maps.LatLng(42.034973, -111.778633),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map,
         	labelContent: '<div id="ritewoodeggs-marker" class="de-icon circle medium-size" style="background-color:#797ee6;"><i class="icon-eggs-icon"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});
		let marker13 = new MarkerWithLabel({
       		position: new google.maps.LatLng(41.741657, -111.791957),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map,
         	labelContent: '<div id="firstdam-marker" class="de-icon circle medium-size" style="background-color:#797ee6;"><i class="icon-dam"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});
        let marker14 = new MarkerWithLabel({
            position: new google.maps.LatLng(41.824161, -111.831820),
            draggable: false,
            raiseOnDrag: false,
            icon: ' ',
            map: map,
            labelContent: '<div id="firehouse-smithfield-marker" class="de-icon circle medium-size" style="background-color:#797ee6;"><i class="icon-pizza"></i></div>',
            labelAnchor: new google.maps.Point(27, 27),
            labelClass: "labels" // the CSS class for the label
        });





		//INFO WINDOWS 1
		//=======================================================================================
		let contentString1 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>Wedding</h6>'+
			'<div class="info-window-desc">We will be getting married in the Logan Temple on May 12, 2017 at 3:00 PM. Please arrive an half hour early for the ceremony.</div>'+
			'<div class="info-window-link"></div>'+
      	'</div>';

		let marker1_infowindow = new google.maps.InfoWindow({
      		content: contentString1,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0,-10)
  		});

		//OPEN INFO WINDOWS ON LOAD
  		marker1_infowindow.open(map,marker1);

		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker1, 'click', function() {
			marker1_infowindow.open(map,marker1);
  		});


		//INFO WINDOWS 2
		//=======================================================================================
		let contentString2 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>Aggie Ice Cream</h6>'+
			'<div class="info-window-desc">Enjoy some Aggie Ice Cream at their creamery. Show some USU pride by ordering some Aggie Blue Mint. While there, take a peek at the campus, where All studies Family Finance.</div>'+
			'<div class="info-window-link"><a href="http://aggieicecream.usu.edu/" class="grey-link with-underline">Click Here</a></div>'+
      	'</div>';

		let marker2_infowindow = new google.maps.InfoWindow({
      		content: contentString2,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0,-10)
  		});

		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker2, 'click', function() {
			marker2_infowindow.open(map,marker2);
  		});


		//INFO WINDOWS 3
		//=======================================================================================
		let contentString3 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>Gossners Cheese</h6>'+
			'<div class="info-window-desc">Cache Valley’s famous cheese factory is one of our favorites.  Smoked Cheese Curd and root-beer milk is a must buy whenever we stop. Their shelf-stable milk is good for food-storage.</div>'+
			'<div class="info-window-link"><a href="http://www.gossner.com/" class="grey-link with-underline">Click Here</a></div>'+
      	'</div>';

		let marker3_infowindow = new google.maps.InfoWindow({
      		content: contentString3,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0,-10)
  		});

		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker3, 'click', function() {
			marker3_infowindow.open(map,marker3);
  		});


		//INFO WINDOWS 4
		//=======================================================================================
		let contentString4 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>Caspers Ice Cream</h6>'+
			'<div class="info-window-desc">Want to drink a liquid brick? Perhaps buy a case of Fat-Boys (Ice Cream Sandwiches)? If so, this is the place for you. Don’t forget to grab something for us while you’re there.</div>'+
			'<div class="info-window-link"><a href="http://caspersicecream.com/" class="grey-link with-underline">Click Here</a></div>'+
      	'</div>';

		let marker4_infowindow = new google.maps.InfoWindow({
      		content: contentString4,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0,-10)
  		});

		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker4, 'click', function() {
			marker4_infowindow.open(map,marker4);
  		});

		//ON INFO WINDOW CLOSE CLICK EVENTS
		//=======================================================================================
		google.maps.event.addListener(marker4_infowindow, 'closeclick', function() {
			window.setTimeout(function() {
      			map.panTo(marker4.getPosition());
    		}, 500);
  		});


		//INFO WINDOWS 5
		//=======================================================================================
		let contentString5 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>Lazy One Outfitters</h6>'+
			'<div class="info-window-desc">Lazy One is a Punny PJ shop founded by Alli’s neighbor and is sold all over the US. Stop by the outlet store to buy new family PJ’s.</div>'+
			'<div class="info-window-link"><a href="http://www.lazyone.com/" class="grey-link with-underline">Click Here</a></div>'+
      	'</div>';

		let marker5_infowindow = new google.maps.InfoWindow({
      		content: contentString5,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0,-10)
  		});

		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker5, 'click', function() {
			marker5_infowindow.open(map,marker5);
  		});

		//ON INFO WINDOW CLOSE CLICK EVENTS
		//=======================================================================================
		google.maps.event.addListener(marker5_infowindow, 'closeclick', function() {
			window.setTimeout(function() {
      			map.panTo(marker5.getPosition());
    		}, 500);
  		});


		//INFO WINDOWS 6
		//=======================================================================================
		let contentString6 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>Sock Outlet</h6>'+
			'<div class="info-window-desc">Looking for socks? Look no further than the sock outlet- which has every type and style of socks your heart can desire. </div>'+
			'<div class="info-window-link"><a href="http://www.allaboutsocks.com/" class="grey-link with-underline">Click Here</a></div>'+
      	'</div>';

		let marker6_infowindow = new google.maps.InfoWindow({
      		content: contentString6,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0,-10)
  		});

		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker6, 'click', function() {
			marker6_infowindow.open(map,marker6);
  		});

    //INFO WINDOWS 7
    //=======================================================================================
    let contentString7 = ''+
      '<div class="info-window-wrapper">'+
      '<h6>Zootah at Willow Park</h6>'+
      '<div class="info-window-desc">Logan’s Humble Zoo is fun for kids and adults. Spot the Turtles, feed the fish and deer, see and hear the free roaming peacocks, or have a picnic in the grass area.</div>'+
      '<div class="info-window-link"><a href="https://www.facebook.com/WillowParkZoo/" class="grey-link with-underline">Click Here</a></div>'+
      '</div>';

    let marker7_infowindow = new google.maps.InfoWindow({
      content: contentString7,
      maxWidth: 200,
      pixelOffset: new google.maps.Size(0,-10)
    });

    //ON MARKER CLICK EVENTS
    google.maps.event.addListener(marker7, 'click', function() {
      marker7_infowindow.open(map,marker7);
    });
    //INFO WINDOWS 8
    //=======================================================================================
    let contentString8 = ''+
      '<div class="info-window-wrapper">'+
      '<h6>Pepperidge Farms</h6>'+
      '<div class="info-window-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada aliquam nunc.</div>'+
      '<div class="info-window-link"><a href="#" class="grey-link with-underline">Click Here</a></div>'+
      '</div>';

    let marker8_infowindow = new google.maps.InfoWindow({
      content: contentString8,
      maxWidth: 200,
      pixelOffset: new google.maps.Size(0,-10)
    });

    //ON MARKER CLICK EVENTS
    google.maps.event.addListener(marker8, 'click', function() {
      marker8_infowindow.open(map,marker8);
    });
    //INFO WINDOWS 9
    //=======================================================================================
    let contentString9 = ''+
      '<div class="info-window-wrapper">'+
      '<h6>Firehouse Pizzeria Logan and Smithfield</h6>'+
      '<div class="info-window-desc">Our favorite pizza place in Logan! If you go, make sure you try their focaccia bread with one of their many dipping sauces.</div>'+
      '<div class="info-window-link"><a href="http://www.firehousepizzeria.com/home.aspx" class="grey-link with-underline">Click Here</a></div>'+
      '</div>';

    let marker9_infowindow = new google.maps.InfoWindow({
      content: contentString9,
      maxWidth: 200,
      pixelOffset: new google.maps.Size(0,-10)
    });

    //ON MARKER CLICK EVENTS
    google.maps.event.addListener(marker9, 'click', function() {
      marker9_infowindow.open(map,marker9);
    });
    //INFO WINDOWS 10
    //=======================================================================================
    let contentString10 = ''+
      '<div class="info-window-wrapper">'+
      '<h6>Charlies Ice Cream</h6>'+
      '<div class="info-window-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada aliquam nunc.</div>'+
      '<div class="info-window-link"><a href="#" class="grey-link with-underline">Click Here</a></div>'+
      '</div>';

    let marker10_infowindow = new google.maps.InfoWindow({
      content: contentString10,
      maxWidth: 200,
      pixelOffset: new google.maps.Size(0,-10)
    });

    //ON MARKER CLICK EVENTS
    google.maps.event.addListener(marker10, 'click', function() {
      marker10_infowindow.open(map,marker10);
    });
    //INFO WINDOWS 11
    //=======================================================================================
    let contentString11 = ''+
      '<div class="info-window-wrapper">'+
      '<h6>Cafe Sabor</h6>'+
      '<div class="info-window-desc">Our Favorite Mexican restaurant, located in an old train stop platform. Their Fajitas, Burritos, and Fried Ice Cream are our favorites! </div>'+
      '<div class="info-window-link"><a href="#" class="grey-link with-underline">Click Here</a></div>'+
      '</div>';

    let marker11_infowindow = new google.maps.InfoWindow({
      content: contentString11,
      maxWidth: 200,
      pixelOffset: new google.maps.Size(0,-10)
    });

    //ON MARKER CLICK EVENTS
    google.maps.event.addListener(marker11, 'click', function() {
      marker11_infowindow.open(map,marker11);
    });
    //INFO WINDOWS 12
    //=======================================================================================
    let contentString12 = ''+
      '<div class="info-window-wrapper">'+
      '<h6>Ritewood Eggs (Napoleon Dynamite)</h6>'+
      '<div class="info-window-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada aliquam nunc.</div>'+
      '<div class="info-window-link"><a href="#" class="grey-link with-underline">Click Here</a></div>'+
      '</div>';

    let marker12_infowindow = new google.maps.InfoWindow({
      content: contentString12,
      maxWidth: 200,
      pixelOffset: new google.maps.Size(0,-10)
    });

    //ON MARKER CLICK EVENTS
    google.maps.event.addListener(marker12, 'click', function() {
      marker12_infowindow.open(map,marker12);
    });
    //INFO WINDOWS 13
    //=======================================================================================
    let contentString13 = ''+
      '<div class="info-window-wrapper">'+
      '<h6>First Dam</h6>'+
      '<div class="info-window-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada aliquam nunc.</div>'+
      '<div class="info-window-link"><a href="#" class="grey-link with-underline">Click Here</a></div>'+
      '</div>';

    let marker13_infowindow = new google.maps.InfoWindow({
      content: contentString13,
      maxWidth: 200,
      pixelOffset: new google.maps.Size(0,-10)
    });

    //ON MARKER CLICK EVENTS
    google.maps.event.addListener(marker13, 'click', function() {
      marker13_infowindow.open(map,marker13);
    });
        //INFO WINDOWS 14
        //=======================================================================================
        let contentString14 = ''+
            '<div class="info-window-wrapper">'+
            '<h6>Firehouse Pizzeria Smithfield</h6>'+
            '<div class="info-window-desc">Our favorite pizza place in Logan and Smithfield! If you go, make sure you try their focaccia bread with one of their many dipping sauces.</div>'+
            '<div class="info-window-link"><a href="http://www.firehousepizzeria.com/home.aspx" class="grey-link with-underline">Click Here</a></div>'+
            '</div>';

        let marker14_infowindow = new google.maps.InfoWindow({
            content: contentString14,
            maxWidth: 200,
            pixelOffset: new google.maps.Size(0,-10)
        });

        //ON MARKER CLICK EVENTS
        google.maps.event.addListener(marker14, 'click', function() {
            marker14_infowindow.open(map,marker14);
        });




		//ON BOUND EVENTS AND WINDOW RESIZE
		//=======================================================================================
		google.maps.event.addListener(map, 'bounds_changed', function() {
			if (is_windowresize)
			{
				//map.setCenter(marker.getPosition());
				window.setTimeout(function() {
      				map.panTo(marker1.getPosition());
    			}, 500);
			}
			is_windowresize=false;
		});
	}

	// LOAD GMAP
	google.maps.event.addDomListener(window, 'load', initialize);


})(jQuery);
