#include <stdio.h>
#include <stdlib.h>

/*
	Funkcija racuna stepen odgovarajuceg broja.
*/
float stepen(float broj, int stepen)
{
    int i;
    float rez = 1;

    for(i = 0; i < stepen; i++)
    {
        rez *= broj;
    }

    return rez;
}

int main()
{

    float x, rezultat;

    printf("Unesite realan broj x: ");
    scanf("%f", &x);

    rezultat = stepen(x, 22) - 8 * stepen(x, 13) + 12 * stepen(x, 2);

    printf("Rezultat je: %.2f\n", rezultat);

    return 0;
}
