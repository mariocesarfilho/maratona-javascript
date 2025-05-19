let varA = 'A';
let varB = 'B';
let varC = 'C';
let auxiliar = varA;

console.log(`Valor de A ${varA}, valor de B ${varB} e valor de C ${varC}`);

varA = varB;
varB = varC;
varC = auxiliar;

//outra forma seria com essa nova maneira do javascript
//[varA, varB, varC] = [varB, varC, varA]

console.log(`Valor de A ${varA}, valor de B ${varB} e valor de C ${varC}`);