import axios from "axios";

const apiData = axios.create({
    baseURL: 'http://167.71.110.83:8000/accounts/api/token/'
})

export const getFiles = () => axios.get('https://jsonplaceholder.typicode.com/todos/1')

export const LogIn = (data) =>apiData.post('/', data)