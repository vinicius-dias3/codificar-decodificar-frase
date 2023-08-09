//CORRIGIR NOME DAS VARIÁVEIS
const botaoCodificar = document.querySelector('.btn-codificar')
const botaoDecodificar = document.querySelector('.btn-decodificar')
const botaoCopiar = document.querySelector('.btn-copiar')

let fraseResultado = document.querySelector('.resultado p')
let saidaFrasePronta
let conteudoFraseDecodificada
const substituicoesCodificar = {
    'a': 'ai',
    'e': 'ey',
    'i': 'fr',
    'o': 'bi',
    'u': 'oo',
    's': 'wq',
    'l': 'un'
};

botaoCodificar.addEventListener('click', (event) =>{
    event.preventDefault()
    const frase = document.querySelector('textarea').value
    const arrayDaFrase = frase.split('')
    // console.log(arrayDaFrase)
    const arrayCodificada = []

    arrayDaFrase.forEach((letra) => {
        const substituicao = substituicoesCodificar[letra]
        arrayCodificada.push(substituicao || letra)
    })
    // console.log(arrayCodificada.join('')) //codificando
    saidaFrasePronta = arrayCodificada.join('')
    // console.log(conteudoFraseCodificada) //funcionando
    fraseResultado.innerHTML = saidaFrasePronta
})   

botaoDecodificar.addEventListener('click', (event)=> {
    event.preventDefault()
    const frase = document.querySelector('textarea').value
    // console.log(frase)
    fraseDecodificada = frase.replace(/un/g, 'l')
    .replace(/wq/g, 's')
    .replace(/oo/g, 'u')
    .replace(/bi/g, 'o')
    .replace(/fr/g, 'i')
    .replace(/ey/g, 'e')
    .replace(/ai/g, 'a')
    // console.log(fraseDecodificada) //funcionando
    fraseResultado.innerHTML = fraseDecodificada
    saidaFrasePronta = fraseDecodificada
    console.log(saidaFrasePronta)
})

botaoCopiar.addEventListener('click', async ()=> {
    const textoParaCopiar = fraseResultado.innerHTML
    // console.log(textoParaCopiar) //funcionando
    await navigator.clipboard.writeText(textoParaCopiar)
    botaoCopiar.classList.add('ativar-animacao')
    setTimeout(()=>{
        botaoCopiar.classList.remove('ativar-animacao')
    }, 1000)
})
