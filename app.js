
var score=0;

function start(){
     document.getElementById("intro").style.display = "none";
     document.getElementById("q1").style.display = "inline-block";
 }
 function q1(){
    document.getElementById("q1").style.display = "none";
    var right_answer_1 = document.getElementById("q1-1");
    if(right_answer_1.checked == true){
       document.getElementById("q1").style.backgroundColor = "#29ff3b";
      score++;
   }
   else{
      document.getElementById("q1").style.backgroundColor = "#ff2b3d";
   }
    document.getElementById("q2").style.display = "inline-block";
 }

 function q2(){
    document.getElementById("q2").style.display = "none";
    var right_answer_2 = document.getElementById("q2-4");
    if(right_answer_2.checked == true){
      document.getElementById("q2").style.backgroundColor = "#29ff3b";
      score++;
   }
   else{
      document.getElementById("q2").style.backgroundColor = "#ff2b3d";
   }
    document.getElementById("q3").style.display = "inline-block";
 }

 function q3(){
    document.getElementById("q3").style.display = "none";
    var right_answer_3 = document.getElementById("q3-1");
    if(right_answer_3.checked == true){
      document.getElementById("q3").style.backgroundColor = "#29ff3b";
      score++;
   }
   else{
      document.getElementById("q3").style.backgroundColor = "#ff2b3d";
   }
    document.getElementById("q4").style.display = "inline-block";
 }


 function q4(){
    document.getElementById("q4").style.display = "none";
    var right_answer_4 = document.getElementById("q4-3");
    if(right_answer_4.checked == true){
      document.getElementById("q4").style.backgroundColor = "#29ff3b";
      score++;
   }
   else{
      document.getElementById("q4").style.backgroundColor = "#ff2b3d";
   }
    document.getElementById("q5").style.display = "inline-block";
 }


 function q5(){
    document.getElementById("q5").style.display = "none";
    var right_answer_5 = document.getElementById("q5-3");
    if(right_answer_5.checked == true){
      document.getElementById("q5").style.backgroundColor = "#29ff3b";
      score++;
   }
   else{
      document.getElementById("q5").style.backgroundColor = "#ff2b3d";
   }
    document.getElementById("q6").style.display = "inline-block";
 }


 function q6(){
    document.getElementById("q6").style.display = "none";
    var right_answer_6 = document.getElementById("q6-3");
    if(right_answer_6.checked == true){
      document.getElementById("q6").style.backgroundColor = "#29ff3b";
      score++;
   }
   else{
      document.getElementById("q6").style.backgroundColor = "#ff2b3d";
   }
    document.getElementById("q7").style.display = "inline-block";
 }


 function q7(){
    document.getElementById("q7").style.display = "none";
    var right_answer_7 = document.getElementById("q7-2");
    if(right_answer_7.checked == true){
      document.getElementById("q7").style.backgroundColor = "#29ff3b";
      score++;
   }
   else{
      document.getElementById("q7").style.backgroundColor = "#ff2b3d";
   }
    document.getElementById("q8").style.display = "inline-block";
 }


 function q8(){
    document.getElementById("q8").style.display = "none";
    var right_answer_8 = document.getElementById("q8-4");
    if(right_answer_8.checked == true){
      document.getElementById("q8").style.backgroundColor = "#29ff3b";
      score++;
   }
   else{
      document.getElementById("q8").style.backgroundColor = "#ff2b3d";
   }
    document.getElementById("q9").style.display = "inline-block";
 }



 function q9(){
    document.getElementById("q9").style.display = "none";
    var right_answer_9 = document.getElementById("q9-2");
    if(right_answer_9.checked == true){
      document.getElementById("q9").style.backgroundColor = "#29ff3b";
      score++;
   }
   else{
      document.getElementById("q9").style.backgroundColor = "#ff2b3d";
   }
    document.getElementById("q10").style.display = "inline-block";
 }


 function q10(){
    document.getElementById("q10").style.display = "none";
    var right_answer_10 = document.getElementById("q10-4");
    if(right_answer_10.checked == true){
      document.getElementById("q10").style.backgroundColor = "#29ff3b";
      score++;
   }
   else{
      document.getElementById("q10").style.backgroundColor = "#ff2b3d";
   }
// show all questio
    document.getElementById("q1").style.display = "inline-block";
    document.getElementById("q2").style.display = "inline-block";
    document.getElementById("q3").style.display = "inline-block";
    document.getElementById("q4").style.display = "inline-block";
    document.getElementById("q5").style.display = "inline-block";
    document.getElementById("q6").style.display = "inline-block";
    document.getElementById("q7").style.display = "inline-block";
    document.getElementById("q8").style.display = "inline-block";
    document.getElementById("q9").style.display = "inline-block";
    document.getElementById("q10").style.display = "inline-block";
// hide all buttons in quiz section
    document.getElementById("bq1").style.display = "none";
    document.getElementById("bq2").style.display = "none";
    document.getElementById("bq3").style.display = "none";
    document.getElementById("bq4").style.display = "none";
    document.getElementById("bq5").style.display = "none";
    document.getElementById("bq6").style.display = "none";
    document.getElementById("bq7").style.display = "none";
    document.getElementById("bq8").style.display = "none";
    document.getElementById("bq9").style.display = "none";
    document.getElementById("bq10").style.display = "none";
   //  show result button
   document.getElementById("showresult").style.display = "inline-block";
 }

 function result(){
   document.getElementById("result").style.display = "inline-block";
   document.getElementById("q1").style.display = "none";
   document.getElementById("q2").style.display = "none";
   document.getElementById("q3").style.display = "none";
   document.getElementById("q4").style.display = "none";
   document.getElementById("q5").style.display = "none";
   document.getElementById("q6").style.display = "none";
   document.getElementById("q7").style.display = "none";
   document.getElementById("q8").style.display = "none";
   document.getElementById("q9").style.display = "none";
   document.getElementById("q10").style.display = "none"

    var txt = document.getElementById("getename").value 
    document.getElementById("nameprint").innerHTML= txt;
    document.getElementById("nameprint2").innerHTML= txt;
    document.getElementById("scoreprint").innerHTML = "YOUR SCORE IS " + " " + score
    document.getElementById("scoreprint2").innerHTML = "YOUR SCORE IS " + " " + score
    if (score >=5) {
       document.getElementById("good").style.display =  "inline-block";  
    }
    else{
      document.getElementById("bad").style.display =  "inline-block";  
    }
 }
 