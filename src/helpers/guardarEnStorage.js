export const GuardarEnStorage = (clave, elemento) => {
  // Conseguir los elementos que ya tenemos en el localstorage
  let elementos = JSON.parse(localStorage.getItem(clave));

  // Comprobar si hay un array
  if (Array.isArray(elementos)) {
    // Añadir un elemento nuevo
    elementos.push(elemento);
  } else {
    // crear un array con el nuevo elemento
    elementos = [elemento];
  }

  // Guardar en el locastorage
  localStorage.setItem(clave, JSON.stringify(elementos));

  // Devolver el objeto
  return elemento;
};
