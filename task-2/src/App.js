import React from 'react';

import './App.css';
import Card from "./Components/Cards/Card";
import './Components/Cards/Card.css'


function App() {
  return (
    <div className="App">
        <Card film="WarCraft " years="2016" img="https://upload.wikimedia.org/wikipedia/ru/thumb/2/21/Warcraft_poster.jpg/270px-Warcraft_poster.jpg"/>
        <Card film="Vikings" years="2008" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUf-BQQcsDeBbsmFgOwIQUaTmtoaB-1QZveIY5JFjQRsn-3tyU&s"/>
        <Card film="Tom And Jerry" years="1995-2019" img="https://upload.wikimedia.org/wikipedia/en/5/5f/TomandJerryTitleCardc.jpg"/>
    </div>
  );
}

export default App;
