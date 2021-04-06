noseX=0;
noseY=0;
function preload(){
clownnose=loadImage('https://i.postimg.cc/zBvCdWhD/11649-raw.png')
}
function setup(){
    canvas=createCanvas(310,310)
    canvas.center();
    video=createCapture(VIDEO);
    video.size(310,310);
    video.hide();
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotpose);
}
function modelloaded(){
    console.log("PoseNet is initialized");
}
function draw(){
    image(video,0,0,310,310);
    image(clownnose,noseX,noseY,30,30)
}
function gotpose(results){
   if(results.length>0){
       noseX=results[0].pose.nose.x-11;
    noseY=results[0].pose.nose.y-9;
       console.log(results);
       console.log("nose x= "+noseX);
       console.log("nose y = "+noseY);
   }
}
