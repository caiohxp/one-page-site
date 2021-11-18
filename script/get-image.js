function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
          callback(rawFile.responseText);
      }
  }
  rawFile.send(null);
}
readTextFile("./home.json", function(text){
  var data = JSON.parse(text);
  const windowWidth = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
  const img = document.querySelectorAll('.carrossel__imagem');
  const titulo = document.querySelectorAll('.carrossel__container-text');
  for(var i = 0; i < img.length; i++){
    img[i].style.backgroundImage = `url(${data[i].imagem})`;
    titulo[i].innerHTML = `${data[i].titulo}`;
  }
});