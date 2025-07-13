const express = require('express')
const books = require('./data/books.json');
const app = express() //crea mi servidor
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//ejercicio 1
app.get('/all', (req, res) => {
  res.status(200).json(books);
});

//ejercicio 2
app.get('/first', (req, res) => {
  res.status(200).json(books[0]);
});

//ejercicio 3
app.get('/last', (req, res) => {
  res.status(200).json(books[books.length - 1]);
});

//ejercicio 4
app.get('/middle', (req, res) => {
  res.status(200).json(books[50]);
});

//ejercicio 5
app.get('/author/dante-alighieri', (req, res) => {
  const danteLibros = books.filter(
    book => book.author === "Dante Alighieri")
  res.status(200).json(danteLibros[0].title)
});

//ejercicio 6
app.get('/country/charles-dickens', (req, res) => {
  const paisLibro = books.filter(
    book => book.author === "Charles Dickens")
  res.status(200).json(paisLibro[0].country)
});

//ejercicio 7
app.get('/year&pages/cervantes', (req, res) => {
  const cervantesLibro = books.filter(
    book => book.author === "Miguel de Cervantes")

  const yearBook = cervantesLibro[0].year
  const pagesBook = cervantesLibro[0].pages

  res.status(200).json(paginasYaño = {pages: pagesBook, year: yearBook})
});

//ejercicio 8
app.get('/country/count/spain', (req, res) => {
  const españaLibros = books.filter(
    book => book.country === "Spain")
  res.status(200).json(españaLibros.length)
});

//ejercicio 9
app.get('/country/at-least/germany', (req, res) => {
  alemaniaLibros = books.filter(
    book => book.country === "Germany")
if (alemaniaLibros.length > 0) {
  res.status(200).json(true)
}
else {
  res.status(404).json(false)
}
});

//ejercicio 10
app.get('/pages/all-greater/200', (req, res) => {
allBooks = books.filter(
  book => book.pages > 200)
  if(books.length === allBooks.length){
    res.status(200).json(true)
  }
  else{
    res.status(404).json(false)
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


