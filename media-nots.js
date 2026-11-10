const aluno = {
    nome = "Ana Paula",
    nota1: 7.5,
    nota2: 8.0
};
function media(n1,n2){
    return (n1+n2)/2
};
const mediaFinal = media(aluno.nota1, aluno.nota2);
console.log(`${aluno.nome}: media ${mediaFinal.toFixed(1)}`);
console.log(mediaFinal);