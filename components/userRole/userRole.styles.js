import styled from 'styled-components';
import { space } from "styled-system";

const SelectFieldContainer = styled.div`
    display: flex;
    align-items: center;
    padding-left: 0.9rem;
`;
const Select = styled.select`
  width: 150px;
  height: 42px;
  border: 1px solid #D8D8D8;
  background-color: #FFF;
  border-radius: 100px;
  flex: 1;
  margin-top: 0.7rem;
  font-size: 12px;
  font-family: Poppins, sans-serif;
  ${space};
  background-color: #fbfcfd;
  cursor: pointer;
  color: #bdbdbd;
  margin-right: 1rem;
  padding-left: 1rem;

  max-width: 100%;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-image: url("/assets/arrow-drop-down-line.png");
  background-repeat: no-repeat, repeat;

  /* arrow icon position (1em from the right, 50% vertical) , then gradient position*/
  background-position: right 1.4em top 50%, 0 0;
  /* icon size, then gradient */
  background-size: 1em auto, 100%;

  /* Hide arrow icon in IE browsers */
  ::-ms-expand {
    display: none;
  }

  /* Focus style */
  &:focus {
    /* It'd be nice to use -webkit-focus-ring-color here but it doesn't work on box-shadow */
    outline: none;
  }

  /* Set options to normal weight */
  option {
    font-weight: normal;
    color: black;
  }

  /* Support for rtl text, explicit support for Arabic and Hebrew */
  *[dir="rtl"],
  &:root:lang(ar),
  &:root:lang(iw) {
    background-position: left 1.4em top 50%, 0 0;
  }

  /* Disabled styles */
  &:disabled,
  [aria-disabled="true"] {
    background-image: url("/assets/arrow-drop-down-line.png");
  }

  &:disabled:hover,
  [aria-disabled="true"] {
    border-color: #aaa;
  }
  &:focus {
    outline: none;
  }

  @media screen and (min-width: 52em) {
    background-position: right 1.4em top 50%, 0 0;
  }

  @media screen and (max-width: 48em) {
    width: 15.5rem;
    height: 2.688rem;
  }
  @media (max-width: 23.4375em) {
    width: 13.6rem;
    padding-left: 0.5rem;
  }
  @media screen and (max-width: 20em) {
    width: 11rem;
  }
`;

export {
    SelectFieldContainer,
    Select,
}
