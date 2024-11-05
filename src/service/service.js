import React from 'react';
//import React, { useEffect, useState } from 'react';
//import axios from 'axios';
//import axios from '../axiosConfig';

const MiComponente = () => {
  /*const [data] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData =  () => {
      try {
        const response =  axios.post('auth/register'); // Cambia la URL por la API que necesites
        console.log('response', response)

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Datos Cargados</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li> // Asegúrate de modificar la propiedad según tu API
        ))}
      </ul>
    </div>
  );*/
  return (
    <div>
      <h2>Datos Cargados</h2>
 
    </div>
  );
};

export default MiComponente;