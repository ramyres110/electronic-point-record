import React, { useEffect, useState } from 'react';
import Content from '../components/Content-component';

import CheckpointController from '../controllers/checkpoint-controller';

function Checkpoint() {
  const [list, setList] = useState([]);
  const [query, setQuery] = useState('');

  function getAll() {
    CheckpointController.getAll().then(data => setList(data));
  }

  function search(evt) {
    evt.preventDefault();
    if (!query) {
      return getAll();
    }
    CheckpointController.getByName(query).then(data => setList(data));
  }

  useEffect(() => {
    getAll();
  }, []);

  useEffect(() => { }, [list]);

  return (
    <Content>
      <div className="row">
        <div className="col">

          <form className="form-inline mb-3" onSubmit={search}>
            <input value={query} onChange={(e) => setQuery(e.target.value)} className="form-control mr-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>

        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Tipo</th>
              <th scope="col">Registrado Em</th>
            </tr>
          </thead>
          <tbody>
            {
              (!list.length) ? (
                <tr>
                  <td colSpan="4" className="text-muted text-center">Nenhum Registro Encontrado</td>
                </tr>
              ) : (
                  list.map((item) => {
                    return (<tr key={item.id}>
                      <td scope="col">{item.id}</td>
                      <td scope="col">{item.name}</td>
                      <td scope="col" className={(item.type.trim() === 'I') ? 'text-success' : 'text-danger'}>{item.typeName}</td>
                      <td scope="col">{item.createdAt}</td>
                    </tr>)
                  })
                )
            }
          </tbody>
        </table>
      </div>
    </Content>
  );

}

export default Checkpoint;