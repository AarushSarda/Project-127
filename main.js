song_1 = "";
song_2 = "";
function preload(){
    song_1 = loadSound("music.mp3");
    song_2 = loadSound("music2.mp3")
}
function setup() {
    canvas = createCanvas(550,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video , modelLoaded);
    posenet.on("pose" , gotPoses);
}
function draw() {
    image(video,0,0,550,400);
}