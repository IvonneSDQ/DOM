/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

// console.log('Happy hacking :) -----' )
//const url ="https://platzi-avo.vercel.app/api/avo";
const urlBase = "https://platzi-avo.vercel.app";

const appNode = document.querySelector('#app');

const formatoPrecio =(precio)=>{
    //vamos a utilizar la API internalizacion
    //para usarla esa se encuentra dentro de
    const nuevoPrecio =new window.Intl.NumberFormat("en-EN",{

        //los locates se trata del pais 
    //donde se encuentra nuestro usuario
    //segundo parametro como opciones quiero que tenga un estilo
    //tipo moneda y la moneda es dolares
    style:"currency",
    currency:"USD",//GBP libras esterlinas
    }).format(precio)//instancio y le doy formato al nuevo precio
    //
    return nuevoPrecio;
};

//tenemos una API llamada Intl
//1 da formatos a fechas
//2 da formato a monedas

// vamos a utilizar un web api llamada fech
//fech la utilizamos para traer recursos desde cualquier sitio web
//lo unico que debemos pasarle es la URL
// es decir le digo traeme esta url

//para eso debemos conectarnos al servidor


//window.fetch(url) // el fech es algo q me devuelve una promesa 

window.fetch(`${urlBase}/api/avo`) //template literal
//promesa es un objeto devuelto Código a realizar cuando se cumpla la promesa
//esta promesa me va a recibir una respuesta
//despues procesar la respuesta y convertirla en JSON
.then(respuesta => respuesta.json())
//teniendo en json ya tenemos data que vamos a utilizar 
//para renderizar en el browser
.then((respuestaJson)=>{
   
   //----
   const todosLosItems = [];

    // console.log(respuestaJson);
   respuestaJson.data.forEach((item)=>{
   

      // console.log(item.name);

      //crear imagen
      const imagen = document.createElement("img");
      //vamos a agregar en el dom
      //document.body.appendChild(imagen);

      //cual es la url de la imagen
      //eso es xq me esta dando rutas relativas
      //para hacerle absoluta debemos tomar la url del sitio
      //y agregar la relativa para verla 
      imagen.src = `${urlBase}${item.image}`;

      //crear titulo
      const titulo = document.createElement("h2");
      //vamos a agregar en el dom
      //document.body.appendChild(titulo);

      titulo.textContent = item.name;

      //poniendo estilos
      //titulo.style = 'font-size: 2rem';
      //si lo podemos utilizar como objeto
      //titulo.style.fontSize="3rem";

      //hacerlo por medio de clases
      titulo.className = "text-2xl text-red-900";


      //crear precio
      const precio = document.createElement("div");
      //vamos a agregar en el dom
      //document.body.appendChild(precio);


      precio.textContent = formatoPrecio(item.price);


      //ahora vamos a decir q para q no esten por ahi tirados
      //nos creamos un div
      const contenedor = document.createElement("div");
    //   contenedor.appendChild(imagen);
    //   contenedor.appendChild(titulo);
    //   contenedor.appendChild(precio);
      //pero como vimos en lugar de hacer 3 operaciones 
      //deberia hacer solo una

      contenedor.append(imagen,titulo,precio);
      
      //document.body.appendChild(contenedor);
      //----- pero como vimos en lugar de ir uno por uno
      //hacemos un array

      todosLosItems.push(contenedor);




   });
  // document.body.append(...todosLosItems);//todo el resultado que haya
    appNode.append(...todosLosItems);

});

//si queremos mejorar este codigo podemos utilizar en lugar de promesa
//async/await eso es su tarea

//como ya tenemos control de todos los items y su informacion
//vamos a crear nodos a partir de esta informacion
//y renderizarlo en mi html



