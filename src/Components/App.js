import Header from './Header';
import Main from './Main';
import { Container } from 'react-bootstrap';
import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    if(!sessionStorage.getItem("planList")) {
      const {planList} = require("../Configs/testData")
      sessionStorage.setItem("planList", JSON.stringify(planList))
    }
  })

  return (
    <Container className="App" fluid>
      <Header />
      <Main />
    </Container>
  );
}

export default App;
