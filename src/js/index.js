const botaoCodificar = document.querySelector('.btn-codificar')
const botaoDecodificar = document.querySelector('.btn-decodificar')
// const botaoCopiar = document.querySelector('.btn-copiar')
let conteudoFraseCodificada
let conteudoFraseDecodificada
const substituicoesCodificar = {
    'a': 'ai',
    'e': 'ey',
    'i': 'ee',
    'o': 'bi',
    'u': 'oo',
    's': 'wq',
    'l': 'un'
};

botaoCodificar.addEventListener('click', (event) =>{
    event.preventDefault()
    const frase = document.querySelector('textarea').value
    let fraseResultado = document.querySelector('.resultado p')
    const arrayDaFrase = frase.split('')
    // console.log(arrayDaFrase)
    const arrayCodificada = []

    arrayDaFrase.forEach((letra) => {
        const substituicao = substituicoesCodificar[letra]
        arrayCodificada.push(substituicao || letra)
    })
    // console.log(arrayCodificada.join('')) //codificando
    conteudoFraseCodificada = arrayCodificada.join('')
    // console.log(conteudoFraseCodificada) //funcionando
    fraseResultado.innerHTML = conteudoFraseCodificada
})   

botaoDecodificar.addEventListener('click', (event)=> {
    event.preventDefault()
    const frase = document.querySelector('textarea').value
    console.log(frase)
    const fraseDecodificada = frase.replace(/un/g, 'l')
    .replace(/wq/g, 's')
    .replace(/oo/g, 'u')
    .replace(/bi/g, 'o')
    .replace(/ee/g, 'i')
    .replace(/ey/g, 'e')
    .replace(/ai/g, 'a')
    // console.log(fraseDecodificada) //funcionando
    let fraseResultado = document.querySelector('.resultado p')
    fraseResultado.innerHTML = fraseDecodificada
})

botaoCopiar.addEventListener('click', ()=> {
    let fraseParaCopiar = conteudoFraseResultado
    console.log(fraseCopiada) //copiando frase codificada 
    
})


/*botaoCopiar.addEventListener('click', ()=> {
    // console.log(botaoCopiar)
    let fraseCopiada = conteudoFraseResultado
    console.log(fraseCopiada) //copiando frase codificado com sucesso
    // document.frase
    fraseCopiada.execCommand('copy')
})*/