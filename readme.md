# Codificar e Decodificar Frase

![projeto desktop pronto](./src/images/projeto-desktop-pronto.png)

![projeto responsivo pronto](./src/images/projeto-responsivo-pronto.png)

## O Projeto

Este projeto foi feito para praticar a lógica de programação. 
Ele consiste em codificar uma frase digitada pelo usuário. A codificação substitui algumas letras por outras:
- a -> ai
- e -> ey
- i -> fr
- o -> bi
- u -> oo
- s -> wq
- l -> un

Caso a frase digitada pelo usuário seja `'Ola Mundo!'`, o retorno deverá ser `'Ounai Moondbi!'`.

Para decodificar a frase, foi feito a substituição novamente para a frase ficar com escrita que seja capaz de entender.

### Tecnologias Utilizadas
- HTML
- CSS
- Javascript

### Como foi feito

Em resumo, selecionei a frase digitada, desmembrei em uma array, utilizando o método ``.split()`` e pra cada letra fui substituindo *- `método forEach()` -* de acordo com um objeto que criei para substituir uma letra por outra:
```
const substituicoesCodificar = {
    'a': 'ai',
    'e': 'ey',
    'i': 'fr',
    'o': 'bi',
    'u': 'oo',
    's': 'wq',
    'l': 'un'
};
```

Depois de feita a substituição, juntei a array - *`método join()`* - para voltar a formar a frase, já codificada.

Para decodificar, utilizei o método `replace()`.

Também utilizei a `API Clipboard` para facilitar para o usuário, copiar o texto codificado.