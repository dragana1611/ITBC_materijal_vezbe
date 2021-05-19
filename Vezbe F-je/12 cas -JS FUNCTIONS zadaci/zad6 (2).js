function faktorijel()
{
	num=document.getElementById("br").value;
	document.getElementById("res").innerHTML =faktor(num);
}

function faktor(x) 
{ 
  //dodati zastitu za negativne brojeve
  if (x === 0)
 {
    return 1;
 }
  return x * faktor(x-1);
         
}
