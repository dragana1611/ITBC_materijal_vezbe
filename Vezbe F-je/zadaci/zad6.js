function prebroj()
{
	tx=document.getElementById("tx").value;
	document.getElementById("res").innerHTML =prebrojSam(tx);
}

function prebrojSam(str)
{ 

  return str.replace(/[^aeiou]/gi, "").length; 
}