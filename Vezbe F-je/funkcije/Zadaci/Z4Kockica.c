#include <stdio.h>
#include <stdlib.h>

/*
	Funkcija ispisuje meni i vraca opciju koju je korisnik odabrao.
*/
int meni()
{
    int odg;

    printf("\nODABERITE OPCIJU:\n");
    printf("\t1) Baci kockicu\n");
    printf("\t2) Ispisi vrednost\n");
    printf("\t3) Kraj programa\n");

    do
    {
        printf("Vas odgovor: ");
        scanf("%d", &odg);

        if(odg < 1 || odg > 3)
        {
            printf("POGRESNA VREDNOST! Pokusajte ponovo!\n");
        }
    }
    while(odg < 1 || odg > 3);

    return odg;
}

int main()
{
    srand(time(0));  // seme randoma postavljamo na razlicitu vrednost kako bi svaki put generisali slucajnu vrednost drugacijim redosledom

    int opcija, kockica = 1;

    do
    {
        opcija = meni();

        switch(opcija)
        {
        case 1:
            kockica = rand() % 6 + 1;  // ovaj izraz generisemo slucajan broj od 1 do 6
            printf("Kocka je bacena.\n");
            break;
        case 2:
            printf("Vrednost kockice: %d\n", kockica);
            break;
        case 3:
            printf("Dovidjenja.\n");
            break;
        }
    }
    while(opcija != 3);

    return 0;
}


