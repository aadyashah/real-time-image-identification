function preload(){

}

function setup(){
c=createCanvas(270,270);
c.center();
w=createCapture(VIDEO);
w.hide();
classifier=ml5.imageClassifier('MobileNet',modelLoaded);

}
function draw(){
image(w,0,0,270,270);
classifier.classify(w,gotResults);
}
function modelLoaded(){
    console.log('model is loaded');
}
previous_object="";

function gotResults(error,results){

    if(error){
        console.log(error);
    }
   if(results[0].confidence>0.5 && previous_object!=results[0].label){
    console.log(results);
    document.getElementById("result_name").innerHTML=results[0].label;
    document.getElementById("result_accuracy").innerHTML=results[0].confidence.toFixed(3);
   }
}