function zameni()
{
	tx=document.getElementById("tx").value;
	
	document.getElementById("res").innerHTML =proveri(tx);
}

function proveri(str) {
  var x = 0;
  var y = 0;
  console.log(str)
  for (var i = 0; i < str.length; i++) {
    if (/[A-Z]/.test(str[i])) {
      x++;
    } else {y++;}
  }
  console.log("broj velikih slova:",x);
  console.log("broj malih slova:",y)
  if (y > x) {
	  console.log("menjamo Velika u mala");
	  return str.toLowerCase();
	  }
  console.log("menjamo mala u Velika");  
  return str.toUpperCase();
}
