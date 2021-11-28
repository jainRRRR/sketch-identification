function setup(){
    create= createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth=window.speechSynthesis;
}

 function preload(){
     m15.imageClassifier('DoodleNet');
 }

function clearCanvas(){
    background("white");
}

function draw(){
    strokeWeight(13);
    stroke(0);
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY)
    }
  
}

function classifyCanvas(){
    classifier.classify(canvas,gotResult);
}

function gotResult(error,results){
    if(error){
        console.log(error)
    }
console.log(results);
document.getElementById('label').innerHTML='label:'+ results[0].label;
document.getElementById(confidence).innerHTML='confidence:'+Math.round(results[0].confidence*100)+'%';

utterThis=newSpeechSynthesisUtterance(results[0].label);
synth.speak(utterThis);
}