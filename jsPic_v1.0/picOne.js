function showPic(whichsaber){
	var saber=whichsaber.getAttribute("href");
	var pic=document.getElementById("holder");
	pic.setAttribute("src",saber);
}
