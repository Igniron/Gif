


export const buscarGif = async(categoria)=>
    {
       const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}}&limit=10&api_key=oVky4MehAX7Fn24TZy0JWOsgGGlyYn7X`
       const peticion = await fetch(url);
       const {data} = await peticion.json();

       const gifs = data.map(img =>
        {
            return{
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url,
            }
        });
        return gifs;
    }