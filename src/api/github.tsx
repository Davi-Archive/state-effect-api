import axios from 'axios';

export const listRepositories = () => axios
.get('https://api.github.com/repositories')
.then(( {data} )=> data)

export const getRepository = (owner:any , name:any) =>  axios
.get(`https://api.github.com/repos/${owner}/${name}`)