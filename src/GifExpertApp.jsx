import React, {useState} from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = ()=>
{

    const [categorias, setCategorias] = useState(['']);

    // const agregarElemento = ()=>
    // {
    //     setCategorias([...categorias, 'Unicornios']); //operador spread es la mejor opcion para agregar elementos a un array
    //     // setCategorias (c => [...c, 'Unicornios']); // otra manera de agregar un elemento
    // }

    return(
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategorias={setCategorias}/>
            <hr />
        
            <ol>
                {
                    categorias.map((categoria)=>
                        {
                          return <GifGrid 
                                categoria = {categoria}
                                key = {categoria} 
                            />
                        })
                }
            </ol>
        </>
    )
}

export default GifExpertApp;