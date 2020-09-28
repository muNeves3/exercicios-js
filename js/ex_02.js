function pares(x, y) {
    for(let i = y; i >= x; i --) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}
   
pares(1, 10);