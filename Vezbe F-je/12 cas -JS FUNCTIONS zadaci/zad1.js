function mnozi()
{
        num1 = document.getElementById("prvi").value;//preuzimamo vrednost prvog
        num2 = document.getElementById("drugi").value;
        document.getElementById("res").innerHTML = num1 * num2;
}

function deli() 
{ 
        num1 = document.getElementById("prvi").value;
        num2 = document.getElementById("drugi").value;
        document.getElementById("res").innerHTML = num1 / num2;
}
