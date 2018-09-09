var offset =90;
var time = function() {
    var now = new Date();
    var second = now.getSeconds();
    var minute = now.getMinutes();
    var hour = now.getHours();
    var secondAngle = -offset + second*6;
    var minuteAngle = -offset + minute*6;
    var hourAngle = -offset + hour*30;
    document.getElementById("second").style.transform = "rotate("+secondAngle+"deg)";
    document.getElementById("minute").style.transform = "rotate("+minuteAngle+"deg)";
    document.getElementById("hour").style.transform = "rotate("+hourAngle+"deg)";
}

setInterval(time, 1000);

/*
setInterval(function(){
    console.log(now.getSeconds() + " " + now.getMinutes());
},1000);
*/
