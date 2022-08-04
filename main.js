// var hour = document.getElementById("hh");
// var min = document.getElementById("mm");
// var sec = document.getElementById("ss");
// var day = document.getElementById("dd");
// var mon = document.getElementById("mon");
// var year = document.getElementById("yy");
// var ist = document.getElementById("i");

// var x = function () {
//     const b = new Date();
//     var c = b.getHours();
//     var d = b.getMinutes();
//     var e = b.getseconds();
//     var f = b.getday();
//     var g = b.getmonth();
//     var h = b.getFullYear();

//     var l="A.M";

//     if(c>12){
//         l="P.M";
//         c=c-12;
//     }

//     hour.innerText = c;
//     min.innerText = d;
//     sec.innerText = e;
//     day.innerText = f;
//     mon.innerText = g+1;
//     year.innerText = h;
//     ist.innerText=l;
// }
// x()
// setInterval(x,1000);
function startTime() {
    const time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let d = time.getDay();
    let mn = time.getMonth() + 1;
    let y = time.getFullYear();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    d = checkTime(d);
    mn = checkTime(mn);
    y = checkTime(y);
    var hour = document.getElementById("hh");
    hour.innerText = h + ":";
    

    var minute = document.getElementById("mm");
    minute.innerText = m + ":";
    

    var second = document.getElementById("ss");
    second.innerText = s + ":";
    

    var day = document.getElementById("dd");
    day.innerText = d + ":";
    

    var month = document.getElementById("mnth");
    month.innerText = mn + ":";
    

    var year = document.getElementById("yy");
    year.innerText = y + ":";
    

    var session = document.getElementById("sesn");
    if (h == 0) {
        session.innerText = "AM";
    }
    if (h > 12) {
        session.innerText = "PM";}
        setTimeout(startTime, 1000);
    }
    function checkTime(i) {
        if (i < 10) {
            i = "0" + i
        };
        return i;
    }
    checkTime()
    startTime()
