import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Form from './components/UI/FormComponent/Form'
import Sidebar from './components/Sidebar/Sidebar'
import Contants from "./components/Contents/Contants";
import './components/Contents/Contants.css'
import { Button } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Header/>
      <Contants/>
      <Form/>
      <Sidebar/>
      <Footer/>
    </div>
  );
}

export default App;
