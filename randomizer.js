window.onload = chooseVid;

var myVid = new Array("vids/catbug.mp4","vids/justdoit.mp4", "vids/youcandoitkid.mp4");

function chooseVid() {
     var randomNum = Math.floor(Math.random() * myVid.length);
     document.getElementById("myVid").src = myVid[randomNum];
}