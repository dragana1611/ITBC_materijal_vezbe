const n=360;
function ugaoTip() {
  u = document.getElementById("ugao").value;
    
    
    if (u==0) {
        
        document.getElementById("res").innerHTML = "Nulti ugao";
          }
    else if (u>0 && u<90) {
        document.getElementById("res").innerHTML = "Ostar ugao";
       
        }
    else if (u==90) {
        document.getElementById("res").innerHTML = "Prav ugao";
    }
     else if (u>90 && u<180) {
        document.getElementById("res").innerHTML = "Tup ugao";
       
        }
    else if (u==180) {
        document.getElementById("res").innerHTML = "Opruzen ugao";
    }
    else if (u>180 && u<360) {
        document.getElementById("res").innerHTML = "Nekonveksan ugao";
        
    }
    else if (u==360) {
        document.getElementById("res").innerHTML = "Pun ugao";
        
    }
    
    else
        return "Pogresan unos";
}


   
