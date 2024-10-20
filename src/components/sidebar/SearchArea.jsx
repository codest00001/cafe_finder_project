import React from "react";
import { useState } from "react";
import SearchBar from "./SearchBar";
import List from "./List";
import Pagination from "./Pagination";
import axios from "axios";
import './SearchArea.css'

export default function SearchArea(){

    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const [articles, setArticles] = useState([]);
    const [isEnd, setIsEnd] = useState(true);

    const findArticles = async(newPage) => {
        const response = await axios.get(`https://dapi.kakao.com/v2/search/cafe`,
            {
             headers:{
                Authorization: 'KakaoAK 카카오 개인 웹키',
            },
            params:{
                query:query,
                page:newPage,
                size:10,
            }
            } 
        );

        const data = response.data;

        setArticles(data.documents);
        setIsEnd(data.meta.is_end);

        
        console.log(articles);
    }

    return(
        <div className='search-area'>
            <SearchBar query={query} setQuery={setQuery} searchArticles={()=>{setPage(1); findArticles(1)}}></SearchBar>
            <List articles={articles}></List>
            <Pagination page={page} setPage={setPage} searchArticles={findArticles} isEnd={isEnd}></Pagination>
        </div>

        


    )
}