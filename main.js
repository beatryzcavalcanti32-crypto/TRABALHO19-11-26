const corpoTabela = document.getElementById("corpoTabela")
const formulario = document.getElementById("formulario")

const doces = [
    {nome: "Brigadeiro", sabor: "Chocolate", preco: "3.50"},
    {nome: "Beijinho", sabor: "Coco", preco: "3.00"},
    {nome: "Brownie", sabor: "Chocolate", preco: "6.00"},
    {nome: "Pudim", sabor: "Leite Condensado", preco: "8.00"},
]

function exibir(){
    corpoTabela.innerHTML = ""

    for (doce of doces){
        corpoTabela.innerHTML +=
        `<tr>
            <td>${doce.nome}</td>
            <td>${doce.sabor}</td>
            <td>R$ ${doce.preco}</td>
        </tr>`
    }
}

exibir()

formulario.addEventListener("submit", function(evento){
    evento.preventDefault()

    const valorNome = document.getElementById("campoNome").value
    const valorSabor = document.getElementById("campoSabor").value
    const valorPreco = document.getElementById("campoPreco").value

    const x = {nome: valorNome, sabor: valorSabor, preco: valorPreco}

    doces.push(x)

    exibir()

    formulario.reset()
})