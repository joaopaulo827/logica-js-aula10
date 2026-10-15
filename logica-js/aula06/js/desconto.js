// Exercício 3.3 (Desconto)
const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

const valorDoDesconto=(preco,percentual) =>{
  return (preco)*percentual/100
}
const aplicarDesconto = (preco, percentual) => {
  return preco - valorDoDesconto(preco, percentual)
}
botao.onclick = () => {
  const preco = Number(document.querySelector("#preco").value)
  const percentual = Number(document.querySelector("#percentual").value)

  const desconto = valorDoDesconto(preco,percentual)   
  const precoFinal = aplicarDesconto(preco,percentual)

  saida.textContent = "Desconto: R$ " + desconto.toFixed(2) + "\n" +
                      "Preço final: R$ " + precoFinal.toFixed(2)
}
