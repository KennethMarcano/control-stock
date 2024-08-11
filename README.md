# TEST T-ALPHA

Aplicação frontend para o teste tecnico usando a API:  
https://interview.t-alpha.com.br

É necessario ter um cadastro valido para acessa ao sistema completo, por isso foi colocada uma opção
para se cadastrar no sistema e assim fazer login.

En este sistema cada usuario tem sua propia lista de produtos, então é possivel criar, editar e apagar os produtos sem afetar os outro usuarios.

Alem de criar, deletar e apagar os produtos é possivel fazer uma busqueda pelo nombre do produto.

### INSTALAÇÃO

Precisa ter Node.js instalado para executar essa aplicação frontend.

Depois de ter clonado o projeto abre a pasta do projeto no terminal e instala as dependencias com:
'npm install'

Para executar de forma local solo é necessario executar o comando: 'npm start'.

A primeira pagina sera a parte de Login, se não tiver cadastro tem uma Navbar com 2 opções, uma para
se cadastrar no sistema e outra para fazer login.

Uma vez feito login, é possivel olhar os produtos do usuario criado, se o usuario é novo não vai ter
nehum producto. Na navbar estão as opções:

-'Produtos': Tabua com todos os produtos cadastrados onde cada produto tem 2 botões um para editar e outro para apagar. 
-'Cadastrar produto': Tem um formulario para cadastrar um produto novo.
-'Procurar produto': Tem um formulario para procurar um produto especifico pelo nome se existe ele vai mostrar uma tabua com todas as informações do produto mais as opções de editar e apagar.  

Alem dassas opções tem mais 2 icones no navbar: uma bolinha verde para indicar que esta dentro do sistema e uma 'X' que é para fazer logout.

## ESTRUTURA DO PROJETO

/src  
  /components
  /config
  /hooks 
  /pages
  /routes
  /services
  /store  

### DOCUMENTAÇÃO DA API

https://interview.t-alpha.com.br/reference
