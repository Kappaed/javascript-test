import "./App.css";
import styled from "styled-components";
import Header from "./components/header/Header";
import bgImage from "./images/home1-bg.jpg";

const AccordionWrapper = styled.div`
  display: flex;
  position: relative;
`;

const ImgWrapper = styled.img`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: -10;
`;

function App() {
  return (
    <div className="App">
      <AccordionWrapper>
        <Header />
        <ImgWrapper src={bgImage} />
      </AccordionWrapper>
    </div>
  );
}

export default App;
