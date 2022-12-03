

      var countDownDate = new Date("Dec 25, 2022 00:00:00").getTime();
      
      var countdownfunction = setInterval(function() {
      
        var now = new Date().getTime();
        
        var distance = countDownDate - now;
        
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById("demo").innerHTML = days + " days  ";
        document.getElementById("demi").innerHTML =  hours + " hours  ";
        document.getElementById("deml").innerHTML = minutes + " minutes  ";
        document.getElementById("demg").innerHTML = seconds + " seconds";
        document.getElementById("demb").innerHTML = days + " days  " + hours + " hours  " + minutes + " minutes  " + seconds + " seconds";
        
        if (distance < 0) {
          clearInterval(countdownfunction);
          document.getElementById("demo").innerHTML ="Happy Christmas!";

          clearInterval(countdownfunction);
          document.getElementById("demi").innerHTML ="Happy Christmas!";

          clearInterval(countdownfunction);
          document.getElementById("deml").innerHTML ="Happy Christmas!";

          clearInterval(countdownfunction);
          document.getElementById("demg").innerHTML ="Happy Christmas!";

          clearInterval(countdownfunction);
          document.getElementById("demb").innerHTML ="Happy Christmas!";
        }
      }, 1000);
      
      function play() {
        var audio = document.getElementById("audio");
        audio.play();
      }