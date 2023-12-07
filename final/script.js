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

