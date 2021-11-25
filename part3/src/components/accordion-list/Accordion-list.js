import styled from "styled-components";
import { useState } from "react";
import AccordionItem from "./AccordionItem";

const Wrapper = styled.div`
  margin-top: 80px;
  width: 555px;
  color: black;
  max-height: 100%;
  background: transparent;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;
const StyledTitle = styled.h3`
  font-family: var(--alternative-font-family);
  font-size: var(--primary-font-size);
  font-weight: 700;
  margin-bottom: 10px;
  text-align: center;
  overflow: hidden;
  max-height: 100vh;
`;

const generateRange = (length) => [...Array(length).keys()];

const AccordionList = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onClickHandler = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  return (
    <Wrapper>
      <StyledTitle>Montserrat </StyledTitle>
      {generateRange(7).map((index) => (
        <AccordionItem
          active={index === activeIndex}
          onClick={() => onClickHandler(index)}
        />
      ))}
    </Wrapper>
  );
};

export default AccordionList;
