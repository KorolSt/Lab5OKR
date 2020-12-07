
function closeWork() {
    var e = document.getElementById("work");
    storageLog("The close button was pressed");
    storagePrint();
    pause = 1111999999999999999999999999999;
    if(e.style.display == 'block')
       e.style.display = 'none';
    else
       e.style.display = 'block';
}

function openWork() {
    var e = document.getElementById("work");
    storageLog("The open button was pressed");
    if(e.style.display != 'block')
       e.style.display = 'block';
    else
       e.style.display = 'none';
}


function getRandomInt(max) {
   return Math.floor(Math.random() * Math.floor(max));
 }


function ballSet() {
   document.getElementById("comands").innerHTML = "Let`s go!";
   storageLog("The start button was pressed");
   var mainValue = document.getElementById("start").value;

   if ((mainValue == "Start")){
      setInterval(animate, 10);
      document.getElementById("start").value = "Stop";
      var rand = getRandomInt(2);
      if(rand == 1){
         dx = 2;
      }
      else if(rand ==0){
         dx = -2;
      }
      dy = -2;
   }
   else if(mainValue == "Stop"){
      dx = 0;
      dy = 0;
      storageLog("The stop button was pressed");
      document.getElementById("start").value = "Start";
      document.getElementById("comands").innerHTML = "Stop..";
   }
   else if (mainValue == "Reload"){
      dx = 0;
      dy = 0;
      x = getRandomInt(910);
      y = canvas.height - 15;
      storageLog("The reload button was pressed");
      document.getElementById("start").value = "Start";
      document.getElementById("comands").innerHTML = "Again?"


   }
}



function ballMove(){
 
   var area = document.getElementById("ball");
   area.style.position = 'sticky';
   x = x + c;
  
   y--;
   
   if ((angle > 360)||(angle < -360)) {
            angle = 0;
        }
   ball.style.top = y + 'px';
   ball.style.left = x + 'px';
   setTimeout(ballMove, pause);
}




function storageLog(string){
   var today = new Date();
   var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
   var data = string + " at:  " + time;
   localStorage.setItem(key, data);
   key++;
}

function storagePrint(){
   var stringToPrint = "";
   for (var i = 0; i < localStorage.length; i++){
      stringToPrint += "\n " + localStorage.getItem(localStorage.key(i)) + ".";
  }
  document.getElementById("right").innerHTML = stringToPrint;

}

 
function drawBall() {
   ctx.beginPath();
   ctx.arc(x, y, ballRadius, 0, Math.PI*2);
   ctx.fillStyle = "#0095DD";
   ctx.fill();
   ctx.closePath();
}

function animate() {
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   drawBall();
   console.log(x);
   
   if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
       dx = -dx;
       
   }
   x += dx;
   y += dy;

   if(y == 4){
      storageLog("The ball flew away");
      document.getElementById("comands").innerHTML = "Byeee!";
      document.getElementById("start").value = "Reload";
      
   }

   if ((x == 908) & (y > 0)) {
      document.getElementById("comands").innerHTML = "Go left";
      storageLog("The ball touched right border");
   }
   
   if ((x == 6) & (y > 0)) {
      document.getElementById("comands").innerHTML = "Go right";
      storageLog("The ball touched left border");
   }
}

