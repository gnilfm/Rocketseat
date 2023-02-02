/*
    Buscando e contando dados em Arrays

    baseado no array de livros para categoria abaixo, faça os seguintes desafios

    *contar o numero de categoria e o numero de livros para em cada categoria
    *contar o numero de autores 
    *Mostrar livros do autor Augusto Cury
    *transformar a funcão acima em uma funcao que ira receber o nome do autor e devolver os livros desse autor

 */
const booksByCategory = [
    {        
        category: "Riqueza",
        boocks: [
            {
                title: "Os segredos da mente milhionária",
                author: "T. Harv Eker",                
            },
            {
                title: "O homem mais rico da babilonia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            }
        ],
    },
    {
        category: "Inteligencia emocional",
        boocks: [
            {
                title: "Voce é insubstituivel",
                author: "Augusto Cury",                
            },
            {
                title: "Ansiedade - como enfrentar o mal do seculo",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 habitos de pessoas altamente eficases",
                author: "Stephen R. Covey",
            }
        ],
    },
];

const totalCategorias = booksByCategory.length

console.log(totalCategorias)
for(let category of booksByCategory){
    console.log('Total de livros da categoria: ', category.category)
    console.log(category.boocks.length)
}

function contAuthors() {
    let authors = [];
    for(let category of booksByCategory){
        for(let book of category.boocks){
            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }
    console.log("Total de autores: ", authors.length)
}
contAuthors();

function boocksOfAutor(author) {
    let books = [];
    for(let category of booksByCategory){
        for(let book of category.boocks){
            if(book.author === author) {
                books.push(book.title)
            }
        }
    }
    console.log(`Livros do autor ${author}: ${books.join(", ")} `)
}
boocksOfAutor('George S. Clason');