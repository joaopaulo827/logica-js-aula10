// Exercício 4.1 (Frete por Região): switch + operadores lógicos
const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

const valorDoFrete=(regiao)=>{
  switch (regiao) {
    case "sul":
  return  frete = 15

    case "sudeste":
  return  frete = 20
      
    case "centro-oeste":
  return  frete = 25

    case "nordeste":
  return  frete = 30

    case "norte":
  return  frete = 35
  
    default:
      frete = -1   // nenhuma região escolhida
  }
}
const FreteGratis=(compra,regiao)=>{
  if(regiao==="sul")
    return "Frete grátis! Total: R$ " + compra.toFixed(2)
  if(regiao==="sudeste")
    return "Frete grátis! Total: R$ " + compra.toFixed(2)
  else
    return false
}
botao.onclick = () => {
  const compra = Number(document.querySelector("#compra").value)
  const regiao = document.querySelector("#regiao").value   // texto: não precisa de Number
  let frete

  if (frete === -1) {
    saida.textContent = "Escolha a região de entrega."
    saida.className = "erro"
  } else if (compra >= 200 && (regiao === "sul" || regiao === "sudeste")) {
    saida.textContent = "Frete grátis! Total: R$ " + compra.toFixed(2)
    saida.className = "ok"
  } else {
    const total = compra + frete
    saida.textContent = "Frete: R$ " + frete.toFixed(2) + "\n" +
                        "Total: R$ " + total.toFixed(2)
    saida.className = "resultado"
  }
}
