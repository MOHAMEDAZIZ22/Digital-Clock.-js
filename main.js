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
    

    var month = document.getElementById("mon");
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
