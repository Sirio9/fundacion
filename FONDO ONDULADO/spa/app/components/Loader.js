export function Loader(){

    const $loader = document.createElement("img");
    $loader.src ="../app/assets/hourglass.gif";
    $loader.alt="Cargando...";
    $loader.classList.add("loader");
    return $loader;
}