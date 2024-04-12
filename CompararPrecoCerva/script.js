// ideia é que eu compare o preço das cervejas com relação ao litro
let container = document.querySelector(".container")
let bloco = document.querySelectorAll(".block")
let quantidade = document.querySelectorAll(".btn p")
let buttonMin = document.querySelectorAll(".min")
let buttonPlus = document.querySelectorAll(".plus")
let valor = document.querySelectorAll(".valor")
let mostrarValor = document.querySelectorAll(".mostrarValor")
let ml = document.querySelectorAll(".ml")

let valorPorduto = 0
for (let i = 0; i < buttonPlus.length; i++) {
  buttonPlus[i].addEventListener("click", function () {
    quantidade[i].innerHTML = `${parseInt(quantidade[i].innerText) + 1}`

    let quantidadeItem = Number(quantidade[i].innerText)
    let valorItem = Number(valor[i].value)
    let calcularMl = Number(ml[i].innerText)

    valorPorduto = quantidadeItem * valorItem
    calcularMl = calcularMl * quantidadeItem

    mostrarValor[i].innerHTML =
    `R$ ${valorPorduto.toFixed(2).replace('.', ',')} &nbsp&nbsp/
    &nbsp&nbsp ${calcularMl.toFixed(2).replace('.', ',')} ml`
  })
}

for (let i = 0; i < buttonMin.length; i++) {
  buttonMin[i].addEventListener("click", function () {
      quantidade[i].innerHTML = `${parseInt(quantidade[i].innerText) - 1}`

      let quantidadeItem = Number(quantidade[i].innerText)
      let valorItem = Number(valor[i].value)
      let calcularMl = Number(ml[i].innerText)

      valorPorduto = quantidadeItem * valorItem
      calcularMl = calcularMl * quantidadeItem

      mostrarValor[i].innerHTML =
        `R$ ${valorPorduto.toFixed(2).replace('.', ',')} &nbsp&nbsp/
      &nbsp&nbsp ${calcularMl.toFixed(2).replace('.', ',')} ml`
  })
}