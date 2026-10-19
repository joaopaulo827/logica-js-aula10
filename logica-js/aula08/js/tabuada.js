// Exercício 2.2 (Tabuada)
const botao = document.querySelector("#gerar")
const saida = document.querySelector("#resultado")

botao.onclick = () => {
  const numero = Number(document.querySelector("#numero").value)
  const total=tabuada(numero)

  saida.textContent=total
}
