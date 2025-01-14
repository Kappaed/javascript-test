import "./App.css";
import styled from "styled-components";
import Header from "./components/header/Header";
import bgImage from "./images/home1-bg.jpg";
import AccordionList from "./components/accordion-list/Accordion-list";
import Hamburger from "./components/UI/Hamburger";
import MockPagination from "./components/UI/MockPagination";

const AccordionWrapper = styled.div`
  display: flex;
  height: 100vh;
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
        <AccordionList />
        <Hamburger />
        <MockPagination />
        <ImgWrapper src={bgImage} />
      </AccordionWrapper>
    </div>
  );
}

export default App;
