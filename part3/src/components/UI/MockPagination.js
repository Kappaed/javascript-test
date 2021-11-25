import styled from "styled-components";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const StyledButton = styled.button`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  width: ${(props) => (props.active ? "100px" : "85px")};
  height: ${(props) => (props.active ? "100px" : "85px")};
  font-size: 1.1rem;
  background: ${(props) =>
    props.active ? "var(--primary-color)" : "var(--alt-color)"};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  position: absolute;
  bottom: 0;
  right: 0;
`;

const StyledText = styled.span`
  display: inline-block;
  margin-top: 5px;
`;

const MockPagination = () => {
  return (
    <Wrapper>
      <StyledButton>
        <FaChevronLeft />
        <StyledText>Back</StyledText>
      </StyledButton>
      <StyledButton active>
        <FaChevronRight />
        <StyledText>Next</StyledText>
      </StyledButton>
    </Wrapper>
  );
};

export default MockPagination;
