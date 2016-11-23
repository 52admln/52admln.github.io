window.onload = function () {
	showDays();
	ramImg();
};


function showDays() {
	var curDate = new Date();
	var sinceDate = new Date(2013,8,28);
	var time = curDate.getTime() - sinceDate.getTime();
	var days = parseInt(time/1000/60/60/24);
	console.log("Wyj & Czy");
	console.log("We have been together for " + days + " days.");
}

function ramImg() {
	var maxNum = 3;
	var bg_img = document.querySelector("#bg-img");
	var ramNum = Math.ceil(Math.random() * maxNum);
	var img_url = "url('http://7u2lp3.com1.z0.glb.clouddn.com/img-" + ramNum + ".jpg')"; 
	bg_img.style.backgroundImage = img_url;
}