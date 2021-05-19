function NZD()
{
	num1=document.getElementById("br1").value;
	num2=document.getElementById("br2").value;
	document.getElementById("res").innerHTML =najveci(num1,num2);
}

function najveci(a, b) {
    if ( ! b) {
        return a;
    }

    return najveci(b, a % b);
};


