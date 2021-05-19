function stepen()
{
	num1=document.getElementById("br1").value;
	num2=document.getElementById("br2").value;
	document.getElementById("res").innerHTML =eksponent(num1,num2);
}

var eksponent = function(a, n) 
{
   if (n == 0) 
   {
    return 1;
    }
  else 
  {
    return a * eksponent(a, n-1);
  }
};