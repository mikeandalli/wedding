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
	var is_windowresize = false;
	$(window).resize(function(){
		is_windowresize = true;
	});


	//INITIALIZE MAP
	function initialize() {

		// Create an array of styles
		//=======================================================================================
  		var styles = [
    		{
      			stylers: [
        			{ hue: "#f98d8a" },
        			{ saturation: -50 }
      			]
    		}
  		];

		// Create a new StyledMapType object, passing it the array of styles,
  		// as well as the name to be displayed on the map type control.
  		var styledMap = new google.maps.StyledMapType(styles,
   			{name: "Styled Map"});


		//DEFINE MAP OPTIONS
		//=======================================================================================
  		var mapOptions = {
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
  		var map = new google.maps.Map(document.getElementById('map-canvas-3'), mapOptions);

		//Associate the styled map with the MapTypeId and set it to display.
 		 map.mapTypes.set('map_style', styledMap);
 		 map.setMapTypeId('map_style');

		//MARKER ICON
		//=======================================================================================
		//var image = 'facebook30.svg';

		//ADD NEW MARKER
		//=======================================================================================
  		/*var marker = new google.maps.Marker({
    		position: map.getCenter(),
   		 	map: map,
    		title: 'Click to zoom',
			icon: image
  		});

		var marker1 = new google.maps.Marker({
    		position: new google.maps.LatLng(35.441938, -97.432494),
   		 	map: map,
    		title: 'Click to zoom'
  		});*/


		//ADD NEW MARKER WITH LABEL
		//=======================================================================================
		var marker1 = new MarkerWithLabel({
       		position: new google.maps.LatLng(41.734166, -111.827898),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map,
         	labelContent: '<div id="wedding-marker" class="main-icon-wrapper"><div class="big-circle scale-animation"></div><div class="main-icon-text">Wedding</br>Location</div></div>',
       		labelAnchor: new google.maps.Point(88, 88),
       		labelClass: "labels" // the CSS class for the label
     	});

		var marker2 = new MarkerWithLabel({
       		position: new google.maps.LatLng(41.745322, -111.803206),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map,
         	labelContent: '<div id="aggieicecream-marker" class="de-icon circle medium-size" style="background-color:#fc9e9e;"><i class="de-icon-gift"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});

		var marker3 = new MarkerWithLabel({
       		position: new google.maps.LatLng(41.751243, -111.860484),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map,
         	labelContent: '<div id="gossners-marker" class="de-icon circle medium-size" style="background-color:#e9c24c;"><i class="de-icon-bus"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});

		var marker4 = new MarkerWithLabel({
       		position: new google.maps.LatLng(41.947493, -111.830388),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map,
         	labelContent: '<div id="caspers-marker" class="de-icon circle medium-size" style="background-color:#bfd730;"><i class="de-icon-tree"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});

		var marker5 = new MarkerWithLabel({
       		position: new google.maps.LatLng(41.786978, -111.839669),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map,
         	labelContent: '<div id="lazy-one-marker" class="de-icon circle medium-size" style="background-color:#8fcbda;"><i class="de-icon-subway"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});

		var marker6 = new MarkerWithLabel({
       		position: new google.maps.LatLng(41.784173, -111.835237),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map,
         	labelContent: '<div id="sockoutlet-marker" class="de-icon circle medium-size" style="background-color:#797ee6;"><i class="de-icon-airport"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});
		var marker7 = new MarkerWithLabel({
       		position: new google.maps.LatLng(41.719128, -111.846464),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map,
         	labelContent: '<div id="zootah-marker" class="de-icon circle medium-size" style="background-color:#797ee6;"><i class="de-icon-airport"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});

		var marker8 = new MarkerWithLabel({
       		position: new google.maps.LatLng(41.939958, -111.815007),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map,
         	labelContent: '<div id="pepperidgefarm-marker" class="de-icon circle medium-size" style="background-color:#797ee6;"><i class="de-icon-airport"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});
		var marker9 = new MarkerWithLabel({
       		position: new google.maps.LatLng(41.719610, -111.834964),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map,
         	labelContent: '<div id="firehouse-marker" class="de-icon circle medium-size" style="background-color:#797ee6;"><i class="de-icon-airport"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});
		var marker10 = new MarkerWithLabel({
       		position: new google.maps.LatLng(41.754842, -111.834712),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map,
         	labelContent: '<div id="charlies-marker" class="de-icon circle medium-size" style="background-color:#797ee6;"><i class="de-icon-airport"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});
		var marker11 = new MarkerWithLabel({
       		position: new google.maps.LatLng(41.733159, -111.851228),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map,
         	labelContent: '<div id="cafesabor-marker" class="de-icon circle medium-size" style="background-color:#797ee6;"><i class="de-icon-airport"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});
		var marker12 = new MarkerWithLabel({
       		position: new google.maps.LatLng(42.034973, -111.778633),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map,
         	labelContent: '<div id="ritewoodeggs-marker" class="de-icon circle medium-size" style="background-color:#797ee6;"><i class="de-icon-airport"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});
		var marker13 = new MarkerWithLabel({
       		position: new google.maps.LatLng(41.741657, -111.791957),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map,
         	labelContent: '<div id="firstdam-marker" class="de-icon circle medium-size" style="background-color:#797ee6;"><i class="de-icon-airport"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});





		//INFO WINDOWS 1
		//=======================================================================================
		var contentString1 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>Wedding</h6>'+
			'<div class="info-window-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada aliquam nunc.</div>'+
			'<div class="info-window-link"><a href="#" class="grey-link with-underline">Click Here</a></div>'+
      	'</div>';

		var marker1_infowindow = new google.maps.InfoWindow({
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
		var contentString2 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>Aggie Ice Cream</h6>'+
			'<div class="info-window-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada aliquam nunc.</div>'+
			'<div class="info-window-link"><a href="#" class="grey-link with-underline">Click Here</a></div>'+
      	'</div>';

		var marker2_infowindow = new google.maps.InfoWindow({
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
		var contentString3 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>Gossners Cheese</h6>'+
			'<div class="info-window-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada aliquam nunc.</div>'+
			'<div class="info-window-link"><a href="#" class="grey-link with-underline">Click Here</a></div>'+
      	'</div>';

		var marker3_infowindow = new google.maps.InfoWindow({
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
		var contentString4 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>Caspers Ice Cream</h6>'+
			'<div class="info-window-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada aliquam nunc.</div>'+
			'<div class="info-window-link"><a href="#" class="grey-link with-underline">Click Here</a></div>'+
      	'</div>';

		var marker4_infowindow = new google.maps.InfoWindow({
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
      			map.panTo(marker1.getPosition());
    		}, 500);
  		});


		//INFO WINDOWS 5
		//=======================================================================================
		var contentString5 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>Lazy One Outfitters</h6>'+
			'<div class="info-window-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada aliquam nunc.</div>'+
			'<div class="info-window-link"><a href="#" class="grey-link with-underline">Click Here</a></div>'+
      	'</div>';

		var marker5_infowindow = new google.maps.InfoWindow({
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
      			map.panTo(marker1.getPosition());
    		}, 500);
  		});


		//INFO WINDOWS 6
		//=======================================================================================
		var contentString6 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>Sock Outlet</h6>'+
			'<div class="info-window-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada aliquam nunc.</div>'+
			'<div class="info-window-link"><a href="#" class="grey-link with-underline">Click Here</a></div>'+
      	'</div>';

		var marker6_infowindow = new google.maps.InfoWindow({
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
    var contentString7 = ''+
      '<div class="info-window-wrapper">'+
      '<h6>Zootah Willow Park</h6>'+
      '<div class="info-window-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada aliquam nunc.</div>'+
      '<div class="info-window-link"><a href="#" class="grey-link with-underline">Click Here</a></div>'+
      '</div>';

    var marker7_infowindow = new google.maps.InfoWindow({
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
    var contentString8 = ''+
      '<div class="info-window-wrapper">'+
      '<h6>Pepperidge Farms</h6>'+
      '<div class="info-window-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada aliquam nunc.</div>'+
      '<div class="info-window-link"><a href="#" class="grey-link with-underline">Click Here</a></div>'+
      '</div>';

    var marker8_infowindow = new google.maps.InfoWindow({
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
    var contentString9 = ''+
      '<div class="info-window-wrapper">'+
      '<h6>Firehouse Pizzaria Logan</h6>'+
      '<div class="info-window-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada aliquam nunc.</div>'+
      '<div class="info-window-link"><a href="#" class="grey-link with-underline">Click Here</a></div>'+
      '</div>';

    var marker9_infowindow = new google.maps.InfoWindow({
      content: contentString9,
      maxWidth: 200,
      pixelOffset: new google.maps.Size(0,-10)
    });

    //ON MARKER CLICK EVENTS
    google.maps.event.addListener(marker9, 'click', function() {
      marker6_infowindow.open(map,marker9);
    });
    //INFO WINDOWS 10
    //=======================================================================================
    var contentString10 = ''+
      '<div class="info-window-wrapper">'+
      '<h6>Charlies Ice Cream</h6>'+
      '<div class="info-window-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada aliquam nunc.</div>'+
      '<div class="info-window-link"><a href="#" class="grey-link with-underline">Click Here</a></div>'+
      '</div>';

    var marker10_infowindow = new google.maps.InfoWindow({
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
    var contentString11 = ''+
      '<div class="info-window-wrapper">'+
      '<h6>Cafe Sabor</h6>'+
      '<div class="info-window-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada aliquam nunc.</div>'+
      '<div class="info-window-link"><a href="#" class="grey-link with-underline">Click Here</a></div>'+
      '</div>';

    var marker11_infowindow = new google.maps.InfoWindow({
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
    var contentString12 = ''+
      '<div class="info-window-wrapper">'+
      '<h6>Ritewood Eggs (Napoleon Dynamite)</h6>'+
      '<div class="info-window-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada aliquam nunc.</div>'+
      '<div class="info-window-link"><a href="#" class="grey-link with-underline">Click Here</a></div>'+
      '</div>';

    var marker12_infowindow = new google.maps.InfoWindow({
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
    var contentString13 = ''+
      '<div class="info-window-wrapper">'+
      '<h6>First Dam</h6>'+
      '<div class="info-window-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada aliquam nunc.</div>'+
      '<div class="info-window-link"><a href="#" class="grey-link with-underline">Click Here</a></div>'+
      '</div>';

    var marker13_infowindow = new google.maps.InfoWindow({
      content: contentString6,
      maxWidth: 200,
      pixelOffset: new google.maps.Size(0,-10)
    });

    //ON MARKER CLICK EVENTS
    google.maps.event.addListener(marker13, 'click', function() {
      marker13_infowindow.open(map,marker13);
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
