#include <stdio.h>
#include <stdlib.h>

/*
    Funkcija ispisuje k puta broj n.
*/
void ispisi(int, int);

int main()
{

    int n, i = 0;

    printf("Unesite n: ");
    scanf("%d", &n);

    for(i = 1; i <= n; i++)
    {
        ispisi(i, i);
    }

    return 0;
}

void ispisi(int n, int k)
{
    int j = 0;

    for(j = 0; j < k; j++)
    {
        printf("%3d ", n);
    }

    printf("\n");
}
