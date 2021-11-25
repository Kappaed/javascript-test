import styled from "styled-components";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
const AccordionBar = styled.button`
  padding: 15px 30px;
  color: black;
  font-family: var(--alternative-font-family);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--primary-color);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  max-height: 50px;
  font-weight: var(--larger-font-weight);
  width: 100%;
`;

const StyledArrow = styled.div`
  display: flex;
  font-size: 1.5rem;
`;

const Wrapper = styled.li`
  margin-bottom: 20px;

  flex-shrink: 0 1 0;
  overflow: auto;
`;

const AccordionTextArea = styled.div`
  background: linear-gradient(180deg, #cccccc 0%, #ffffff 50%);
  padding: 20px 30px;
  font-family: var(--alternate-font-family);
  font-weight: light;
`;
const AccordionItem = (props) => {
  return (
    <Wrapper>
      <AccordionBar onClick={props.onClick}>
        <p>{props.title || "Lorem Ipsum"}</p>
        <StyledArrow>
          {props.active && <FiChevronUp />}
          {!props.active && <FiChevronDown />}
        </StyledArrow>
      </AccordionBar>
      {props.active && (
        <AccordionTextArea>
          {props.text ||
            "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut."}
        </AccordionTextArea>
      )}
    </Wrapper>
  );
};

export default AccordionItem;
