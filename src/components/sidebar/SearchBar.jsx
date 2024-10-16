import './SearchBar.css'

export default function SearchBar({query, setQuery, searchArticles}){
    const handleSearch = (e)=>{
        e.preventDefault();
        searchArticles();
    }
    
    return(
  <form className='search-bar' onSubmit={handleSearch}>
    <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="검색어를 입력해봐요"></input>
    <button type = 'submit'>검색 💨</button>
  </form>
    )
}