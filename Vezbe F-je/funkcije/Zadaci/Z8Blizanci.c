#include <stdio.h>
#include <math.h>

/*
	Funkcija koja vraca da li je prosledjeni broj n prost.
*/
int prost(int n)
{
    int i, jeProst = 1, koren = sqrt(n);

    for(i = 2; i <= koren; i++)
    {
        if(n % i == 0 && n != 2)
            jeProst = 0;
    }

    return jeProst;
}

int main()
{
    int m, i;

    printf("Uneti m: ");
    scanf("%d", &m);

    printf("\nProsti brojevi blizanci su:\n");
    for(i = 3; i < m - 2; i++)
    {
        if(prost(i) && prost(i + 2))
            printf("%d i %d\n", i, i + 2);
    }

    return 0;
}
