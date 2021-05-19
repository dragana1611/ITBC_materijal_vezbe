#include <stdio.h>
#include <stdlib.h>

/*
    Funkcija proverava da li je zbir cifara prirodnog broja x veci od odgovarajuceg broja n.
    Povratna vrednost je 0 ako nije, bilo koja druga vrednost ako jeste.
*/
int zbirCifaraVeciOdN(unsigned x, int n);

int main()
{

    unsigned i; // moze i int i;
    printf("Trocifreni brojevi ciji je zbir cifara veci od 20:\n");

    for(i = 100; i <= 999; i++)
    {
        if(zbirCifaraVeciOdN(i, 20))
        {

            printf("Broj: %u\n", i);
        }
    }

    return 0;
}

int zbirCifaraVeciOdN(unsigned x, int n)
{

    unsigned zbir = 0;  // moze i int zbir = 0;

    while (x > 0)
    {
        zbir += x % 10;
        x = x / 10;
    }

    return zbir > n;

}
