import Axios from 'axios';

export const ordersInstance = Axios.create({
    baseURL: 'https://burger-builder-9fc7d.firebaseio.com/'
})