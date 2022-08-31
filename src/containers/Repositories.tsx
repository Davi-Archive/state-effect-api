import React, {useEffect, useState} from 'react';
import '../App.scss'
import Item from '../components/Item';

import { listRepositories } from '../api/github'


function Repositories(){
  const [data, setData] = useState([]);

  useEffect(() => {
    listRepositories()
    .then(( data:any )=>{
      setData(data)
    })
  }
  ,[])
  return(
    <ul>
      {data.map((item:any) => <Item key={item?.id} {...item} /> )}
    </ul>
)
}


/* class Repositories extends Component{
  constructor(props){
    super(props);

    this.state = {
      data: []
    }
  }

  componentDidMount(){
   listRepositories()
    .then(( data )=>{
      this.setState({data})
    })
  }

  render(){
    const { data } = this.state

  }
} */


export default Repositories;