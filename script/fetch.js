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
  const img1 = document.querySelector('#img1');
  const img2 = document.querySelector('#img2');
  const img3 = document.querySelector('#img3');
  img1.setAttribute('src', `${data[0].imagem}`);
  img2.setAttribute('src', `${data[1].imagem}`);
  img3.setAttribute('src', `${data[2].imagem}`);
});