export const cambiarColorFondo = () => {
    const colores = ["red", "blue", "green", "yellow", "purple", "orange", "pink"];

    const indiceAleatorio = Math.floor(Math.random() * colores.length);

    document.body.style.backgroundColor = colores[indiceAleatorio];
};