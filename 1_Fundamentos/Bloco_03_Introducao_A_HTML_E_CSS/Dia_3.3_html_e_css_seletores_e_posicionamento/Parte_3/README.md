# Agrupamento de Seletores e Pseudoclasses

Você verá a seguir como agrupar seus seletores e como usar as pseudoclasses para estilizar ainda mais seu site:

Viu como podemos economizar linhas de código simplesmente agrupando estilos? Ao fazer isso, podemos corrigir rapidamente erros de estilo pela página. Imagine: você precisa criar a versão dark-theme do seu site, fazendo todos os backgrounds ficarem escuros, textos ficarem claros e estilizar os títulos. Para isso, você precisaria editar cada elemento, mas agora, basta agrupar os seletores que sofrerão as mesmas mudanças e Voilà! Tudo resolvido!

E quanto às pseudoclasses? Desde um simples :hover , para o elemento mudar quando o cursor do mouse passa por cima, até um :focus em um input de formulário, para quando o elemento estiver selecionado e puder ter um valor inserido, as pseudoclasses ajudam a estilizar melhor os elementos, dando um retorno visual ao usuário e agregando mais estilo ao seu site.

DICA: Experimente colocar a propriedade transition nos seus estilos que possuem pseudoclasses. 😉

## Para fixar I

Vamos praticar o que aprendemos.

Copie o código HTML abaixo e faça o que for pedido:

index.html

Copiar
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <title>Agrupando Seletores</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Lista dos Melhores Sites que já vi</h1>
    <p>Top 3 dos melhores sites que existem na web</p>
    <p>Principais motivos para eu gostar deles</p>
  </body>
</html>

1 - Adicione uma lista ordenada dos 3 melhores sites que você conhece.

2 - Crie um arquivo no mesmo diretório e nomeie-o de 'style.css'.

3 - Nesse arquivo .css, adicione os estilos para que:

- O texto das tags 'h1' e 'p' estejam centralizados.

- A cor de fundo da sua lista mude quando o cursor estiver sobre o item.

- A fonte do item mude quando ele for clicado.

4 - Adicione uma lista não ordenada com, pelo menos, 3 características que você gosta.

5 - No 'style.css', adicione a propriedade 'list-style: none' para ambas as listas.

Dica : Nesse link , você irá encontrar a documentação sobre todas as pseudoclasses do CSS.
