import styled from "styled-components";

const TextEditor = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  position: relative;
`;
const IconWrapper = styled.div`
  display: flex;
  align-items: baseline;
  position: absolute;
  right: 20px;
  bottom: 8px;
  cursor: pointer;
  font-size: 1.1rem;
`;
export { TextEditor, IconWrapper };
