var x = 0;
var array = Array();

function dodajElement()
{
 array[x] = document.getElementById("text1").value;
 alert("Elemenat: " + array[x] + " dodat u niz na poziciju " + x);
 x++;
 document.getElementById("text1").value = "";
}

function prikaziNiz()
{
   var e = "<hr/>";   
    
   for (var y=0; y<array.length; y++)
   {
     e += "Element na poziciji " + y + " je " + array[y] + "<br/>";
   }
   document.getElementById("Rezultat").innerHTML = e;
}

function izbaciDuplikate(num) {
  var a,
      len=num.length,
      out=[],
      obj={};
 
  for (a=0; a<len; a++) {
    obj[num[a]]=0;
	
  }
  for (a in obj) {
    out.push(a);
	x--;
  }
  return out;
}

function izbaci()
{
	array=izbaciDuplikate(array)
}