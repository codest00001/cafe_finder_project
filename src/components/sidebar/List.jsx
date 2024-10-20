import { CafeContext } from '../Finder';  // 올바른 import 경로로 수정
import { useContext } from "react"
import './List.css'

export default function List({articles}){

    const {setSelected} = useContext(CafeContext);

    return(
        <div className='article-list'>
            {articles.map((article)=>{
                return(
                    <div key={article.index} className="article-item" onClick={()=>setSelected(article)}>
                        <img src={article.thumbnail} alt={`${article.title}의 썸네일`}/>
                        <div className="article-info">
                            <h2>제목 : <span dangerouslySetInnerHTML={{__html: article.title}}/></h2>
                            <h3>카페 : <span dangerouslySetInnerHTML={{__html: article.cafename}}/></h3>
                            <p> 내용 : <span dangerouslySetInnerHTML={{__html: article.contents}}/></p>
                        
                        </div>
                    </div>
                )
            })

            }
        </div>
    )
}