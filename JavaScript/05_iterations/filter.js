//filter

const myArr = [1, 2, 3, 4, 5 ,6 ,7 ,8 ,9 ,10]

const newArr = myArr.filter( (val) => val > 5 )

// const newArr = myArr.filter( (val) => {
//     return val>5
// } )

// const newNums = [];
// const newArr = myArr.forEach( (val) => {
//     if(val > 5){
//         newNums.push(val)
//     }
// } )

console.log(newArr);

const books = [
  {
    title: "Book One",
    genre: "Fiction",
    publish: 1981,
    edition: 2004
  },
  {
    title: "Book Two",
    genre: "Non-Fiction",
    publish: 1992,
    edition: 2008
  },
  {
    title: "Book Three",
    genre: "History",
    publish: 1999,
    edition: 2007
  },
  {
    title: "Book Four",
    genre: "Non-Fiction",
    publish: 1989,
    edition: 2010
  },
  {
    title: "Book Five",
    genre: "Science",
    publish: 2009,
    edition: 2014
  },
  {
    title: "Book Six",
    genre: "Fiction",
    publish: 1987,
    edition: 2010
  },
  {
    title: "Book Seven",
    genre: "History",
    publish: 1986,
    edition: 1996
  },
  {
    title: "Book Eight",
    genre: "Science",
    publish: 2011,
    edition: 2016
  },
  {
    title: "Book Nine",
    genre: "Biography",
    publish: 2003,
    edition: 2012
  },
  {
    title: "Book Ten",
    genre: "Fantasy",
    publish: 2015,
    edition: 2020
  }
];

// const filterBook = books.filter( (val) => val.genre === "Fiction" )
// const filterBook = books.filter( (val) => val.publish > 1998 )
// const filterBook = books.filter( (val) => val.title == "Book Nine" )
const filterBook = books.filter( (val) => val.publish > 2010 && val.genre == "Science")
console.log(filterBook);
