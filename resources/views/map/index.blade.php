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
<style type="text/css">
    <style>
    .ol-zoom {
      left: auto;
      right: .5em;
    }
    .ol-scroll-top,
    .ol-scroll-next {
      height: 2.5em;
      text-align: center;
      cursor: pointer;
    }
    .ol-scroll-top {
      padding-top: 1.3em;
    }

    #story {
      /*
      height: 400px;
      */
    }
    #story img {
      display: block;
      margin: auto;
      max-width: 100%;
    }
    #story .chapter {
      opacity: .4;
      transition: .3s;
      background-color: transparent;
      padding: .5em;
    }
    #story .chapter.select {
      opacity: 1;
      background-color: rgba(255,255,255,.8);
    }
    .options a {
      cursor: pointer;
    }
  </style>

</style>

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

<div class="info">
    <p>
      The <i>ol/control/Storymap</i> is a control with scroll-driven navigation to create narrative maps.
    </p>
    <ul>
      <li>
        You can specify the story content using the <i>html</i> options as a string or a DOM Element.
      </li>
      <li>
        You can also specify a <i>target</i> to use as story content
      </li>
      <li>
        Use an element with a <i>chapter</i> class and a <i>name</i> to specify a new chapter in the story. 
      </li>
      <li>
        The <i>setChapter()</i> method lets you move to a chapter given its name.
      </li>
      <li>
        Listen to the <i>scrollto</i> event to get the current chapter.
      </li>
      <li>
        Use an element with a <i>ol-scroll-next</i> class in your story to scroll to the next chapter on click.
      </li>
      <li>
        Use an element with a <i>ol-scroll-top</i> class in your story to scroll to the top of the story.
      </li>
    </ul>
    <p>
      <a href="map.control.storymap.2.html">See example with a story outside the map.</a>
    </p>
  </div>

  <!-- Map div -->
  <div id="map" style="width:600px; height:400px;"></div>
  
  <div class="options">
    Set chapters:
    <ol>
      <li>
        <a onclick="story.setChapter('Paris')">Paris</a>
      </li>
      <li>
        <a onclick="story.setChapter('London')">London</a>
      </li>
      <li>
        <a onclick="story.setChapter('Berlin')">Berlin</a>
      </li>
    </ol>
  </div>

  <div id="story">
    <div class="chapter" name="start">
      <h2>Capitals</h2>
      <p>
        A story map with Openlayers.
        <br/>
        <span style="font-size: .8em;">
          text & images &copy; Wikipedia
        </span>
      </p>
      <div class="ol-scroll-next">Start</div>
    </div>
    <div class="chapter" name="Paris">

      <h2>Paris</h2>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Seine_and_Eiffel_Tower_from_Tour_Saint_Jacques_2013-08.JPG/275px-Seine_and_Eiffel_Tower_from_Tour_Saint_Jacques_2013-08.JPG">
      <p>
        Paris is the capital and most populous city of France, with an area of 105 square kilometres (41 square miles) and a population of 2,206,488. Since the 17th century, Paris has been one of Europe's major centres of finance, commerce, fashion, science, and the arts.
      </p>
    </div>
    <div class="chapter" name="London">
      <h2>London</h2>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/London_Montage_L.jpg/275px-London_Montage_L.jpg">
      <p>
        London is the capital and largest city of both the United Kingdom and England. Standing on the River Thames in southeastern England, 50 miles (80 km) upstream from its estuary with the North Sea, London has been a major settlement for two millennia. Londinium was founded by the Romans. The City of London, London's ancient core − an area of just 1.12 square miles (2.9 km2) and colloquially known as the Square Mile − retains its medieval boundaries.
      </p>
    </div>
    <div class="chapter" name="Berlin">
      <h2>Berlin</h2>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Berlin_Skyline_Fernsehturm_02.jpg/280px-Berlin_Skyline_Fernsehturm_02.jpg">
      <p>
        Berlin is the capital and largest city of Germany by both area and population. Its 3,711,930 (2017) inhabitants make it the second most populous city proper of the European Union after London. The city is one of Germany's 16 federal states. It is surrounded by the state of Brandenburg and forms the center of the Berlin/Brandenburg Metropolitan Region, which is, with 6,004,857 (2015) inhabitants and area of 30,370 square km, Germany's third-largest metropolitan region after the Rhine-Ruhr and Rhine-Main regions.
      </p>
      <div class="ol-scroll-top">Top</div>
    </div>
  </div>
  <script type="text/javascript">

  // Two base layers
  var stamen = new ol.layer.Tile({
    title: "Watercolor",
    baseLayer: true,
    source: new ol.source.Stamen({
      layer: 'watercolor'
    })
  });


  // The map
  var map = new ol.Map ({
    target: 'map',
    view: new ol.View ({
      zoom: 6,
      center: [173664, 6166327]
    }),
    layers: [stamen]
  });

  // Add placemark
  var placemark = new ol.Overlay.Placemark();
  map.addOverlay (placemark);

  // The storymap
  var story = new ol.control.Storymap({
    html: document.getElementById('story')
    //target: document.getElementById('story')
  });

  var positions = {
    start: { xy: [173664, 6166327], z: 6 },
    Paris: { xy: ol.proj.fromLonLat([2.351828, 48.856578]), z: 9 },
    London: { xy: ol.proj.fromLonLat([-0.1275,51.507222]), z: 8 },
    Berlin: { xy: ol.proj.fromLonLat([13.383333,52.516667]), z: 7 },
  }
  // ly to the chapter on the map
  story.on('scrollto', function(e){
    $('#story .chapter').removeClass('select');
    $(e.element).addClass('select');
    map.getView().cancelAnimations();
    if (e.name==='start') {
      placemark.hide();
      map.getView().animate ({
        center: positions[e.name].xy,
        zoom: positions[e.name].z
      })
    } else {
      placemark.show(positions[e.name].xy);
      // Fly to destination
      var duration = 2000;
      map.getView().animate ({
        center: positions[e.name].xy,
        duration: duration
      });
      map.getView().animate ({
        zoom: Math.min(map.getView().getZoom(), positions[e.name].z)-1,
        duration: duration/2
      },{
        zoom: positions[e.name].z,
        duration: duration/2
      });
    }
  });
  map.addControl (story);

  </script>
  
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