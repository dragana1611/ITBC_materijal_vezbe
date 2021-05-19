#include <stdio.h>
#include <stdlib.h>

/*
	Funkcija koja vraca najmanji zajednicki delilac (NZD) za prosledjene brojeve a i b.
*/
int NZD(int a, int b)
{
    while (a!= b)
    {
        if (a > b)
            a -= b;
        else
            b -= a;
    }

    return a;
}

/*
	Funkcija koja vraca da li su prosledjeni brojevi a i b uzajamno prosti.
*/
int uzajamnoProsti(int a, int b)
{
    return NZD(a, b) == 1;
}

int main()
{
    int p, q, x, i = 0;

    printf("Uneti prvi broj p: ");
    scanf("%d", &p);

    printf("Uneti drugi broj q: ");
    scanf("%d", &q);

    printf("Uneti broj x: ");
    scanf("%d", &x);

    printf("\nBrojevi izmedju %d i %d uzajamno prosti sa %d su:\n", p, q, x);
    for(i = p + 1; i <= q - 1; i++){
        if(uzajamnoProsti(x, i))
            printf("%d\n", i);
    }

    return 0;
}
