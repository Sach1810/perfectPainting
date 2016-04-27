// ********** CLOCK **********

function startTime() {
    var today = new Date();
    var h = today.getUTCHours();
    var m = today.getUTCMinutes();
    var s = today.getUTCSeconds();
    m = checkTime(m);
    s = checkTime(s);
    $('#clock').html(h + ":" + m + ":" + s);
    
    var t = setTimeout(startTime, 500);

}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

var millisec;


function test() {
  var now = new Date(); 
  var utc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),  now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
  var nows = Date.parse(now);
  var nowz = Date.parse(utc);

  if (utc > now){
    millisec = utc - now;

  } else if (utc < now){
    millisec = now - utc;

  } else {
    millisec = utc + 0;
  }



console.log(now + millisec);
// convertMS(millisec);
};


 function convertMS(ms) {
  var d, h, m, s;
  s = Math.floor(ms / 1000);
  m = Math.floor(s / 60);
  s = s % 60;
  h = Math.floor(m / 60);
  m = m % 60;
  d = Math.floor(h / 24);
  h = h % 24;
  console.log(d +":" + h +":" + m+":"+ s );
};

startTime();


