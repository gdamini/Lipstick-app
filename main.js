lipsX=0;
lipsY=0;

function preload(){
lips=loadImage('https://i.postimg.cc/B6tYW7DY/Lips.jpg');
}

function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function gotPoses(results){
if(results.length > 0){
    console.log(results);
    noseX=results[0].pose.lips.x - 15;
    noseY=results[0].pose.lips.y - 15;
    console.log("lips x=" + results[0].pose.lips.x);
    console.log("lips y=" + results[0].pose.lips.y);
}
}



function draw(){
image(video, 0, 0, 300, 300);
circle(255, 0, 0, 0)
image(lips, lipsX, lipsY, 30, 30);
}

function take_snapshot(){
    save('my filter image.png');
}