// Exercício 3.1 (Média): ler, calcular, mostrar
const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

// a função: recebe as notas e devolve a média
const calcularMedia = (n1, n2) => {
  return (n1 + n2) / 2
}

// o botão: lê, chama a função e mostra
botao.onclick = () => {
  const n1 = Number(document.querySelector("#nota1").value)
  const n2 = Number(document.querySelector("#nota2").value)
  const media = calcularMedia(n1, n2)
  saida.textContent = "Média: " + media.toFixed(1)
}
