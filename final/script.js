function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min= dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');


    if(hrs >= 12){
        session.innerHTML = 'PM';

    }else{
        session.innerHTML = 'AM';
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}

setInterval(displayTime, 10);

// code src tutorial -> https://www.youtube.com/watch?time_continue=1&v=lsoCv8Agg6E&embeds_referring_euri=https%3A%2F%2Fwww.bing.com%2F&embeds_referring_origin=https%3A%2F%2Fwww.bing.com&source_ve_path=MjM4NTE&feature=emb_title

function darkmode() {
    
    document.body.classList.toggle("dark");

}

function fall() {
    fallimage.classList.toggle('fallimage')
    fallgif.classList.toggle('fallgif')
    fallorange.classList.toggle("fallorange");
    document.body.classList.toggle("fallorange2");
    halfcircle.classList.toggle("fallhalf");
    clockborder.classList.toggle("clockborder");
    btnchange.classList.toggle("fallbtn");
    stickychange.classList.toggle("fallsticky");
    arc.classList.toggle("fallgradient");
}

function summer() {
    fallimage.classList.toggle('summerimage')
    fallgif.classList.toggle('summergif')
    fallorange.classList.toggle("summerorange");
    document.body.classList.toggle("summerorange2");
    halfcircle.classList.toggle("summerhalf");
    clockborder.classList.toggle("summerclockborder");
    btnchange.classList.toggle("summerbtn");
    stickychange.classList.toggle("summersticky");
    arc.classList.toggle("summergradient");
}

function winter() {
    fallimage.classList.toggle('winterimage')
    fallgif.classList.toggle('wintergif')
    fallorange.classList.toggle("winterorange");
    document.body.classList.toggle("winterorange2");
    halfcircle.classList.toggle("winterhalf");
    clockborder.classList.toggle("winterclockborder");
    btnchange.classList.toggle("winterbtn");
    stickychange.classList.toggle("wintersticky");
    arc.classList.toggle("wintergradient");
    moon.classList.toggle("wintermoon");
}
