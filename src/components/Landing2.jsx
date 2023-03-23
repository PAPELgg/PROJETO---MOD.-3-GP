import React from 'react'
import "./Landing2.css"
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';

const Landing2 = () => {
  return (
    <div className='land'>
        <div className='lading2Text'>
            <h2>Seja um condutor de boa qualidade</h2>
            <span>
                Está na hora de garantir seu lugar como condutor também!<br></br>
                Já realizou sua matricula? clique em comprar para mais detalhes.
            </span>
            <Link to={"/produtos"} className='btn2'><button className='btn22'>Compre</button></Link>
        </div>
    </div>
  )
}

export default Landing2