function showPic(whichsaber){
	var saber=whichsaber.getAttribute("href");
	var pic=document.getElementById("holder");
	pic.setAttribute("src",saber);
	var title=whichsaber.getAttribute("title");
	var nameP=document.getElementById("nameP");
	nameP.firstChild.nodeValue=title;
}
