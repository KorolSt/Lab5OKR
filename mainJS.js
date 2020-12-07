
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
  
   yc = -1;

   if(getRandomInt(2) == 1){   
      c = 1; 
   }
   else if(getRandomInt(2) == 0){
      c =  (-1);
   }

   console.log(c);

   if ((mainValue == "Start")){
      document.getElementById("start").value = "Stop";
      
      var e = document.getElementById("ball");
      if(e.style.display != 'block')
         e.style.display = 'block';

      
      ball.style.top = y +"px";
      ball.style.left =  x + "px";

      angle = getRandomInt(180);

      ballMove();
   }
   else if(mainValue == "Stop"){
      yc = 0;
      c = 0;
      setTimeout(ballMove);
      storageLog("The stop button was pressed");
      document.getElementById("start").value = "Start";
      document.getElementById("comands").innerHTML = "Stop..";
   }
   else if (mainValue == "Reload"){
      storageLog("The reload button was pressed");
      document.getElementById("start").value = "Start";
      document.getElementById("comands").innerHTML = "Again?"
      var e = document.getElementById("ball");
      if(e.style.display != 'block')
         e.style.display = 'block';

      rx = getRandomInt(h);

      x = rx;
      y = 645;
      yc = 0;
      c = 0;

      ball.style.top = y +"px";
      ball.style.left =  x + "px";
   }

}




function ballMove(){
 
   var area = document.getElementById("ball");
   area.style.position = 'sticky';


   if(y <= 150){
      area.style.position = 'absolute';
      document.getElementById("start").value = "Reload";
      document.getElementById("comands").innerHTML = "Byeee!";

      console.log(y);
   }
   
   if ((x <= 20) & (y > 180)) {
      c = 1;
      document.getElementById("comands").innerHTML = "Go right";
      storageLog("The ball touched left border");
   }
   else if((x >=(447)) & (y > 180) ){
      c = -1;
      document.getElementById("comands").innerHTML = "Go left";
      storageLog("The ball touched right border");
   }

   
  
   x += + c;
   console.log(x);
   y += yc;
   
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