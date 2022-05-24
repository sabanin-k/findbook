import { FC, useEffect, useState } from "react";
import { Book } from "./api/types";
import { useGetBooksByParamsQuery } from "./store/booksAPI";

const App: FC = () => {
  const [category, setCategory] = useState('all')
  const [sortingBy, setSorting] = useState('relevance')
  const [searchingValue, setSearchingValue] = useState('')
  const [startIndex, setStartIndex] = useState(0)
  const [books, setBooks] = useState([])

  const {data} = useGetBooksByParamsQuery({category, sortingBy, value: searchingValue, startIndex})
  useEffect(() => {
    if(data) {
      setBooks(data.items)
    }
  }, [data])

  const handleLoadMore = () => {
    // TODO add load more logic
    setStartIndex(30)
  }

  return (
    <div>
      <h1>Findbook!</h1>
      <input type="text" value={searchingValue} onChange={(e) => setSearchingValue(e.target.value)} />
      <select value={category} onChange={(e) => {setCategory(e.target.value)}} >
        <option value="all">all</option>
        <option value="art">art</option>
        <option value="biography">biography</option>
        <option value="computers">computers</option>
        <option value="history">history</option>
        <option value="medical">medical</option>
        <option value="poetry">poetry</option>
      </select>
      <select value={sortingBy} onChange={(e) => setSorting(e.target.value)}>
        <option value="relevance">relevance</option>
        <option value="newest">newest</option>
      </select>
      <h2>Books:</h2>
      {books.length
        ? books.map((book: Book) => {
          return <div key={book.id}>
            {book.volumeInfo.title}
          </div>
        })
      : <p>Ничего нет</p>}
      <button onClick={handleLoadMore}>Загрузть еще</button>
    </div>
  );
}

export default App;
