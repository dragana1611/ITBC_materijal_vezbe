#include <stdio.h>
#include <stdlib.h>

/*
	Funkcija vraca povrsinu pravougaonika za prosledjene stranice a i b.
*/
float povrsinaPravougaonika(float a, float b)
{
    return a * b;
}

/*
	Funkcija vraca obim pravougaonika za prosledjene stranice a i b.
*/
float obimPravougaonika(float a, float b)
{
    return 2 * a + 2 * b;
}

int main()
{
    float O, P, a, b;

    printf("Unesite stranicu a: ");
    scanf("%f", &a);

    printf("Unesite stranicu b: ");
    scanf("%f", &b);

    O = obimPravougaonika(a, b);
    P = povrsinaPravougaonika(a, b);

    printf("\nO = %.2f; P = %.2f\n", O, P);

    return 0;
}
