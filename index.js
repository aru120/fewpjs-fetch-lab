function fetchBooks() {

}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})

fetch('https://anapioficeandfire.com/api/books')
.then(resp => resp.json())
.then(data => {
    console.log(data)
    debugger
    renderBooks(data)
    fifthBook(data[4]["name"])    
  })

  const fifthBook = book => {
    const main = document.querySelector('main')
    const h4 = document.createElement('h4')
    h4.textContent = `Fifth Book: ${book}`
    
    main.appendChild(h4)
  }
