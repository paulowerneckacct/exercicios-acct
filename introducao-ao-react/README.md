# Exercício de introdução ao React

## Rodando o projeto

1. Execute $ npm i
2. Execute $ npm start

## Sobre o projeto

10 funções JavaScript manipulam uma constante com o valor "hello world" e retornam o novo valor gravado em outra variável.
Um objeto contém as string retornadas e a partir desse objeto um map é feito inserindo os valores na tela.
Para manipular o valor do objeto, um setState é utilizado com conjunto com um useEffect.

### Atualizando a data na tela

A função refreshDate utiliza um setState para atualizar o valor para a data atual, e essa função é chamada a cada 1000ms no useEffect.
