function proveri()
{
	tx=document.getElementById("tx").value;
	document.getElementById("res").innerHTML =umnozi(tx,5);
}



function umnozi(s, n) 
{
  if (n < 0)
    return false;
  else
  return s.repeat(n);
}