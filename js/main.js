window.onload = function () {
	showDays();
	ramImg();
};


function showDays() {
	var curDate = new Date();
	var sinceDate = new Date(2017,0,8);
	var time = curDate.getTime() - sinceDate.getTime();
	var days = parseInt(time/1000/60/60/24);
	console.log("Wyj & Cyc");
	console.log("We have been together for " + days + " days.");
}

function ramImg() {
	var maxNum = 3;
	var bg_img = document.querySelector("#bg-img");
	var ramNum = Math.ceil(Math.random() * maxNum);
	var img_url = "url('../images/img-" + ramNum + ".jpg')";
	bg_img.style.backgroundImage = img_url;
}
