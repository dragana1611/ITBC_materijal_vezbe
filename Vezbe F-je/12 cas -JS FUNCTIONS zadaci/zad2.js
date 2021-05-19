function ugaoTip() {
	u=document.getElementById("ugao").value;
  if(u < 90) {
    document.getElementById("res").innerHTML = "ostri";
  }else
  if(u == 90) {
    document.getElementById("res").innerHTML = "pravi";
  }else
  if(u < 180) {
    document.getElementById("res").innerHTML = "tupi";
  }else
  return "ispruzeni";
}