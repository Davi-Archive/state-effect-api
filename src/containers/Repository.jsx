import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getRepository } from '../api/github';

export default function Repository(){
    const { owner, name } = useParams();
    const [repository, setRepository] = useState({});

    let navigate = useNavigate();
    console.log(navigate);

    useEffect(() => {
        getRepository(owner, name)
        .then(({data})=> setRepository(data));
    })

    /* useEffect(()=> console.log('toaqui'), [repository]); */


    return (
        <div>
            <button onClick={()=>navigate('/')}>Voltar</button>
            <Link to='/'>voltar</Link>
            <h1>{repository.name}</h1>
        </div>
    )
}