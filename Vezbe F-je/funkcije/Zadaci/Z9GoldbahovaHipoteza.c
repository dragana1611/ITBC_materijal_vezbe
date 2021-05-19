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
    int m, i = 4, k = 2, sveMoze = 1, uspeh = 0;

    printf("Uneti m: ");
    scanf("%d", &m);

    while(i <= m && sveMoze)
    {
        k = 2;

        while(k <= i && !prost(i) && !prost(i - k))
        {
            k++;
        }

        if(k > i)
        {
            sveMoze = 0;
        }
        else
        {
            printf("\n%d = %d + %d", i, k, i - k);
        }
        i += 2;
    }

    if(sveMoze)
    {
        printf("\nGoldbahova hipoteza vazi za brojeve manje ili jednake %d.\n", m);
    }
    else
    {
        printf("\nGoldbahova hipoteza ne vazi za broj %d.\n", i);
    }

    return 0;
}
