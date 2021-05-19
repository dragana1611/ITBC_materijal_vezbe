function proveri()
{
	tx=document.getElementById("tx").value;
	br=document.getElementById("br").value;
	document.getElementById("res").innerHTML =izbaci(tx,parseInt(br));
	
}

function izbaci(str, pos) 
 {
  prvi = str.substring(0, pos);
  console.log(str[pos]);
  console.log(pos);
  console.log(prvi);
  drugi = str.substring(pos + 1, str.length);
  console.log(pos);
  console.log(drugi);
  return (prvi + drugi);
 }

