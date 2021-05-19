function zarotiraj()
{
        s = document.getElementById("tx").value;
        
        document.getElementById("res").innerHTML = obrni(s);
}



function obrni(str) 
  {
  if (str.length <= 1)
  {
    return str;
  }
  str2 = str.substring(1, str.length - 1);
  return (str.charAt(str.length - 1)) + str2 + str.charAt(0);
}