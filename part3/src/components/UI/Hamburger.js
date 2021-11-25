import styled from "styled-components";
import { FaBars } from "react-icons/fa";

const StyledButton = styled.button`
  /* padding: 30px; */
  background: rgba(0, 0, 0, 0.4);
  top: 0;
  right: 0;
  font-size: 1.2rem;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 50px;
  position: absolute;
`;
const Hamburger = () => {
  return (
    <StyledButton>
      <FaBars />
    </StyledButton>
  );
};

export default Hamburger;
