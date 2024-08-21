# TEST T-ALPHA

Aplicação frontend usando a API:  
https://interview.t-alpha.com.br

É necessário ter um cadastro válido para acessar o sistema completo, por isso foi colocada uma opção para se cadastrar no sistema e assim fazer login.

Neste sistema, cada usuário tem sua própria lista de produtos, então é possível criar, editar e apagar os produtos sem afetar os outros usuários.

Além de criar, deletar e apagar os produtos, é possível fazer uma busca pelo nome do produto.

INSTALAÇÃO
Precisa ter Node.js instalado para executar essa aplicação frontend.

Depois de ter clonado o projeto, abra a pasta do projeto no terminal e instale as dependências com: npm install.

Para executar de forma local, só é necessário executar o comando: npm start.

A primeira página será a parte de Login. Se não tiver cadastro, há uma Navbar com duas opções: uma para se cadastrar no sistema e outra para fazer login.

Uma vez feito login, é possível olhar os produtos do usuário criado. Se o usuário for novo, não vai ter nenhum produto. Na Navbar estão as opções:

Produtos: Tabela com todos os produtos cadastrados, onde cada produto tem dois botões: um para editar e outro para apagar. Acima da tabela, há um input para procurar o produto pelo nome.

Cadastrar: Tem um formulário para cadastrar um produto novo. No momento de cadastrar, se o produto já existir, ele não deixa cadastrar.
Além dessas opções, há mais dois ícones na Navbar: um ícone de usuário na cor verde para indicar que está dentro do sistema e um 'X' que é para fazer logout.

As rotas são fechadas e precisam de login!

## ESTRUTURA DO PROJETO

/src  
  /components
  /config
  /hooks 
  /pages
  /routes
  /services
  /store 
  /styles 

### DOCUMENTAÇÃO DA API

https://interview.t-alpha.com.br/reference
