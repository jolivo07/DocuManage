// src/infrastructure/api/apiClient.js
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_BASE_URL;


// Configuración base de Axios
const apiClient = axios.create({
  baseURL: apiUrl, // URL base de la API
  timeout: 10000, // Tiempo de espera (10 segundos)
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para agregar el token de autenticación a las solicitudes
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Obtener el token del almacenamiento local
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para manejar respuestas de la API
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Manejar error de autenticación (por ejemplo, redirigir a la página de login)
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default apiClient;
