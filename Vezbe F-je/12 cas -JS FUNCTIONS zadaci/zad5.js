function proveri()
{
	num=document.getElementById("br").value;
	document.getElementById("res").innerHTML =parniRekurzija(num);
}

function parni(u) {
  
  if(u % 2==0) {
    return true;
  }
  else{
  return false;
  }
}

function parniRekurzija(u)
{
  
  if (u < 0) 
  {
    u = Math.abs(u);
  }
  if (u==0) 
  {
    return true;
  }
  if (u==1) 
  {
    return false;
  }
  else 
  {
    u = u - 2;
	console.log(u);
    return parniRekurzija(u);
  }
}

