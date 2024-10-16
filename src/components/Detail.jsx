import './Detail.css'

export default function Detail({article}){
    if(!article){
        return <div className="article-detail">글을 디테일하게 보여드리는 곳입니닷✨</div>
    }

    return(
        <div className="article-detail">
            <img src={article.thumbnail}></img>
            <h2>제목: <span dangerouslySetInnerHTML={{__html: article.title}}/></h2>
            <h3> 카페: <span dangerouslySetInnerHTML={{__html: article.cafename}}/></h3>
            <p> 내용: <span dangerouslySetInnerHTML={{__html: article.contents}}/></p>
        </div>
    )
}