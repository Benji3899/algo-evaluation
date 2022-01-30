/**
 * Programmer une fonction prenant en argument 2 tableaux et qui renvoie un tableau contenant leurs valeurs alternées.
 * 
 * Exemple : [1, 2, 3] et ["apple", "orange", "banana"] renverra : [1, "apple", 2, "orange", 3, "banana"]
 */
function combine(tableau1, tableau2) {
    let tableCombine = [];
    let i = 0;
    if (table1.length !== table2.length)
        return
    while (i < table1.length) {
        tableCombine[i * 2] = table1[i];
        tableCombine[i * 2 + 1] = table2[i];
        i++;
    }
    return tableCombine;
}
let table1 = [1, 2, 3];
let table2 = ["apple", "orange", "banana"];
console.log(combine(table1, table2));
/**
 * Programmer une fonction prenant en argument un tableau d'éléments et une valeur offset, et qui renvoie un tableau avec les valeurs du tableau en argument décalées de la valeur
 * de offset.
 * 
 * Par exemple : rotate([1, 2, 3, 4, 5], 2) renverra [4, 5, 1, 2, 3] 
 */
function rotate(tableau, offset) {
    let newTable = [];
    let count = offset;
    for (let i = 0; i < tableau.length; i++) {
        if (i + count >= tableau.length) count = -i;
        newTable[i] = tableau[i + count];
    }
    return newTable;
}
let tableMix = [1, 2, 3, 4, 5];
console.log(rotate(tableMix, 3));
/**
 * Suite de Syracuse
 * 
 * La suite de Syracuse est une suite de nombre (nous avions vu la suite de Fibonacci en cours), calculée en prenant pour chaque élément la moitié de sa valeur s'il est pair
 * et le triple plus 1 s'il est impair. Cette suite est infinie, et nous ne prendrons que les 10 premiers éléments.
 * 
 * Programmer une fonction prenant en argument le nombre pour lequel la suite est calculée et qui renvoie un tableau contenant les 10 premiers éléments de la suite de Syracuse.
 * 
 * Par exemple, pour 14, la suite sera : [14, 7, 22, 11, 34, 17, 52, 26, 13, 40]
 * Pour 1, la suite sera : [1, 4, 2, 1, 4, 2, 1, 4, 2, 1]
 */
function syracuse(nombre) {
    let nbrCourent = nombre;
    let tableSyra = [];
    tableSyra[0] = nbrCourent;
    let i = 1;
    while (i < 10) {
        if (nbrCourent % 2 === 0) {
            nbrCourent /= 2;
        } else {
            nbrCourent = nbrCourent * 3 + 1;
        }
        tableSyra[i] = nbrCourent;
    }
    return tableSyra;
}
let test = 14;
console.log(syracuse(test));