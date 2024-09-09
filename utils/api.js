import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ocec7olka5.execute-api.af-south-1.amazonaws.com/dev',
});

export const testRegister = (data) => api.post('/testRegister', data);
