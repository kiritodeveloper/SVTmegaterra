@extends('layouts.app')
@section('title','Dashboard')
@section('content')
<meta name="description" content="ol.interaction.UndoRedo is an interaction to handle undo on a map.">
<meta name="keywords" content="ol, openlayers, undo, interaction">

<link rel="stylesheet" href="componente/css/style.css">

<!-- jQuery -->
<script type="text/javascript" src="componente/js/jquery-1.11.0.min.js"></script>
<!-- FontAwesome -->
<link rel="stylesheet" href="componente/css/font-awesome.min.css">

<!-- Openlayers -->
<link rel="stylesheet" href="componente/css/ol.css">
<script type="text/javascript" src="componente/js/ol.js"></script>
<script src="componente/js/polyfill.min.js"></script>

<!-- ol-ext -->
<link rel="stylesheet" href="componente/css/ol-ext.css">
<script type="text/javascript" src="componente/js/ol-ext.js"></script>

<style>
  .ol-button i {
    color: inherit;
  }
  .ol-button.red button,
  .ol-button.green button,
  .ol-button.blue button {
    color: #f00;
    background-color: currentColor;
    border: 2px solid currentColor;
    width: 1em;
    height: 1em;
    border-radius: 0;
  }
  .ol-button.green button {
    color: #0f0;
  }
  .ol-button.blue button {
    color: #00f;
  }
  .ol-button.red button:hover,
  .ol-button.green button:hover,
  .ol-button.blue button:hover {
    background-color: currentColor!important;
    border-color: #000;
  }
</style>

</head>
<body>
<!-- Map div -->
<div id="map" style="width:600px; height:400px;">
</div>

<div class="options">
  <div id="info"></div>
</div>

<script type="text/javascript">
  //  Vector layer
  var vector = new ol.layer.Vector( { 
    source: new ol.source.Vector(),
    style: function (f) {
      return new ol.style.Style({
        image: new ol.style.Circle({
          radius: 5,
          stroke: new ol.style.Stroke({ width: 1.5, color: [255,128,0] }),
          fill: new ol.style.Fill({ color: [255,128,0,.3] })
        }),
        stroke: new ol.style.Stroke({ width: 2.5, color: f.get('color') || [255,128,0] }),
        fill: new ol.style.Fill({ color: (f.get('color') || [255,128,0]).concat([.3]) })
      })
    }
  })

  // The map
  var map = new ol.Map ({
      target: 'map',
      view: new ol.View ({
        zoom: 14,
        center: [270701, 6247637]
      }),
      layers: [
        new ol.layer.Tile({ source: new ol.source.OSM() }),
        vector
      ]
    });


  // Main control bar
  var mainbar = new ol.control.Bar();
  map.addControl(mainbar);

  // Editbar
  var editbar = new ol.control.EditBar ({
    source: vector.getSource(),
    interactions: { Info: false }
  });
  mainbar.addControl(editbar);

  // Add a fill interaction toset color attribute
  var fill = new ol.interaction.FillAttribute({}, { color: [255,0,0] });
  editbar.addControl(new ol.control.Toggle({
    html: '<i class="fa fa-paint-brush"></i>',
    title: 'fill color attribut',
    interaction: fill,
    bar: new ol.control.Bar({
      controls:[ 
        new ol.control.Button({
          className: 'red',
          handleClick: function(){
            fill.setAttribute('color', [255,0,0])
          }
        }),
        new ol.control.Button({
          className: 'green',
          handleClick: function(){
            fill.setAttribute('color', [0,255,0])
          }
        }),
        new ol.control.Button({
          className: 'blue',
          handleClick: function(){
            fill.setAttribute('color', [0,0,255])
          }
        })
      ]
    })
  }));

  // Undo redo interaction
  var undoInteraction = new ol.interaction.UndoRedo();
  map.addInteraction(undoInteraction);
  // Prevent selection of a deleted feature
  undoInteraction.on('undo', function(e) {
    if (e.action.type === 'addfeature') {
      editbar.getInteraction('Select').getFeatures().clear();
      editbar.getInteraction('Transform').select();
    }
  });

  // Add buttons to the bar
  var bar = new ol.control.Bar({ 
    group: true,
    controls: [
      new ol.control.Button({
        html: '<i class="fa fa-undo" ></i>',
        title: 'undo...',
        handleClick: function() {
          undoInteraction.undo();
        }
      }),
      new ol.control.Button({
        html: '<i class="fa fa-repeat" ></i>',
        title: 'redo...',
        handleClick: function() {
          undoInteraction.redo();
        }
      })
    ]
  });
  mainbar.addControl(bar);

  // Add a snap
  map.addInteraction(new ol.interaction.Snap({ 
    source: vector.getSource() 
  }));

</script>

@endsection