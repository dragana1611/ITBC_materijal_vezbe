#include <stdio.h>
#include <stdlib.h>

/*
	Funkcija ispisuje ispisuje prosledjeni broj a i sve njegove cifre ponaosob.
*/
void ispisCifara(int a){

    int i, cifre[20], duzina = 0;

    printf("\n%d = ", a);

    do
    {
        cifre[duzina] = a % 10;
        duzina++;
        a /= 10;
    }
    while(a != 0);

    for(i = duzina - 1; i >= 0; i--)
    {
        printf("%d ", cifre[i]);
    }
}

/*
	Funkcija koja za svaki broj iz intervala [a, b] ispisuje taj broj i sve njegove cifre ponaosob.
*/
void ispisCifaraIntervala(int a, int b)
{
    int i;

    for(i = a; i <= b; ++i)
    {
        ispisCifara(i);
    }
}

int main()
{
    int a, b;

    do
    {
        printf("Unesite a i b: ");
        scanf("%d %d", &a, &b);

        if(a > b || a < 0 || b < 0)
        {
            printf("\nMora vaziti: a >= 0, b >= 0 i b >= a! Pokusajte ponovo!\n\n");
        }
    }
    while(a > b || a < 0 || b < 0);

    ispisCifaraIntervala(a, b);

    return 0;
}


