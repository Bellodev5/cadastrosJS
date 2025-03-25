let res = document.getElementById('res')
let gravar = document.getElementById('gravar')
gravar.addEventListener ('click', (e)=>{
    e.preventDefault()
    let telefone = document.getElementById('telefoneCliente').value
    let email = document.getElementById('emailCliente').value
    let nome = document.getElementById('nomeCliente').value
    res.innerHTML = ''
    res.innerHTML += `Nome: ${nome} <br>`
    res.innerHTML += `Email:${email} <br>`
    res.innerHTML += `Telefone:${telefone}<br>`
    res.innerHTML += `O cliente ${nome} foi cadastrado! <br> Contatos: ${email} ou ${telefone}`

    
    console.log(telefone,email,nome)
})