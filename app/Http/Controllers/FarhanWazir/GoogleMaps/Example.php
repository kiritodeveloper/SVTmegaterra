<?php

namespace App\Http\Controllers\FarhanWazir\GoogleMaps;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class Example extends Controller
{
   /******** Custom Map Controls ********/

   $leftTopControls = ['document.getElementById("leftTopControl")']; // values must be html or javascript element
   $this->gmap->injectControlsInLeftTop = $leftTopControls; // inject into map
   $leftCenterControls = ['document.getElementById("leftCenterControl")'];
   $this->gmap->injectControlsInLeftCenter = $leftCenterControls;
   $leftBottomControls = ['document.getElementById("leftBottomControl")'];
   $this->gmap->injectControlsInLeftBottom = $leftBottomControls;

   $bottomLeftControls = ['document.getElementById("bottomLeftControl")'];
   $this->gmap->injectControlsInBottomLeft = $bottomLeftControls;
   $bottomCenterControls = ['document.getElementById("bottomCenterControl")'];
   $this->gmap->injectControlsInBottomCenter = $bottomCenterControls;
   $bottomRightControls = ['document.getElementById("bottomRightControl")'];
   $this->gmap->injectControlsInBottomRight = $bottomRightControls;

   $rightTopControls = ['document.getElementById("rightTopControl")'];
   $this->gmap->injectControlsInRightTop = $rightTopControls;
   $rightCenterControls = ['document.getElementById("rightCenterControl")'];
   $this->gmap->injectControlsInRightCenter = $rightCenterControls;
   $rightBottomControls = ['document.getElementById("rightBottomControl")'];
   $this->gmap->injectControlsInRightBottom = $rightBottomControls;

   $topLeftControls = ['document.getElementById("topLeftControl")'];
   $this->gmap->injectControlsInTopLeft = $topLeftControls;
   $topCenterControls = ['document.getElementById("topCenterControl")'];
   $this->gmap->injectControlsInTopCenter = $topCenterControls;
   $topRightControls = ['document.getElementById("topRightControl")'];
   $this->gmap->injectControlsInTopRight = $topRightControls;

   /******** End Controls ********/

   $config = array();
   $config['map_height'] = "100%";
   $config['center'] = 'Clifton, Karachi';
   
   $this->gmap->initialize($config); // Initialize Map with custom configuration

   /*********** Marker Setup ***********/
   $marker = array();
   $marker['draggable'] = true;
   //Marker event dragend
   $marker['ondragend'] = '
   iw_'. $this->gmap->map_name .'.close();
   reverseGeocode(event.latLng, function(status, result, mark){
       if(status == 200){
           iw_'. $this->gmap->map_name .'.setContent(result);
           iw_'. $this->gmap->map_name .'.open('. $this->gmap->map_name .', mark);
       }
   }, this);
   ';
   $this->gmap->add_marker($marker);
   /*********** End Marker Setup ***********/

   $map = $this->gmap->create_map(); // This object will render javascript files and map view; you can call JS by $map['js'] and map view by $map['html']

   return view('map', ['map' => $map]);
}
