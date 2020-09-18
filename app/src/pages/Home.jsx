import React, { useState } from 'react';
import Content from '../components/Content-component';

import swal from 'sweetalert';

import CheckpointController from '../controllers/checkpoint-controller';

function Home() {
  const [name, setName] = useState('');

  function register(evt) {
    evt.preventDefault();

    if (!name.trim()) {
      swal("Atenção", "Informe seu nome para registro do ponto!", "warning");
    }
    CheckpointController.save(name)
      .then(ret => {
        swal("Sucesso", "Ponto Registrado!", "success");
        setName('');
      })
      .catch(err => {
        swal("Ops!", "Algo de errado ocorreu impossibilitando o registro!", "error");
        console.log(err);
        setName('');
      });
  }

  return (
    <Content>
      <div className="d-flex flex-column justify-content-center align-items-center">

        <div className="row">
          <div className="col">

            <div className="card w-100 shadow p-4">
              <div className="card-body">
                <h5 className="card-title">Registrar</h5>

                <form onSubmit={register}>
                  <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control mb-3" aria-label="" autoFocus placeholder="Informe seu nome"/>
                  <button type="submit" className="btn btn-outline-primary float-right btn-lg">Registrar</button>
                </form>

              </div>
            </div>

          </div>
        </div>

      </div>
    </Content>
  );
}

export default Home;