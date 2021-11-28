function tellTime(){
            var date = new Date();
            var h = date.getHours(); // returns 0-23
            var m = date.getMinutes(); //returns 0-59
            var s = date.getSeconds(); //returns 0 -59
            var session = "AM";
            
            if(h == 0){
                h = 12;
            }
            if(h > 12){
                h = h - 12;
                session = "PM";
            }
            
            h = (h > 10)? "0" + h : h;
            m = (m < 10)? "0" + m : m;
            s = (s < 10)? "0" + s : s;
            var time = h + ":" + m + ":" + s + " " + session;
            document.getElementById("clockDisplayPoint").innerText = time;
            document.getElementById("clockDisplayPoint").textContent = time;
            setTimeout(tellTime, 1000);
        }
            tellTime();
        