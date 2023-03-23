import React from 'react'
import "./Landing01.css"
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';

const Landing01 = () => {
  return (
    <div className='cont'>

        <div className='fotoConheca'></div>

        <div className='textConheca'>

            <h2 className='h2Pc'>
              Conheça mais sobre nossa Auto Escola
            </h2>
            
            <h2 className='h2Cel'>
              Conheça mais sobre nossa Auto Escola
            </h2>

            <span>Possuímos frota com carros novos, motos, ônibus e simuladores. </span><br></br>
            <span>A Autoescola Badawin tem mais de 2 anos no mercado formando condutores. Possui uma frota de veículos novos com ar condicionado, sala de aula climatizada e informatizada, simuladores próprios.</span><br></br>
            
            <Link to={"/planos"} className='btn1'><button className='btn11'>Conheça</button></Link>
        </div>

    </div>
  )
}

export default Landing01