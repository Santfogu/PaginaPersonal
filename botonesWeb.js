import { useState } from "react";
import './detallePunto.css'


function MenuBotones() {

    const [detallado, setDetallado] = useState(false);

    const handleMouseOver = () => {
        setDetallado(true);
    };

    const handleMouseOut = () => {
        setDetallado(false);
    };

    

    return (
        <div className={`card tarjeta ${detallado ? 'detallado' : ''}`}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}>
            
            <div className="row">
              <div className="col-md-6">
              <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                <img src={props.imagen} alt="Imagen" className="imagen-tarjeta" />
                </button>
                
                
              </div>
              </div>
              <div className="col-md-6">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                <img src={props.imagen} alt="Imagen" className="imagen-tarjeta" />
                </button>
              </div>
            </div>
   
        </div>
    );
}

export default MenuBotones;
