## **Documentação Técnica**

**Estrutura do banco de dados(MongoDB):** <br>
O banco de dados foi estruturado apenas para ter uma Collection (sem necessidade de ter mais de uma) sem sub-collections, pois o próprio banco de dados (MongoDB) não aceita. Desta forma, foi criado o banco de dados com uma Collection chamada Films onde dentro possui os documents (Filmes):

     - Banco de Dados (Test) 	
    	 - Collections (films) 		
    		 - Documents (filmes)

**Validação com JSON Schema (utilizando o Mongoose):** <br>
A inserção ou a atualização de dados só vai funcionar se satisfazer a regra: 
  

    const FilmSchema = new mongoose.Schema({
      	title: { type: String, required: true, trim: true },
      	genere: { type: String, required: true},
      	description: { type: String, required: true, minlength: 10 },
      	image_url: { type: String, required: false},
      	trailer_url: { type: String, required: false},});

 **Organização dos Blocos de Códigos da API:**

**[Bloco 1]**
Importações: As bibliotecas express e mongoose são importadas.
Aplicação Express: Uma instância do Express é criada e configurada para usar JSON.
Porta: A aplicação será executada na porta 3000 (uma porta padrão).

**[Bloco 2]**
Modelo de Filme a ser inserido no banco de dados e validação JSON Schema: Define um modelo para inserir um Filme no banco de dados com validação usando Mongoose Schema. O banco de dados funciona com Collections e Documents. A Collection chamada de ‘Films’ tem Documents chamado ‘Films’ que por sua vez, possui 5 campos para receber dados.

**[Bloco 3]**
ROTAS DA API:
Rota POST: Cria um novo documento na coleção films com os dados fornecidos no corpo da requisição e retorna o documento criado.
Rota GET: Recupera e retorna todos os documentos da coleção films.
Rota GET por ID: Recupera e retorna um único documento baseado no ID fornecido na URL.
Rota PUT por ID: Atualiza um documento baseado no ID fornecido com os dados fornecidos no corpo da requisição e retorna o documento atualizado.
Rota DELETE por ID: Deleta um documento baseado no ID fornecido e retorna o documento deletado.

**[Bloco 4]** 
**Inicialização**: 
O servidor Express é iniciado e escuta na porta especificada.


## **Como iniciar:**

Clonar o Repositório no GitHub:

    git clone <url-do-repositorio>

Instalar as dependências, digite no terminal aberto na pasta onde foi clonado o repositório:

    npm install

**Configurar o banco de dados MongoDB:**
	Para configurar o MongoDB é necessário fazer a instalação e o cadastro no site da empresa desenvolvedora da tecnologia para utilizar o Atlas, serviço de banco de dados não relacional em nuvem.

**Iniciar o servidor:**

    npm start

O servidor estará disponível na porta 3000 como padrão.

**Iniciar a API:**

    node src/index.js

**No console ou no terminal:**
Observe se no console ou no terminal foi impresso uma mensagem ‘✔️ API Iniciada’ para confirmar se tudo ocorreu bem. 

**Utilizando a API:**
Antes de iniciar o uso da API é necessário utilizar um software para testar requisições de API’s Web com protocolo HTTP. Recomendo o uso do Postman, pois foi este software utilizado no desenvolvimento e nos testes. 


## Realizando requisições:

IMPORTANTE: 
*1. Configure para que a requisição a ser efetuada esteja correta observando se está utilizando o método correto para a requisição desejada. Exemplo: GET para listar os filmes no banco de dados. 2. No momento em que for inserido um novo filme (documento) e na hora de atualizar, caso necessário, alguns campos são obrigados a serem preenchidos para passar na validação. São eles: title, genere e description, sendo o último obrigatório ter 10 caracteres no mínimo. 3. No código não há muitos tratamentos de erros, desta forma, se porventura o software der algum erro ele fechará automaticamente a aplicação. Sendo necessário então a reinicialização. Exemplo: Não inserir dados em um campo obrigatório.*

**No Postman:** <br>
No campo de URL coloque: http://localhost:3000

**Para inserir um filme (Document) no banco de dados:** <br>
**Método**: POST <br>
**URL**: http://localhost:3000 <br>
Modelo de dados:

    {
        "title": "",
        "genere": "",
        "description": "",
        "image_url": "",
        "trailer_url": ""
    }

*OBS: O banco de dados MongoDB por padrão já cria ID’s para os documentos, dessa forma evita erros de duplicata.*

Envie a requisição clicando no botão ‘Send’

**Para fazer CONSULTAR TODOS os filmes no banco de dados:** <br>
**Método**: GET <br>
**URL**: http://localhost:3000 <br>
Envie a requisição clicando no botão ‘Send’ 

**Para fazer CONSULTAR um ÚNICO filme no banco de dados utilizando ID:** <br>
**Método**: GET <br>
**URL**: http://localhost:3000/[ID_do_filme] <br>
Envie a requisição clicando no botão ‘Send’

**Para ATUALIZAR um filme no banco de dados utilizando ID:** <br>
**Método**: PUT <br>
**URL**: http://localhost:3000/[ID_do_filme] <br>
Modelo de dados:

    {
        "title": "",
        "genere": "",
        "description": "",
        "image_url": "",
        "trailer_url": ""
    }

*OBS: Após o resultado desejado aparecer, siga o modelo de dados para evitar erros.
E então atualize a informação no filme desejado.*

Envie a requisição clicando no botão ‘Send’
	
**Para EXCLUIR um filme no banco de dados utilizando ID:** <br>
**Método**: DELETE<br>
**URL**: http://localhost:3000/[ID_do_filme]<br>
Envie a requisição clicando no botão ‘Send’
*OBS: Após o resultado desejado aparecer, confirme a exclusão clicando novamente no botão ‘Send’.*
