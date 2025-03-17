let mensagem: string = "Olá, TypeScript!";
console.log(mensagem);

//Exemplo de Declaração de Variáveis com Tipos
let nome: string = "Maria";
let idade: number = 30;
let ativo: boolean = true;

// Arrays e Tuplas
let notas: number[] = [8, 9, 10];
notas.push(7); // Adiciona um novo elemento (7) ao array
console.log(notas[0]); // Saída: 8 (acesso pelo índice)

// Enum
enum Status {
    Pendente,
    EmAndamento,
    Concluido
}
let tarefa: Status = Status.EmAndamento;

/*Acessando os Valores Numéricos Por padrão, os valores do enum são indexados automaticamente a partir de 0. Podemos acessar os índices assim:*/

console.log(Status.Pendente);     // Saída: 0
console.log(Status.EmAndamento);  // Saída: 1
console.log(Status.Concluido);    // Saída: 2
Caso prefira, é possível definir manualmente os valores numéricos:
enum Status {
    Pendente = 1,
    EmAndamento = 2,
    Concluido = 3
}

//Funções em TypeScript
//Tipagem em Funções
function soma(a: number, b: number): number {
    return a + b;
}
console.log(soma(5, 3)); // Saída: 8

//Parâmetros Opcionais e Padrão
function saudacao(nome: string, idade?: number): string {
    return idade ? `Olá, ${nome}, você tem ${idade} anos!` : `Olá, ${nome}!`;
}
console.log(saudacao("Maria")); // Saída: "Olá, Maria!"
console.log(saudacao("João", 25)); // Saída: "Olá, João, você tem 25 anos!"

//Orientação a Objetos
//Criando Classes
class Pessoa {
    nome: string;
    idade: number;
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar(): string {
        return `Meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}
const pessoa1 = new Pessoa("Kayky", 20);
console.log(pessoa1.apresentar()); // Saída: "Meu nome é Carlos e tenho 40 anos."

//--- Modificadores de Acesso
//--- public → Acessível de qualquer lugar (padrão se não especificado).
//--- private → Acessível somente dentro da própria classe.
//--- protected → Acessível dentro da classe e de suas subclasses (herança).

//5. Tudo configurado, vamos fazer exercícios!
//----Exercício 1 - Tipagem e Arrays-----
//Crie um array de números e imprima a soma dos valores.
let valores: number[] = [10, 20, 30];
let somaValores: number = valores.reduce((acc, val) => acc + val, 0);
console.log("Soma dos valores:", somaValores);


//-----Exercício 2 - Função Tipada------
//Crie uma função que recebe um nome e retorna uma mensagem personalizada.
function mensagemPersonalizada(nome: string): string {
    return `Olá, ${nome}! Bem-vindo ao TypeScript.`;
}
console.log(mensagemPersonalizada("Ana"));


//------Exercício 3 - Classe e Instância-------
//Crie uma classe Carro com atributos marca, modelo e ano. Instancie um objeto e exiba suas informações.
class Carro {
    constructor(public marca: string, public modelo: string, public ano: number) {}
    detalhes(): string {
        return `${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
}
const carro1 = new Carro("Toyota", "Corolla", 2022);
console.log(carro1.detalhes());

