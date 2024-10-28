import styled from 'styled-components';
import { display, space, width } from "styled-system";


const SideNavLinkWrapper = styled.div``;

const NavRowContainer = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const NavIcon = styled.img.attrs(({ src, alt }) => ({
  src: src,
  alt: alt
}))`
  height: 20px;
  width:20px
`;

const IconsLabel = styled.p`
    color: #ffffff;
    padding-left: 15px;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 32.36px; 
    letter-spacing: 0.4px;
    @media (max-width: 1250px) {
      font-size: 15px;
    }
`;



export {
  SideNavLinkWrapper,
  NavRowContainer,
  IconsLabel,
  NavIcon,
};