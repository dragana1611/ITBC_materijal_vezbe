function rotiraj()
{
	num=document.getElementById("br").value;
	document.getElementById("res").innerHTML =rotate(num);
}

function rotate(x) 
{ 
	x=x+"";
    return x.split("").reverse().join("");     
}
