#include <stdio.h>
#include <stdlib.h>

/*
	Funkcija vraca broj desetice prosledjenog broja x.
*/
int cifraDesetica(int x)
{
    return (x / 10) % 10;
}

int main()
{
    int n, k, i = 0, broj = 10;

    printf("Uneti n: ");
    scanf("%d", &n);

    printf("Uneti cifru: ");
    scanf("%d", &k);

    printf("Prvih %d brojeva kojima je cifra desetica jednaka %d: \n", n, k);
    while(i < n)
    {
        if(cifraDesetica(broj) == k)
        {
            printf("%d\n", broj);
            i++;
        }
        broj++;
    }

    return 0;
}
