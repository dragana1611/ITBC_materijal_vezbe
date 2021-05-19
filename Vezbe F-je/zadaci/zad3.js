function uvecaj()
{
        tx = document.getElementById("tx").value;
        
		document.getElementById("tx").value = pocetakIKraj(tx);
        document.getElementById("res").innerHTML = pocetakIKraj(tx);
}


function pocetakIKraj(str)
{
  prvi = str.substring(0,1);
  return prvi + str + prvi;
}