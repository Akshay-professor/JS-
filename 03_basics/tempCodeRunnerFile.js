console.log(newNums);
const books = [
    { title: 'book one', genre: 'fiction', publish: 1981, edition: 2004},
    { title: 'book two', genre: 'non-fiction', publish: 1982, edition: 2005},
    { title: 'book three', genre: 'history', publish: 1984, edition: 2006},
    { title: 'book four', genre: 'science', publish: 1983, edition: 2007},
    { title: 'book five', genre: 'geography', publish: 1987, edition: 2008},
    { title: 'book six', genre: 'science', publish: 1989, edition: 2009},
    { title: 'book seven', genre: 'fiction', publish: 1988, edition: 2001},
    { title: 'book eight', genre: 'history', publish: 1984, edition: 2002},
    { title: 'book nine', genre: 'non-fiction', publish: 1984, edition: 2003},
    { title: 'book ten', genre: 'geography', publish: 1980, edition: 2004},
    { title: 'book eleven', genre: 'science', publish: 1980, edition: 2002},
    { title: 'book tweleve', genre: 'fiction', publish: 1981, edition: 2009},
];

let userbooks = books.filter( (bk)=> bk.genre === 'history' );
      userbooks = books.filter( (bk)=> bk.publish >= 2000 );

console.log(userbooks);
