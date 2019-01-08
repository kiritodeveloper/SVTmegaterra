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
<input id="inp" type='file'>
<p id="b64"></p>
<img id="img" height="150">
<script>
    function readFile() {
  
      if (this.files && this.files[0]) {
        
        var FR= new FileReader();
        
        FR.addEventListener("load", function(e) {
          document.getElementById("img").src       = e.target.result;
          document.getElementById("b64").innerHTML = e.target.result;
        }); 
        
        FR.readAsDataURL( this.files[0] );
      }
    }
    
    document.getElementById("inp").addEventListener("change", readFile);
</script>