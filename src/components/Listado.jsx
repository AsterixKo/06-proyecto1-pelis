import { useEffect, useState } from 'react';
import { GuardarEnStorage } from '../helpers/guardarEnStorage';
import { Editar } from './Editar';

export const Listado = ({ listadoState, setListadoState }) => {
  // const [listadoState, setListadoState] = useState([]);
  const [editar, setEditar] = useState(0);

  useEffect(() => {
    console.log('Componente del listado de peliculas cargado');
    conseguirPeliculas();
  }, []);

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem('pelis'));
    // console.log(peliculas);
    setListadoState(peliculas);
    return peliculas;
  };

  const borrarPeli = (id) => {
    // conseguir peliculas almacenadas
    let pelis_almacenadas = conseguirPeliculas();

    // filtrar esas peliculas para que elimine del array la que no quiero
    let nuevo_array_pelis = pelis_almacenadas.filter(
      (peli) => peli.id !== parseInt(id)
    );

    // Actualizar estado del listado
    setListadoState(nuevo_array_pelis);

    // actualizar los datos en el localstorage
    localStorage.setItem('pelis', JSON.stringify(nuevo_array_pelis));
  };

  return (
    <>
      {listadoState != null ? (
        listadoState.map((peli) => {
          return (
            <article key={peli.id} className="peli-item">
              <h3 className="title">{peli.titulo}</h3>
              <p className="desctiption">{peli.descripcion}</p>
              <button
                className="edit"
                onClick={() => {
                  setEditar(peli.id);
                }}
              >
                Editar
              </button>
              <button className="delete" onClick={() => borrarPeli(peli.id)}>
                Borrar
              </button>
              {/* aparece formulario de editar */}
              {editar === peli.id && (
                <Editar
                  peli={peli}
                  conseguirPeliculas={conseguirPeliculas}
                  setEditar={setEditar}
                  setListadoState={setListadoState}
                />
              )}
            </article>
          );
        })
      ) : (
        <h2>No hay peliculas para mostrar</h2>
      )}
    </>
  );
};
