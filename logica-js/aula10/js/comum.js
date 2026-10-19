const mostrar = (mensagem, classe) => {
  const saida = document.querySelector("#resultado");
  saida.textContent = mensagem;
  saida.className = classe;
}

const ehPar= (num)=> num % 2 === 0;

const tabuada = (n) => {
  let texto = ""
  for (let i = 1; i <= 10; i++) {
    texto += n + " x " + i + " = " + n * i + "\n"
  }
  return texto
}