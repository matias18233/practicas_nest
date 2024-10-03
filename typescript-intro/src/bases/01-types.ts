export let name = 'Fernando';

export const age: number = 35;

export const isValid: boolean = true;

console.log(isValid);

name = 'Melisa';

export const templateString = `Esto es un string
multilínea
que puede tener
" dobles,
' simples
inyectar símbolos \$
inyectar variables ${ name }
expresiones ${ 1 + 1 }
números ${ age }
boolean ${ isValid }
`;

console.log(templateString);