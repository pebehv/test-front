import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataFetchingComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Función para obtener datos
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setData(response.data); // Establecer los datos en el estado
      } catch (err) {
        setError('Error al obtener los datos');
      } finally {
        setLoading(false); // Cambiar el estado de carga
      }
    };

    fetchData(); // Llamar a la función
  }, []); // El array vacío asegura que se ejecute solo una vez al montar el componente

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Publicaciones</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetchingComponent;