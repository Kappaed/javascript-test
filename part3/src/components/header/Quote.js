import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  font-family: var(--alternate-font-family);
  font-weight: 700;
  margin: 10px 0;
  max-width: 300px;
`;

const StyledBar = styled.div`
  margin-right: 15px;
  width: 15px;
  background: var(--primary-color);
`;
const Quote = () => {
  return (
    <Wrapper>
      <StyledBar />
      <p>
        Sed porta, lorem a sodales rhoncus, neque ligula dictum libero, sit
        amet.
      </p>
    </Wrapper>
  );
};

export default Quote;
