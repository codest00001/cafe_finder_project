import Header from './Header';
import Footer from './Footer';
import SearchArea from './sidebar/SearchArea';
import React, { createContext, useState } from "react";
import Detail from './Detail';



const CafeContext = createContext();

function Finder(){

    const [selected, setSelected] = useState(null);

    return(
        <CafeContext.Provider value={{selected, setSelected}} >        
        <div className="App">
            <Header></Header>  
            <div className="main-content">
                <SearchArea></SearchArea> 
                <Detail article={selected}></Detail>
            </div>             
            <Footer></Footer>    
        </div>
    </CafeContext.Provider>

    )
}

export {CafeContext, Finder} ;