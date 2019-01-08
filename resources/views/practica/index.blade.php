{{--  <input type="hidden" name="avatar" id="avatar">
<input id="inputFileToLoad" type="file" onchange="encodeImageFileAsURL();" />
<div id="imgTest" style="border-radius: 0.5"></div>
<script type='text/javascript'>
  function encodeImageFileAsURL() {

    var filesSelected = document.getElementById("inputFileToLoad").files;
    if (filesSelected.length > 0) {
      var fileToLoad = filesSelected[0];
      var fileReader = new FileReader();
      fileReader.onload = function(fileLoadedEvent) {
        var srcData = fileLoadedEvent.target.result;
        var newImage = document.createElement('img');
        newImage.src = srcData;
        document.getElementById("avatar").value= newImage.outerHTML;
        document.getElementById("imgTest").innerHTML = newImage.outerHTML;
        alert(document.getElementById("imgTest").innerHTML);
        console.log("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
      }
      fileReader.readAsDataURL(fileToLoad);
    }
  }
</script>  --}}
<div class="ejemplo-linea">
  <input type="file" id="vacio" /><br />
  <button type="submit"  value="hola" onclick="leerArchivo()" > </button> 
  <textarea rows="10" style="width: 98%" class="codigo" id="contenido-archivo"></textarea>
</div>
<script>
  function leerArchivo(){
   var inpute = document.getElementById("avatar");
    if (inpute.files.length > 0){
         var archivo = inpute.files[0];
         var lector = new FileReader();
         lector.addEventListener("load",function(evento){document.getElementById("contenido-archivo").value = evento.target.result;}, false);
         lector.readAsDataURL(archivo);
      }
}
</script>