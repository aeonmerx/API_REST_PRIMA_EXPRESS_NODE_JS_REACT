import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/api/words', { withCredentials: false })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mis Datos de la API Prisma</h1>
        <ul>
  {data.map((item) => (
    <li key={item.id}>
      Palabra: {item.word} - Traducción: {item.translation.word}
    </li>
  ))}
</ul>

      </header>
    </div>
  );
}

export default App;
