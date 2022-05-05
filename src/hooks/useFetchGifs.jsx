import { useEffect, useState } from "react"
import { buscarGif } from "../helpers/getGifs";


const useFetchGifs = (categoria) => 
{
  const [carga, setCarga] = useState({
        data : [],
        loading : true,
    });

    useEffect(()=>
    {
        buscarGif(categoria)
        .then ((i)=>
        {
        
            setCarga({
                data : i,
                loading : false,
            });
                
        });
    }, [categoria]);



    return carga;
}

export default useFetchGifs