import "./App.css";
import styled from "styled-components";
import Header from "./components/header/Header";

const AccordionWrapper = styled.div`
  display: flex;
  position: relative;
  &:after {
  }
`;

function App() {
  return (
    <div className="App">
      <AccordionWrapper>
        <Header />
      </AccordionWrapper>
    </div>
  );
}

export default App;
