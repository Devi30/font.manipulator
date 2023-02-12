function setup(){
    video=createCapture(VIDEO)
    video.size(550,500)
    canvas=createCanvas(550,550)
    canvas.position(550,160)
    posenet=ml5.poseNet(video,modelloaded)
    posenet.on("pose",gotposes)
}
function draw(){
    background("black")
}
function modelloaded(){
    console.log("model is loaded")
}
function gotposes(results){
    if(results.length>0){
        console.log(results)
    }
}