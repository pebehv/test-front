// src/axiosConfig.js
import axios from 'axios';

// Crear una instancia de Axios
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api/', // Cambia esto por la URL base de tu API
  timeout: 10000, // Tiempo máximo de espera en milisegundos
  headers: {
    'Content-Type': 'application/json',
    // Puedes agregar más encabezados globales aquí
  },
});

// Interceptor de solicitudes
axiosInstance.interceptors.request.use(
  config => {
    // Aquí puedes agregar lógica antes de enviar la solicitud
    // Por ejemplo, agregar un token de autenticación
    const token = localStorage.getItem('token'); // Ejemplo de cómo obtener un token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    // Manejo de errores
    return Promise.reject(error);
  }
);

// Interceptor de respuestas
axiosInstance.interceptors.response.use(
  response => {
    // Aquí puedes manipular la respuesta si es necesario
    return response;
  },
  error => {
    // Manejo de errores de la respuesta
    return Promise.reject(error);
  }
);

export default axiosInstance;