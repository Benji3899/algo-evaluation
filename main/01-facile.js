/**
 * Programmer une fonction qui renvoie le signe du nombre passé en paramètre :
 * - "POSITIVE" s'il est de signe positif
 * - "NEGATIVE" s'il est de signe négatif
 * - "NUL" s'il est nul
 */
function signe(nombre) {
  if (nombre > 0) {
    return "POSITIVE"
  } else if (nombre < 0) {
    return "NEGATIVE"
  } else {
    return "NUL"
  }
}
console.log(signe(0))

/**
 * Programmer une fonction prenant en argument un tableau de nombres, et qui renvoie un tableau ne contenant que les nombres pairs.
 * Astuce : un nombre pair est un nombre dont le reste de la division par 2 est 0.
 */
function nombresPairs(nombres) {
  let tablePairs = [];
  let tableBegin = 0;
  for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] % 2 === 0) {
      tablePairs[tableBegin] = nombres[i];
      tableBegin++;
    }
  }
  return tablePairs;
}
let tableComplet = [8, 13, 16, 21, 26, 29, 32];
console.log(nombresPairs(tableComplet));