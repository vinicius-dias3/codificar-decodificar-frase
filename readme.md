9 - Crie uma função que Codifique e Decodifique
Implemente uma função que codifica e decodifica uma frase, trocando vogais por números ou números por vogais.

Para codificar a frase utilize a função encode que recebe uma string como parâmetro e deverá trocar todas as vogais minúsculas por números, de acordo com o formato:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5

Ou seja, caso o parâmetro de encode seja 'hi there!', o retorno deverá ser 'h3 th2r2!'.

Para decodificar a frase utilize a função decode que recebe uma string contendo letras e números como parâmetro e deverá trocar todos os números por vogais minúsculas, de acordo com o formato:

1 -> a
2 -> e
3 -> i
4 -> o
5 -> u

Por exemplo, caso o parâmetro de decode seja 'h3 th2r2!', o retorno deverá ser 'hi there!'.

O que será testado:

A função encode quando receber o parâmetro hello, deve retornar o valor h2ll4;
A função encode quando receber o parâmetro How are you today? deve retornar o valor H4w 1r2 y45 t4d1y?;
A função encode quando receber o parâmetro This is an encoding test. deve retornar o valor Th3s 3s 1n 2nc4d3ng t2st.;
A função encode quando receber o parâmetro go Trybe!  deve retornar o valor g4 Tryb2!