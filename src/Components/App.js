import Header from './Header';
import Main from './Main';
import { Container } from 'react-bootstrap';
import '../styles/App.css';
import { useEffect } from 'react';
import history from '../configs/history'
import { Router } from "react-router-dom";


function App() {

  useEffect(() => {
    if(!sessionStorage.getItem("planList")) {
      const {planList} = require("../configs/testData")
      sessionStorage.setItem("planList", JSON.stringify(planList))
    }
  })

  return (
      <Router history={history}>
        <Container className="App px-0" fluid>
          <Header />
          <Main />
        </Container>
      </Router>
  );
}

export default App;
