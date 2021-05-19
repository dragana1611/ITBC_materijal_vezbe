function primeni()
{
        s = document.getElementById("tx").value;
        
		
        document.getElementById("res").innerHTML = velika(s);
}



function velika(str) 
{
    str = str.split(" ");
	
	console.log(str)

    for (var i = 0, x = str.length; i < x; i++) {
		console.log(str[i])
		//kad imamo string s - i hocemo karakter na mestu x -> s[x]
		//kad imamo niz a i hocemo elemenat y iz niza -> a[y]  //array
		//niz stringova str[i][0] elemenat iz niza na mestu i i verdnost prvog slova u njemu
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
		console.log(str[i])
    }

    return str.join(" ");
}
