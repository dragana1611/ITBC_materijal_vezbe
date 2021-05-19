#include <stdio.h>
#include <stdlib.h>

/*
	Funkcija vraca veci broj od dva prosledjena broja.
*/
float max(float a, float b)
{
    if(a > b)
        return a;
    else
        return b;
}

int main()
{

    float prvi, drugi, treci, cetvrti, maxVrednost;

    printf("Unesite prvi broj: ");
    scanf("%f", &prvi);

    printf("Unesite drugi broj: ");
    scanf("%f", &drugi);

    printf("Unesite treci broj: ");
    scanf("%f", &treci);

    printf("Unesite cetvrti broj: ");
    scanf("%f", &cetvrti);

    maxVrednost = max(max(prvi, drugi), max(treci, cetvrti));

    printf("\nMaksimum unetih brojeva je: %.3f\n", maxVrednost);

    return 0;
}
