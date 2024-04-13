import { apiClient } from './apiClient';

export const fetchStocks = async () => {
  try {
    const response = await apiClient.get('bde7230e-bc91-43bc-901d-c79d008bddc8');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching stock');
  }
};