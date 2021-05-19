var brel = 0;
var ime = Array();
var zad1 = Array();
var zad2 = Array();
var zad3 = Array();
var sum = Array();
var id = null;

function Ime()
{
	let ime="";
	brojSlova=Math.floor(Math.random()*5)+3
	random=Math.floor(Math.random()*25)
	ime+=String.fromCharCode(65+random)
	for(let i=1;i<brojSlova;i++)
	{
		random=Math.floor(Math.random()*25)
		ime+=String.fromCharCode(97+random)		
	}
	return ime;
}

function gen()
{
	brel=Math.floor(Math.random()*10)
	for(let i=0;i<brel;i++)
	{
		ime[i]=Ime();
		zad1[i]=Math.floor(Math.random()*20);
		zad2[i]=Math.floor(Math.random()*20);
		zad3[i]=Math.floor(Math.random()*20);
		sum[i]=zad1[i]+zad2[i]+zad3[i];
	}	
 
}
function prikazi()
{
	prikaziNiz("ime",ime,brel)	
	prikaziNiz("bodovi1",zad1,brel)
	prikaziNiz("bodovi2",zad2,brel)
	prikaziNiz("bodovi3",zad3,brel)
	prikaziNiz("sum",sum,brel)
	pomeri("sve");
}
function prikaziNiz(s,array,brel)
{
   var e = "<hr/>";   
    
   for (var y=0; y<brel; y++)
   {
     e += array[y] + "<br/>"+"<hr/>";
   }
   document.getElementById(s).innerHTML = e;
}

function pomeri(s)
{
	var elem = document.getElementById(s); 
	var poz = 0;
	clearInterval(id);
	id = setInterval(frame, 10);
	function frame() {
      if (poz==70){
		clearInterval(id);
	  }
	  else{
		poz++; 
		elem.style.top = poz + "px"; 
	  }
	}	
}

function sortiraj()
{	/*
	for(i=0;i<brel-1;i++){
		for(j=i+1;j<brel;j++){
			if(sum[j]>sum[i]){
				pom=sum[i];
				sum[i]=sum[j];
				sum[j]=pom;
				pom=zad1[i];
				zad1[i]=zad1[j];
				zad1[j]=pom;
				pom=zad2[i];
				zad2[i]=zad2[j];
				zad2[j]=pom;
				pom=zad3[i];
				zad3[i]=zad3[j];
				zad3[j]=pom;
				pom2=ime[i];
				ime[i]=ime[j];
				ime[j]=pom2;				
			}
		}
	}*/
	zad1.sort();
}



