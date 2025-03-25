let res2 = document.getElementById('res2')
let gravar2 = document.getElementById('gravar2')
gravar2.addEventListener ('click', (e)=>{
    e.preventDefault()
    let preco = document.getElementById('preco').value
    let qntd = document.getElementById('qntd').value
    let marca = document.getElementById('MARCA').value
    let nome = document.getElementById('nomeP').value
    res2.innerHTML = ''
    res2.innerHTML += `Nome: ${nome} <br>`
    res2.innerHTML += `Marca:${marca} <br>`
    res2.innerHTML += `Quantidade:${qntd}<br>`
    res2.innerHTML += `Preço:${preco}<br>`
    res2.innerHTML += `Preço de ${qntd} unidades:R$${preco*qntd}<br>`
    
    console.log(preco,qntd,marca,nome)
})