import axios from 'axios';

// Configura la URL base de tu API
export const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1/',
});

// Función para obtener la lista de carriers
export const getCarriers = async () => {
    try {
        const response = await api.get('carriers/');
        return response.data; // Accede a la propiedad 'data' que contiene el array
    } catch (error) {
        console.error('Error fetching carriers:', error);
        throw error;
    }
};