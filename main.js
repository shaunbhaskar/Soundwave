function startclassification(){
navigator.mediaDevices.getUserMedia({audio:true});
classifier = ml5.soundClassifier('https://storage.googleapis.com/tm-model/kA4F-80yW/model.json', modelReady);
}
function modelReady(){
classifier.classify(gotResults);    
}
function gotResults(error,results) {
if (error){
console.error(error);
}
else {
console.log(results);
random_number_r=Math.floor(Math.random()*255)+1;
random_number_g=Math.floor(Math.random()*255)+1;
random_number_b=Math.floor(Math.random()*255)+1;
document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %".label;

document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

img= document.getElementById('Ironman.png');
img= document.getElementById('Captain America.png');
img= document.getElementById('Hulk.png');
img= document.getElementById('Thor.png');

if (results[0].label == "Clap")
{img.src = 'Iroman(gif).gif';
img1.src = 'Captain America.png';
img2.src = 'Hulk.png';
img3.src = 'Thor.png'; }
 else if (results[0].label == "Bell")
{ img.src = 'Ironman.png';
 img1.src = 'Captain America(gif).gif';
  img2.src = 'Hulk.png';
   img3.src = 'Thor.png';
}
   else if (results[0].label == "Snap")
   { img.src = 'Ironman.png';
    img1.src = 'Captain America.png';
     img2.src = 'Hulk(gif).gif';
      img3.src = 'Thor.png';
}
      else 
      { img.src = 'Ironman.png';
       img1.src = 'Captain America.png';
        img2.src = 'Hulk.png';
         img3.src = 'Thor(gif).gif';
}}}