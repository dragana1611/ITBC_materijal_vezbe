// nazeve svih funkcija i opsti oblik parametara


function uporedi()
{
        num1 = document.getElementById("prvi").value;
        num2 = document.getElementById("drugi").value;
		
        document.getElementById("res").innerHTML = poredi(num1,num2);
}

function poredi(x,y) 
{ 
	if(x>y){
		console.log(x);
        return x;
	}else{
		console.log(y);
	return y;}
}
