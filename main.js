nose_x=0;
nose_y=0;

function preload(){
	mustache=loadImage("https://i.postimg.cc/MTNX7kSF/Funny-retro-hair-mustache-on-transparent-background-PNG.png");
}

function draw(){
	image(video,0,0,300,300);
	image(mustache, nose_x-10, nose_y-5, 30, 20);
}

function setup(){
	canvas=createCanvas(300,300);
	canvas.center();
	video = createCapture(VIDEO);
	video.size(300,300);
	video.hide();
	posenet=ml5.poseNet(video,modelloaded);
	posenet.on('pose',gotposes);
}

function take_snapshot(){
	save("myfilterimage.png");
}
function modelloaded(){
	console.log("posenet is initialized");
}
function gotposes(results){
	if(results.length>0){
		console.log(results);
		nose_x=results[0].pose.nose.x;
		nose_y=results[0].pose.nose.y;
		console.log("nose x="+results[0].pose.nose.x);
		console.log("nose y="+results[0].pose.nose.y);

	}
}