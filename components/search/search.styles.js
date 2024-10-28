import styled from 'styled-components';
import { display, space, width } from "styled-system";

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  width: ${(props) => (props.width ? props.width : width < 768 ? '70vw' : '91.8%')};
  height: 42px;
  border: 1px solid #D8D8D8;
  background-color: #FFF;
  border-radius: 1000px;
  padding: 0.5rem;
  box-sizing: border-box;

  @media screen and (max-width: 369px) {
    width: 100%;
  }
`;

const SearchInput = styled.input`
    width: 100%;
    border: none;
    outline: none;
    color: #000;
    font-size: 14px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: 24.27px;
    letter-spacing: 0.3px;

    ::placeholder {
      color: #bdbdbd;
    }
`;

const SearchIconWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: 4px;
    padding-left: 1rem;
`;

const SearchIcon = styled.img.attrs({
    src: "/assets/search-2-line.png",
    alt: "Search icon",
    })`
    height: 1rem;
    `;

export {
    SearchInput,
    SearchContainer,
    SearchIconWrapper,
    SearchIcon,
}