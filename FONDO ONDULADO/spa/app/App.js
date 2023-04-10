import api from "./helpers/wp_api.js";
import {ajax} from "./helpers/ajax.JS"

export function App(){

 document.getElementById("root").innerHTML = `<h1>Bienvenidos a mi primer SPA con Vanilla JS</h1>`;

 console.log(api);
 ajax({
   url:api.POSTS,
   cbSucces:(posts) =>{
    console.log(posts);
   }
 
 });
 ajax({
   url:api.CATEGORIES,
   cbSucces:(categories)=>console.log(categories)
 })
}
