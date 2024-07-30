import { useState } from 'react';
import { GuardarEnStorage } from '../helpers/guardarEnStorage';

export const Crear = ({ setListadoState }) => {
  const tituloComponente = 'Añadir pelicula';
  const [peliState, setPeliState] = useState({ titulo: '', descripcion: '' });
  const { titulo, descripcion } = peliState;

  const conseguirDatosForm = (e) => {
    e.preventDefault();

    // conseguir datos del formulario
    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;

    // alert(`${titulo} - ${descripcion}`);

    // crear objeto de la pelicula a guardar

    let peli = {
      id: new Date().getTime(),
      titulo,
      descripcion,
    };
    setPeliState(peli);

    // Actualizar el estado del listado principal
    setListadoState((elementos) => {
      return [...elementos, peli];
    });

    // guardar en localstorage
    GuardarEnStorage('pelis', peli);
  };

  return (
    <div className="add">
      <h3 className="title">{tituloComponente}</h3>

      <strong>
        {titulo && descripcion && 'has creado la pelicula: ' + titulo}
      </strong>

      <form onSubmit={conseguirDatosForm}>
        <input type="text" id="titulo" name="titulo" placeholder="Titulo" />
        <textarea
          id="descripcion"
          name="descripcion"
          placeholder="Description"
        ></textarea>
        <input type="submit" value="Guardar" />
      </form>
    </div>
  );
};
