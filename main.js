noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;

r=255;
g=0;
b=0;

function setup() {
    video=createCapture(VIDEO);
    video.size(550, 500);

    Canvas=createCanvas(550,500);
    Canvas.position(560,150)

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('Posenet is intializedd !!!');
}

function draw(){
 background('#969A97'); 
 textSize(difference);
 document.getElementById("square_side").innerHTML = "Width and Height of a Square will be= "+difference+"px";      
 r=Math.random()*255;
 g=Math.random()*255;
 b=Math.random()*255;
fill(r,g,b);
stroke(r,g,b);
console.error(r+g+b);
text('Tanish',50,400)
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x-40;
        noseY = results[0].pose.nose.y-60;
        console.log("noseX="+noseX+" noseY="+noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference =floor(leftWristX-rightWristX);
        console.log("leftWristX="+leftWristX+" rightWristX ="+rightWristX+" difference ="+difference);
    }
}