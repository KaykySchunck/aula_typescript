<h2>Iniciando com TypeScript</h2>

<h3>1.2. Instalando TypeScript</h3>
<p>Para instalar o TypeScript globalmente, use:</p>
<code>npm install -g typescript</code>

<h3>Para verificar a versão instalada:</h3>
<code>tsc --version</code>

<h3>1.3. Compilando um arquivo TypeScript</h3>
<p>Salve o seguinte código em um arquivo <strong>exemplo.ts</strong>:</p>
<pre><code>let mensagem: string = "Olá, TypeScript!";
console.log(mensagem);</code></pre>

<h3>Para compilar e gerar um arquivo JavaScript:</h3>
<code>tsc exemplo.ts</code>
<p>Isso criará um arquivo <strong>exemplo.js</strong> que pode ser executado no Node.js ou em um navegador.</p>

<h3> Materiais de Ensino </h3>
   <h3> -> Lógica de Programação </h3>
      <p> -> Variáveis </p>
      <p> -> Controladores de Fluxo </p>
      <p> -> Funções </p>
      <p> -> Progamação orientada a Objeto (POO) </p>


<h2>---------------------------------COMANDOS GITHUB------------------------------------------</h2>
      
<h2>Estruturando o Projeto TypeScript</h2>

<h3>1. Criando o Repositório no GitHub</h3>
<p>Para criar o repositório no GitHub:</p>
<ol>
  <li>Acesse o GitHub e faça login na sua conta.</li>
  <li>Clique em <strong>New Repository</strong>.</li>
  <li>Nomeie o repositório como <strong>aula-typescript</strong>.</li>
  <li>Configure como público ou privado, conforme preferir.</li>
  <li>Não selecione nenhuma opção para inicializar com README, .gitignore ou licença.</li>
  <li>Clique em <strong>Create Repository</strong>.</li>
</ol>

<h3>2. Configurando o Git no Computador da FIAP</h3>
<p>Antes de começar, é necessário configurar seu usuário e e-mail no Git:</p>
<pre><code>git config --global user.name "Seu Nome"</code></pre>
<pre><code>git config --global user.email "seuemail@example.com"</code></pre>
<p>Em seguida, clone o repositório para a máquina local:</p>
<pre><code>git clone https://github.com/seu-usuario/aula-typescript.git</code></pre>

<h3>3. Criando a Estrutura de Diretórios no VSCode</h3>
<p>No VSCode, crie a estrutura de diretórios do projeto:</p>
<ol>
  <li>Clique com o botão direito na pasta do projeto e crie as pastas <strong>src</strong> e <strong>dist</strong>.</li>
</ol>

<h3>4. Inicializando o Projeto TypeScript</h3>
<p>Agora, inicialize o projeto TypeScript:</p>
<pre><code>npm init -y</code></pre>
<p>Instale o TypeScript localmente:</p>
<pre><code>npm install typescript --save-dev</code></pre>
<p>Crie o arquivo de configuração do TypeScript:</p>
<pre><code>npx tsc --init</code></pre>
<p>Edite o <strong>tsconfig.json</strong> com as seguintes opções:</p>
<pre><code>
{
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src",
    "target": "ES6",
    "module": "CommonJS"
  }
}
</code></pre>

<h3>5. Configurando o .gitignore</h3>
<p>Abra o arquivo <strong>.gitignore</strong> e adicione o seguinte conteúdo:</p>
<pre><code>node_modules/
dist/</code></pre>

<h3>6. Criando e Compilando o Arquivo TypeScript</h3>
<p>Crie o arquivo <strong>index.ts</strong> dentro da pasta <strong>src</strong> e adicione o código:</p>
<pre><code>let mensagem: string = "Olá, TypeScript!";
console.log(mensagem);</code></pre>
<p>Compile o TypeScript para JavaScript:</p>
<pre><code>npx tsc</code></pre>
<p>Isso criará o arquivo <strong>dist/index.js</strong>. Para executar o código, use:</p>
<pre><code>node dist/index.js</code></pre>
<p>A saída esperada será:</p>
<pre><code>Olá, TypeScript!</code></pre>

<h3>7. Enviando o Código para o GitHub</h3>
<p>Adicione os arquivos ao versionamento:</p>
<pre><code>git add .</code></pre>
<p>Criar o commit com a mensagem:</p>
<pre><code>git commit -m "Configuração inicial do projeto TypeScript"</code></pre>
<p>Envie para o GitHub:</p>
<pre><code>git push origin main</code></pre>
