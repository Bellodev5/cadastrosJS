let res3 = document.getElementById('res3')
let gravar3 = document.getElementById('gravar3')
gravar3.addEventListener ('click', (e)=>{
    e.preventDefault()
    let complemento = document.getElementById('comple').value
    let bairro = document.getElementById('bairro').value
    let cidade = document.getElementById('cidade').value
    let numero = document.getElementById('numero').value
    let rua = document.getElementById('rua').value
    let telefone = document.getElementById('telefoneC').value
    let nome = document.getElementById('nomeC').value
    res3.innerHTML = ''
    res3.innerHTML += `Nome: ${nome} <br>`
    res3.innerHTML += `Telefone: ${telefone} <br>`
    res3.innerHTML += `Rua:${rua} <br>`
    res3.innerHTML += `Numero:${numero}<br>`
    res3.innerHTML += `Cidade:${cidade}<br>`
    res3.innerHTML += `Bairro:${bairro}<br>`
    res3.innerHTML += `Complemento:${complemento}<br>`
    
    console.log(preco,qntd,marca,nome)
})