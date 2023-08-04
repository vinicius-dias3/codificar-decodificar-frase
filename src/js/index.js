const botaoCodificar = document.querySelector('.btn-codificar')
const botaoDecodificar = document.querySelector('.btn-decodificar')
//primeiro, deixo o código funcionando, depois crio objeto ou array pra enviar para o select

botaoCodificar.addEventListener('click', (event) =>{
    event.preventDefault()
    const frase = document.querySelector('textarea').value
    console.log(frase)
    let letraT = frase.indexOf('t')  
    console.log(frase.charAt(3), frase.charAt(5))
})

//Frase teste para o projeto
/*
Inserir icone para copiar a frase codificada
*/