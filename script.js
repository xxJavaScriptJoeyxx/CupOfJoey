function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn1");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  function myFun() {
   
    
    alert("Thank you for submitting your information. Click OK to continue");

}

function myCheck(){
  alert("Thank you for your order. It will be ready for pick-up shortly.")
}
 

  var i = 0;
  var txt = 'Thank you for visiting A Cup of Joey how can I help you today?';
  var speed = 50;
  
  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("joeychat").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  let count = 0;
 function addTo(){
   
   count ++;
   document.getElementById("shopping").innerHTML = count;

   

 }
 

 let count2 = 0;
 function addTo2(){
   
   count2 ++;
   document.getElementById("shopping2").innerHTML = count2;
 }
 let count3 = 0;
 function addTo3(){
   
   count3 ++;
   document.getElementById("shopping3").innerHTML = count3;
 }

 let count4 = 0;
 function addTo4(){
   
   count4 ++;
   document.getElementById("shopping4").innerHTML = count4;
 }

 