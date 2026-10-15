// Exercício 3.2 (Temperatura): F = C x 9 / 5 + 32
const botao = document.querySelector("#converter")
const saida = document.querySelector("#resultado")

const celsiusParaFahrenheit= (celsius) => {
  return (celsius) * 9 / 5 + 32
}
botao.onclick = () => {
  const celsius = Number(document.querySelector("#celsius").value)

  const fahrenheit = celsiusParaFahrenheit(celsius)

  saida.textContent = celsius + " °C = " + fahrenheit.toFixed(1) + " °F"
}
