import React, {useState, useEffect, createContext} from 'react'
import axios from 'axios';

const NoticiasContext = createContext()

const NoticiasProvider = ({children}) => {

    const [categoria, setCategoria] = useState('general');
    const [noticias, setNoticias] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [totalNoticias, setTotalNoticias] = useState(0);

    useEffect(() => {
      const consultarApi = async ()=>{
        const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
        const {data} = await axios.get(url)
        //console.log(data)

        setNoticias(data.articles)
        setTotalNoticias(data.totalResults)
        setPagina(1)
      }
      consultarApi()
    }, [categoria]);

    useEffect(() => {
      const consultarApi = async ()=>{
        const url = `https://newsapi.org/v2/top-headlines?country=mx&page=${pagina}&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
        const {data} = await axios.get(url)
        //console.log(data)

        setNoticias(data.articles)
        setTotalNoticias(data.totalResults)
      }
      consultarApi()
    }, [pagina]);

    const handlChangeCategoria = (e)=>{
      setCategoria(e.target.value)
      //console.log(e.target.value)
    }

    const handleChangePagina = (e, valor)=>{
      setPagina(valor)
      //console.log(valor)
    }

  return (
    <NoticiasContext.Provider
        value={{
            categoria,
            handlChangeCategoria,
            noticias,
            totalNoticias,
            handleChangePagina,
            pagina
        }}
    >
      {children}
    </NoticiasContext.Provider>
  )
}

export{
    NoticiasProvider
}

export default NoticiasContext
