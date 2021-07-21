import React, {Fragment, useState, useEffect} from 'react';
import Pregunta from './components/Pregunta/pregunta';
import Formulario from './components/Formulario/formulario';
import Listado from './components/Listado/listado';
import ControlPresupuesto from './components/ControlPresupuesto/controlPresupuesto';

function App() {

  //  Definir States
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostarpregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState([]);
  const [creargasto, guardarCrearGasto] = useState(false);

  // UseEffect que actualiza el restante
  useEffect(() => {
    if(creargasto) {

      // agrega el nuevo presupuesto
      guardarGastos([ ...gastos, gasto ])

      // Resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);

      // REsetear a false
      guardarCrearGasto(false);
    }
  }, [gasto, creargasto, gastos, restante]);

  return (
    <Fragment>
      <div className="container">
        <header className="">
          <h1>Gasto Semanal</h1>

          <div className="contenido-principal contenido">
            {mostarpregunta ? (
                <Pregunta
                  guardarPresupuesto={guardarPresupuesto}
                  guardarRestante={guardarRestante}
                  actualizarPregunta={actualizarPregunta}
                />
              ) : (
                <div className="row">
                  <div className="one-half column">
                    <Formulario
                      guardarGasto={guardarGasto}
                      guardarCrearGasto={guardarCrearGasto}
                    />             
                  </div>

                  <div className="one-half column">
                    <Listado gastos={gastos} />        

                    <ControlPresupuesto
                      presupuesto={presupuesto}
                      restante={restante}
                    />      
                  </div>
                </div>
              )
            }
            

            
          </div>
        </header>
      </div>
    </Fragment>
  );
}
export default App;
