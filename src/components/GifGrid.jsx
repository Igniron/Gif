import React, {  } from 'react'
import useFetchGifs from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'


const GifGrid = ({categoria}) => 
{

    const {data:imagen, loading} = useFetchGifs(categoria);
   
    return (
        <>
            <h3>{categoria}</h3>

            {loading && <p>Cargando...</p>}

            <div className='card-grid'>
                
            
                {
                    imagen.map((img)=>
                    {
                        return <GifGridItem 
                            {...img}
                            key = {img.id}
                        />
                    })
                }
                
            </div>
        </>
        
    )
}

export default GifGrid