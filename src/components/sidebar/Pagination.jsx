import './Pagination.css'

export default function Pagination({page,setPage,isEnd,searchArticles}){
    const handlePrev = () => {
        setPage(page - 1)
        searchArticles(page-1)
    }
    
    const handleNext = () => {
        setPage(page + 1)
        searchArticles(page + 1)
    }

    return(
        <div className="pagination">
            <button onClick={handlePrev} disabled={page === 1}>◀ 이전</button>
            <span>{page}</span>
            <button onClick={handleNext} disabled={isEnd}>다음 ▶</button>
        </div>

    )
}