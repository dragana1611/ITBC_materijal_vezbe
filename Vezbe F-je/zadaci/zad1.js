function proveri()
{
        s = document.getElementById("rec").value;
        
        document.getElementById("res").innerHTML = poAbecedi(s);
}


function poAbecedi(str)
{
	console.log(str.split(''));
	console.log(str.split('').sort());
	console.log(str.split('').sort().join(''));
	return str.split('').sort().join('');
}