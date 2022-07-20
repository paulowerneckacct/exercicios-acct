# Onboarding VTEX

Este módulo do plano de estágio apresentas diferentes módulos do [VTEX](https://vtex.com/).

---

## Catálogo

O catálogo é um módulo de administração da loja, onde é possível configurar a forma que os produtos serão mostrados.

O Catálogo da VTEX é baseado em 4 conceitos fundamentais:

1. [Categorias](#categories)
2. [Produto](#product)
3. [SKU](#sku)
4. [Especificações ](#specifications)

<div id="categories"/>

### 1. Categorias

Dentro do catálogo, existe a parte de categorias onde é possível criar seções para organizar os produtos para facilitar a busca dos mesmos na loja. Existem 3 níveis de categorização, que são eles:

- **Departamento** - É o nível mais abrangente de categorização, e dentro dele os outros níveis deverão ser alocados.

- **Categorias** - Esse é o nível entre o departamento e a subcategoria.

- **Subcategorias** - É o nível mais abaixo da categorização.

#### 1.2 Cadastrar Categorias

No geral existem duas formas de se cadastrar uma nova categoria, via API ou Admin.

Via Admin é necessário acessar a aba **Catálogo** -> **Categorias**. Uma observação importante é que ao selecionar uma categoria, a adição será feita em forma de uma categoria filha.

#### 1.3 Grupos e Campos

Os grupos são seções de informações sobre um produto, dentro dos grupos existem os campos do produto com as suas especificações.
Existem campos de produto e campos de SKU. Para diferenciar um do outro basta compreender que o campo de produto contém informações de um produto que não são alterados de acordo com as suas variações. Já o campo de SKU é a própria variação do produto, ex.: cor, tamanho, etc.

<div id="product"/>

### 2. Produto

Hierarquicamente o produto se encontra entre as categorias e o SKU.
No geral os produtos contém características que podem ou não se alterar dependendo da sua especificação.

#### 2.1 Adicionando produtos

Para adicionar um produto, inicialmente é necessário ter criado a categoria e a marca a qual esse produto pertence, lembrando que: **a marca (item obrigatório) e a categoria precisam estar ativas.**

<div id="sku"/>

### 3. SKU

Se um mesmo produto contém duas especificações diferentes, isso é chamado de SKU. Um exemplo prático de SKU pode ser uma camisa que possui variações de cores ou estampas.
Na VTEX um produto obrigatoriamente precisa ter pelo menos um SKU. E um SKU só pode ser criado após a criação de um produto.

<div id="specifications"/>

### 4. Especificações

Existem especificações de produtos e de SKUs. As especificações de produtos servem para caracterizar os produtos e assim é possível ajudar na pesquisa na loja. Já as especificações de SKU são as características de um produto específico.

---

## Preços

O módulo de preços da Vtex permite criar, editar e gravar dados sobre o preço e definir regras para que o cliente saiba o custo do produto que está sendo vendido.

Os preços são inseridos a partir da **Lista de preços** e são os SKUs que recebem esse preço.

O módulo de preços é organizado em 3 conceitos:

- Preços
- [Tabela de preços](#table-prices)
- Contextos de aplicação de tabelas de preços

Hierarquicamente, os preços estão dentro da tabela de preços e as tabelas de preços podem ser aplicadas em diferentes contextos.

Os contextos são divididos em:

- Política comercial
- Grupo específico de clientes
- Origem de tráfego
- Condições de benefício

O sistema segue critérios para definir o preço de venda de um SKU. O SKU pode ser vendido apenas por um preço base, mas se houver uma regra de preço, essa regra altera o valor final do produto.
Além das regras de preço, também existem as regras de aproximação, que podem ser utilizadas para entregar um valor final mais atrativo para o cliente. O preço fixo define que o preço calculado de uma tabela de preços será igual ao preço fixado. Para validar um preço, basta acessar a lista de preços e olhar o preço na tabela de política comercial específica.

<div id="table-prices"/>

### Tabela de preços

A tabela de preços é um conjunto de preços de SKUs que podem ser aplicados a um contexto específico. Essas tabelas geralmente são utilizadas para mostrar esses preços em uma página na loja.

### Preço base

O preço base de um SKU é o resultado do preço de custo com o Markup (adicionar uma nota de rodapé).
O preço final ainda pode ser o preço base com a adição de uma regra de preço, mas se não houver, o preço base é o que será mostrado ao cliente.

### Preço de lista

O preço de lista surge como um preço original do produto, o exemplo a seguir mostra como ele irá aparecer para o cliente:

Preço original: 200,00
Preço de venda: 150,00

### Regras de preço

As regras de preço permitem que o preço de um SKU seja alterado em uma tabela específica sem que as outras sejam alteradas. Uma regra de preço pode ser aplicada em uma tabela específica, e ainda também ser definidas para alguns SKUs dentro dessas tabelas. É possível agendar essas regras de produtos definindo data e hora, tanto do início como também do fim. Também é possível escolher o intervalo de marcação e a variação percentual do preço (seja positiva ou negativa).

### Preço fixo

O preço fixo ignora aos outros preços, seja apenas preço base ou também uma regra de preço. É possível agendar o preço fixo e determinar o seu valor e a quantidade mínima de itens para que ele seja aplicado.

### Regras de arredondamento

O arredondamento de preços é uma estratégia para atrair o consumidor pela forma que o preço se apresenta. Para definir uma regra de arredondamento deve-se configurar a faixa de preço, o número dos dígitos arredondados e os métodos de arredondamento.

### Limitador de variação

O limitador de variação deve ser utilizado com cautela pois ele define o quanto de variação (seja máximo ou mínimo) o SKU pode ter. Isso faz com que ao passar desse percentual, o valor será automaticamente setado para o limite da variação.

---

## Promoções

As promoções são descontos concedidos aos clientes que podem ser associados a diferentes situações de compra. Em geral os descontos podem ser nominais ou percentuais(este último pode gerar um destaque de desconto no produto).

As promoções são divididas em seis tipos:

- Regular
- Compre junto
- Mais por menos
- Desconto progressivo
- Compre um ganhe um
- Benefício da campanha

Todas as promoções podem ter um prazo de validade configurável.

### Campanhas

Uma campanha é um recurso para criar públicos-alvo. Durante a criação de um público-alvo é possível definir os produtos que serão aplicados a esse público-alvo.

### Cupons de desconto

Os cupons são gerados através de uma campanha regular ou através da seção de cupons, e eles são gerados em forma de códigos que poderão ser utilizados pelos clientes.
É possível determinar a quantidade máxima de cupons que serão utilizados e também outras regras.

### Taxas

As taxas funcionam adicionando um valor percentual no valor do produto.

---

## Configurações da Conta

Dentro do painel de configurações da conta, é possível editar informações importantes referentes às contas e usuários. Além disso existem as opções de desativar o site para o usuário final, além de remover a loja de produção, fazendo com que nenhuma campanha de tráfego ou porcentagens sobre as vendas faturadas sejam cobradas.

Nessa área pode-se visualizar os dados da empresa, criar novas lojas e adicionar domínios, criar appKeys e appTokens (função restrita ao usuário Titular) e ver informações de contato.

### Permissões e perfis de acesso

Os perfis de acesso contém um grupo de permissões que podem ser determinadas a usuários específicos. A Vtex já possui alguns perfis de acesso pré-estabelecidos, mas é possível criar e editar perfis personalizados com as permissões existentes.

### Usuários

Usuários podem ser criados, editados ou excluídos. Dentro da configuração de usuários é possível designar o perfil de acesso específico do usuário.

### Usuário Titular

O usuário titular é o principal responsável pela loja, suas informações são as que aparecem no contato da loja. O usuário titular pode efetuar ações que são restritas somente a ele dentro da loja, como por exemplo:

- Criar a appKey e o appToken usados em integrações com a loja.
- Reindexar o catálogo.
- Apagar categorias, produtos, SKUs e marcas por meio do fullcleanup.
- Autorizar integrações com alguns marketplaces, como o Mercado Livre.

### Website Binding

Quando existe a configuração para um sistema Multilojas, é necessário vincular o website à conta, e isso é chamado de Website Binding. Essa configuração deve ser uma das primeiras coisas a serem feitas na criação da loja.

---

## Pedidos

Um pedido é gerado quando o cliente dá um Checkout. Quando o pedido é gerado, é possível visualizar um fluxo desse pedido através do módulo de gerenciamento de pedidos. É possível ver diversas informações sobre o pedido, como os itens no carrinho e suas respectivas quantidades, a hora do pedido, dados do cliente, forma de pagamento, etc.

### Fluxo de pedidos

O fluxo de pedidos mostrar todo o caminho do pedido desde o Checkout até o faturamento ou cancelamento. Se o pedido for alterado, o status no fluxo também irá sofrer alterações. O fluxo de pedidos do Seller e do Marketplace são diferentes.

### Reserva

A reserva serve para que um mesmo produto não seja comprado mais de uma vez. O pedido só gera uma reserva quando a compra é finalizada.

### Gerenciamento de pedidos

Na aba de gerenciamento de pedidos é possível acessar os detalhes dos pedidos efetuados. Além disso algumas ações podem ser efetuadas nos pedidos, como por exemplo:

- Reenviar o último e-mail para o cliente.
- Cancelar manualmente o pedido.
- Faturar os itens do pedido.
- Aprovar manualmente o pagamento.

---

## Pagamentos

A seção de pagamentos é onde todas as configurações referentes às formas de pagamento são feitas.

### Gateway

Um Gateway é um sistema que transmite os dados das comprar realizadas no momento do Checkout. As informações de pagamento são enviadas por aqui para os atores que integram o pagamento, e após um retorno sobre a efetuação do pagamento ou o cancelamento.

### Adquirente

O adquirente é uma empresa credenciadora que irá processar os pagamentos e repassar para a bandeira e o banco emissor. Quando toda a situação do pagamento está em ordem, o adquirente que é responsável pelo repasse do valor da compra para a loja.

### Subadquirente

O Subadquirente funciona como um adquirente, mas não consegue fazer todas as funções do adquirente. Basicamente atua como uma ponte entre o adquirente e a loja.

### Bandeira de cartão

As Bandeiras são as empresas responsáveis por definir as regras de pagamentos que sejam feitos a partir do cartão de crédito.

### Banco emissor

O banco emissor é o responsável pelo meio de pagamento dos pedidos, ele que pode ou não autorizar uma venda.

### Fluxo de transação

A transação é o caminho que um pedido percorre até ser trocado pelo dinheiro. A transação está atrelada sempre ao pedido. Dentro da Vtex as transações podem passar por diferentes estágios até a sua conclusão. É possível ver todos os detalhes de uma transação na aba de **Pagamentos -> Transação**.

### Fluxo de Pagamento por Cartão de Crédito

O fluxo de pagamento por cartão de crédito passa necessariamente pelo Gateway, Adquirente, Bandeira e Banco Emissor. Mais detalhadamente o Gateway envia as informações de pagamento para o Adquirente que por sua vez repassa as informações para a Bandeira até chegar ao Banco Emissor, e após isso os dados fazem o percurso reverso até chegar no Gateway informando se o pagamento foi o não aprovado.

### Conectores de Pagamento

Os conectores de pagamento são uma série de protocolos que vão permitir o tráfego dos dados entre a loja, Gateway, Adquirentes e Subadquirentes. Um Conector pode se comunicar com vários meios de pagamentos assim como um meio de pagamento pode se comunicar com vários conectores.

Os conectores precisam ser configuradas através das afiliações de gateway, que são contratos com o Gateway de pagamento escolhido.

### Condições de Pagamento

As condições de pagamento são as regras que deverão ser seguidas ao utilizar um meio de pagamento na loja, essas condições podem ser estabelecidas para comprar parceladas, sejam com juros ou sem e até mesmo compras à vista.

---

## Marketplace

Dentro da seção de Marketplace, é possível encontrar a seção de Sellers. Um Seller na verdade é o dono do SKU, sendo responsável pela entrega do produto. Basicamente dentro do ambiente da Vtex, o Marketplace pode ter diferentes Sellers cadastrados, mas também a loja pode ser o Seller e o Marketplace ao mesmo tempo.

É possível fazer um cadastro de Seller dentro da seção de Sellers, com configurações definidas caso o Seller seja uma loja Vtex, parceiro Vtex ou apenas uma loja física.

---

## Configurações de Loja

Dentro das configurações de loja, diferentes informações podem ser cadastradas ou editadas que dizem respeito à loja.

### Políticas Comerciais

Uma política comercial pode ser cadastrada, editada ou excluída dentro do painel de Configurações de Loja.

### CMS

É a seção onde pode editar o conteúdo que será mostrado no fron-end, seja ele texto ou até mesmo um visual. É possível efetuar configurações de páginas, como links e redirecionamentos, além de editar estilos e o layout das páginas.

### Checkout

A seção de Checkout permite editar as configurações de checkout de todas as lojas cadastradas no ambiente. Essas configurações podem ser visuais ou até mesmo criação de mensagens prontas para que o cliente possa utilizar em um cancelamento de compra.

### Busca

Dentro da seção de Busca é possível definir algumas configurações que serão utilizadas dentro dos campos de busca do site, seja mostrando dicas de pesquisa ou até mesmo configurando o tempo para que um produto seja considerado como lançamento. Também pode-se configurar os critérios de relevância para mostrar os produtos, definindo a ordem de prioridade de cada ponto.

---

## Cliente

Dentro da seção Cliente, existem duas abas: Masterdata e Message Center.

### Message Center

O Message Center é onde é feita a configuração dos e-mails automáticos que serão enviados aos clientes da loja. Tanto o template do e-mail, quanto os remetentes podem ser editados nessa seção. Dentro das configurações do template, pode-se utilizar variáveis para inserir os dados automaticamente.

### Masterdata

O Masterdata permite criar as arquiteturas para banco de dados de uma loja. Por padrão, é utilizado para guardar dados dos clientes, mas é possível inserir novos dados criando novas entidades.
