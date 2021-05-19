function uporedi()
{
        num1 = document.getElementById("prvi").value;
        num2 = document.getElementById("drugi").value;
		num3 = document.getElementById("treci").value;
        num4 = document.getElementById("cetvrti").value;
													// maximum od max1 i max2
        document.getElementById("res").innerHTML = poredi(poredi(num1,num2),poredi(num3,num4));
}													//max1 prvog i drugog   //max1 treceg i cetvrtog

function poredi(x,y) 
{ 
	if(x>y){
		
        return x;
	}else{
		
	return y;}
}
