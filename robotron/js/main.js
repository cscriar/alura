// const robotron = document.querySelector("#robotron")

// robotron.addEventListener("click", function() {
//   console.log("cliquei!!")
// })

// function dizOI() {
//   console.log("oi")
//   console.log("Bem-vindo!!!!")
// }

// dizOI()


const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")
const braco = document.querySelector("#braco")

somar.addEventListener("click", (evento) => {
  braco.value += 1
  console.log("somar")
})