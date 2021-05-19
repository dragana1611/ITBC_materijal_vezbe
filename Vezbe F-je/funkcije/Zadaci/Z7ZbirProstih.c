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
    int m, i, postojiPar = 0;

    printf("Uneti m: ");
    scanf("%d", &m);

    for(i = 2; i <= m / 2; ++i)
    {
        if (prost(i))
        {
            //prostBroj1 = i
            if (prost(m - i))
            {
                //prostBroj2 = m - i

                // m = prostBroj1 + prostBroj2
                printf("%d = %d + %d\n", m, i, m - i);
                postojiPar = 1;
            }

        }
    }

    if(!postojiPar)
        printf("\nBroj %d se ne moze predstaviti zbirom dva prosta broja.\n", m);

    return 0;
}
