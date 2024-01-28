import React from 'react';
import '../styles/Card.module.css';

const Card = () => {
 
  return (
    <section className="card">
        <div className='title'>
            <h5>Desarrollo</h5>
        </div>
        <div className='text' >
            <p>
                Desarrollo web, diseño de páginas web, diseño de         aplicaciones web, diseño de aplicaciones
                móviles, diseño de aplicaciones móviles, diseño de aplicaciones móviles, diseño de aplicaciones
            </p>
      </div>
      <div className='button'>
            <button>Ver más</button>
      </div>
    </section>
  );
};

export default Card;
