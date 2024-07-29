import axios from 'axios';

// Configura la URL base de tu API
export const api = axios.create({
    baseURL: 'https://babckend-yf-3.onrender.com/api/v1/',
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
}