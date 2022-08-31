import React from "react";
import { Link } from 'react-router-dom'



interface ItemInterface {
    id: number,
    name: string,
    full_name: string,
    owner: LoginP,
}
interface LoginP {
    login: string,
}

const Item = ({ id, name, full_name, owner: { login } }: ItemInterface) => (
    <li key={id}><Link to={`/repos/${login}/${name}/`} >{full_name}</Link></li>
)

export default Item
