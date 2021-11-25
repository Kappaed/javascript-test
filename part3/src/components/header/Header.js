import styled from "styled-components";
import Quote from "./Quote";

const Wrapper = styled.div`
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.93) 71.56%,
    rgba(0, 0, 0, 0.920313) 71.56%,
    rgba(0, 0, 0, 0.823438) 73.83%,
    rgba(0, 0, 0, 0.692656) 76.61%,
    rgba(0, 0, 0, 0.508594) 80.53%,
    rgba(0, 0, 0, 0.300313) 84.97%,
    rgba(0, 0, 0, 0) 91.05%
  );
  width: 500px;
  height: 100vh;
  padding: 85px 75px 85px 68px;
  color: white;
`;

const StyledTitle = styled.h1`
  font-weight: var(--largest-font-weight);
  font-size: var(--largest-font-size);
  text-transform: uppercase;
  line-height: var(--largest-line-height);
  margin-bottom: 40px;
`;

const TextWrapper = styled.div`
  max-width: 330px;
`;
const Header = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <StyledTitle>Nulla imperdiet</StyledTitle>
        <p>Vestibulum dapibus hendrerit nibh ut ornare.</p>
        <Quote />
      </TextWrapper>
    </Wrapper>
  );
};

export default Header;
