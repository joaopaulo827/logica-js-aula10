// Exercícios 3.1 (IMC com Faixas) e 3.3 (Campo Vazio)
const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

const  calcularImc=(peso, altura)=>{
  return (peso/ (altura * altura))
}
const classificarImc = (imc) => {
  if (imc < 18.5) {
    return "Abaixo do peso"
  }
  if (imc < 25) {
    return "Peso normal"
  }
  if (imc < 30){
    return "Sobrepeso"
  }
  return "Obesidade"
}
const classeDaFaixa=(faixa)=>{
  if (faixa < 18.5) {
    return "alerta"
  }
  if (faixa < 25) {
    return "ok"
  }
  if (faixa < 30){
    return "alerta"
  }
  return "erro"   
}
botao.onclick = () => {
  const campoPeso = document.querySelector("#peso")
  const campoAltura = document.querySelector("#altura")
  const peso = Number(campoPeso.value)
  const altura = Number(campoAltura.value)

    const imc = calcularImc(peso, altura)
    const faixa = classeDaFaixa(imc);
    const classe =classeDaFaixa(imc);

    saida.textContent = "IMC " + imc.toFixed(1) + ": " + faixa
    saida.className = classe

}
