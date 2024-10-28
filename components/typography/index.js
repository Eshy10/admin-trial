import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import {
  color,
  fontSize,
  layout,
  space,
  typography,
  width,
} from "styled-system";

/**
 * @note All styled elements are in UPPERCASE
 */
const H2 = styled.h2`
  color: ${(props) =>
    props.off_white ? "#ffffff" : themeGet("colors.paragraph_dark", "#484848")};
  color: ${(props) => (props.primary_blue ? "#3e46b6 !important" : "")};
  font-family: Poppins, sans-serif;
  ${color};
  ${space};
  ${fontSize};
  ${width};
  ${typography};
  text-shadow: 0.3px 0 0.3px ${themeGet("colors.border_color", "#DBDBDB")};
  line-height: 1.48;
  font-weight: 600;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "")};
  font-weight: ${(props) => (props.clear ? "200" : "")};
  font-weight: ${({ newSearchNo, hireProBooking }) =>
    newSearchNo || hireProBooking ? "500" : ""};
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  display: ${(props) => (props.mobile ? "none" : "")};
  white-space: ${({ noWrap }) => (noWrap ? "nowrap" : "")};
  width: ${({ dMessage }) => (dMessage ? "50%" : "")};
  word-wrap: ${({ dMessage }) => (dMessage ? "break-word" : "")};
  color: ${({ demoDownload }) => (demoDownload ? "#36d7ff" : "")};
  color: ${({ receiver }) => (receiver ? "#ffffff" : "")};
  color: ${({ hireProBooking }) => (hireProBooking ? "#9A9A9A" : "")};
  margin-left: ${({ demoDownload }) => (demoDownload ? "auto" : "")};
  margin-left: ${({ descM }) => (descM ? ".1rem" : "")};
  font-size: ${(props) => (props.descM ? "0.9em" : "")};
  font-size: ${({ newSearchNo }) => (newSearchNo ? "1.5em" : "")};
  font-size: ${({ collab }) => (collab ? "95%" : "")};
  font-size: ${(props) => (props.peopleExplore ? "1.2rem" : "")};
  font-size: ${({ hireProBooking }) => (hireProBooking ? "16px" : "")};
  font-size: ${({ peopleExploreSearch }) =>
    peopleExploreSearch ? "0.775em" : ""};
  font-size: ${({ hireProHeader }) => (hireProHeader ? "16px" : "")};
  font-weight: ${({ title, hirePro }) => (title || hirePro ? "400" : "")};
  margin-top: ${({ title }) => (title ? "0.3rem" : "")};
  text-align: ${({
    newSearchNo,
    newSearch,
    peopleExploreSearch,
    InnerDivConfirm,
  }) =>
    newSearchNo || newSearch || peopleExploreSearch || InnerDivConfirm
      ? "center"
      : ""};
  text-align: ${({ hpart, hirePro }) => (hpart || hirePro ? "left" : "")};
  font-family: ${({ wel }) => (wel ? "Poppins" : "")};

  margin-top: ${({ bud, clear }) => (bud || clear ? "1.1rem" : "")};

  margin-top: ${({ see }) => (see ? "0.65rem" : "")};
  margin: ${({ details, budget }) => (details || budget ? "0" : "")};
  padding: ${({ details, budget }) => (details || budget ? "0" : "")};
  font-size: ${({ details, newSearch }) =>
    details || newSearch ? "1.25rem" : ""};

  font-size: ${({ hirePro }) => (hirePro ? "1.25rem" : "")};

  margin: ${({ newSearch }) => (newSearch ? "0 auto" : "")};
  margin: ${({ hirePro }) => (hirePro ? "0 auto 0 0" : "")};
  margin: ${({ hireProHeader }) => (hireProHeader ? "0 0 1.5rem 0" : "")};
  margin: ${({ confirm }) => (confirm ? "2rem auto 1.5rem auto" : "")};
  span {
    color: ${themeGet("colors.razu_teal", "#36d7ff")};
  }
  @media screen and (max-width: 48em) {
    font-size: ${(props) => (props.settings_font ? "0.775em" : "")};
    font-size: ${({ hirePro }) => (hirePro ? "1.25rem" : "")};
    display: ${(props) => (props.desk ? "none" : "")};
    display: ${(props) => (props.mobile ? "block" : "")};
  }
  @media screen and (max-width: 33.75em) {
    font-size: ${(props) => (props.settings_font ? "0.65em" : "")};
  }

  @media screen and (max-width: 20em) {
    font-size: ${(props) => (props.settingsMobile_font ? "0.6em" : "")};
  }
  @media (min-width: 52em) and (max-width: 65.5em) {
    font-size: ${({ collab }) => (collab ? "80%" : "")};
  }

  @media screen and (max-width: 22.5em) {
    font-size: ${(props) => (props.peopleExplore ? "0.775em" : "")};
    font-size: ${({ hirePro }) => (hirePro ? "1.25rem" : "")};
    font-size: ${({ peopleExploreSearch }) =>
      peopleExploreSearch ? "0.775em" : ""};
  }

  @media screen and (min-width: 52em) {
    font-size: ${({ details, newSearch, hireProHeader }) =>
      details || newSearch || hireProHeader ? "1.75rem" : ""};
    font-size: ${({ peopleExplore }) => (peopleExplore ? "2.25rem" : "")};
    font-size: ${({ peopleExploreSearch }) =>
      peopleExploreSearch ? "1.2rem" : ""};
    font-size: ${({ hirePro }) => (hirePro ? "1.25rem" : "")};
    font-weight: ${({ peopleExplore }) => (peopleExplore ? "500" : "")};
    text-align: ${({ hpart }) => (hpart ? "center" : "")};
  }
`;

const H3 = styled.h3`
  width: 13.5rem;
  height: 1.313rem;
  margin: 2.625rem 3.25rem 1.75rem;
  margin: ${({ budget }) => (budget ? "0 0 3rem 0" : "")};
  width: ${({ budgetForm }) => (budgetForm ? "9rem" : "")};
  margin: ${({ budgetForm }) => (budgetForm ? "0 0 1rem 0" : "")};
  font-family: Poppins;
  font-size: 0.75rem;
  font-size: ${({ budget }) => (budget ? "1rem" : "")};
  font-size: ${({ budgetForm }) => (budgetForm ? "0.875rem" : "")};
  font-weight: normal;
  font-weight: ${({ budget }) => (budget ? "bold" : "")};
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: normal;
  text-align: left;
  color: #8181a5;
  color: ${({ budget, budgetForm }) => (budget || budgetForm ? "#484848" : "")};
`;

const P = styled.p`
  ${width};
  ${space};
  ${typography};
  ${color};
  ${layout};
  color: ${(props) => (props.off_white ? "#ffffff" : "#484848")};
  color: ${(props) => (props.brownGrey || props.newSearch ? "#9a9a9a" : "")};
  color: ${(props) => (props.secondaryBlue ? "#36d7ff" : "")};
  color: ${(props) => (props.main_white ? "#ffffff" : "")};
  color: ${(props) => (props.lighter_grey ? "#8181a5" : "")};
  color: ${(props) => (props.primary_blue ? "#3e46b6" : "")};
  color: ${(props) => (props.nav_white ? "#ffffff !important" : "")};

  text-shadow: ${(props) =>
    props.off_white
      ? `0.3px 0 0.3px${themeGet("colors.border_color", "#DBDBDB")}`
      : ""};
  font-size: ${(props) => (props.settings_font ? "0.875rem" : "0.9em")};
  font-size: ${(props) => (props.settingsNav_font ? "0.75rem" : "")};
  font-size: ${(props) => (props.desk ? "1rem" : "")};
  font-size: ${({ hirePro }) => (hirePro ? ".8rem" : "")};
  font-size: ${({ taskDelete }) => (taskDelete ? "0.875rem" : "")};
  font-size: ${({ serviceFont }) => (serviceFont ? "0.86rem !important" : "")};
  font-size: ${({ serviceSize }) => (serviceSize ? "0.6rem" : "")};
  font-weight: ${({ taskDelete, hirePro }) =>
    taskDelete || hirePro ? "500" : ""};
  font-weight: ${({ navWeight }) => (navWeight ? "600 !important" : "")};

  font-family: Poppins, sans-serif;
  text-align: ${(props) => (props.alignLeft ? "left" : "")};
  text-align: ${(props) =>
    props.alignCenter || props.newSearch || props.confirm ? "center" : ""};
  opacity: ${(props) => (props.off_white ? "0.62" : "")};
  font-weight: ${(props) =>
    props.bold || props.pay || props.mob ? "bold" : ""};
  white-space: ${({ tabs, noWrap }) => (tabs || noWrap ? "nowrap" : "")};
  word-break: ${({ breakword }) => (breakword ? "break-word" : "")};
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  display: ${(props) => (props.mobile ? "none" : "")};
  ${fontSize};
  font-family: ${({ wel }) => (wel ? "Poppins" : "")};

  cursor: ${({ taskDelete }) => (taskDelete ? "pointer" : "")};

  margin: ${({ taskDelete }) => (taskDelete ? "0.6rem 2.5rem 0 0" : "")};
  margin: ${({ newSearch }) => (newSearch ? "1.5rem auto 1.5rem auto" : "")};
  margin: ${({ confirm }) => (confirm ? "0 auto .8rem auto" : "")};

  position: ${({ moree }) => (moree ? "relative" : "")};
  top: ${({ moree }) => (moree ? ".5rem" : "")};
  @media screen and (min-width: 52em) {
    font-size: ${({ taskDelete }) => (taskDelete ? "1.125rem" : "")};
    font-size: ${({ newSearch }) => (newSearch ? "1.3rem" : "")};
    margin: ${({ taskDelete }) => (taskDelete ? "0.4rem 2.5rem 0 0" : "")};
    width: ${({ newSearch }) => (newSearch ? "95%" : "")};
  }

  @media screen and (min-width: 160em) {
    font-size: ${(props) => (props.profile ? "1.5rem" : "")};
  }
  @media screen and (min-width: 90em) {
    font-size: ${(props) => (props.settings_font ? "0.875rem" : "")};
  }
  @media screen and (min-width: 64em) {
    font-size: ${(props) => (props.settings_font ? "0.75rem" : "")};
  }
  @media screen and (max-width: 48em) {
    font-size: ${(props) => (props.settings_font ? "0.813rem" : "")};
    font-size: ${(props) => (props.settingsNav_font ? "0.6em" : "")};
    font-size: ${(props) =>
      props.mobileFont_security ? "0.875rem !important" : ""};
    margin-top: ${(props) => (props.mobileText ? "9rem" : "")};
    margin-top: ${(props) => (props.securityHeader ? "10rem" : "")};
    display: ${(props) => (props.desk ? "none" : "")};
    display: ${(props) => (props.mobile ? "block" : "")};
    padding-left: ${(props) => (props.securityHeader ? "1.5rem" : "")};
    margin-left: ${(props) => (props.securityHeader ? "2rem" : "")};
    margin-right: ${(props) => (props.securityHeader ? "2rem" : "")};
  }
  @media screen and (max-width: 26.5625em) {
    font-size: ${(props) => (props.settingsNav_font ? "0.5em" : "")};
    font-size: ${(props) => (props.mobile ? "0.875rem" : "")};
    color: ${(props) => (props.mobile ? "#8181a5" : "")};
    display: ${(props) => (props.desk ? "none" : "")};
    display: ${(props) => (props.mobile ? "block" : "")};
  }
  @media screen and (max-width: 23.4375em) {
    margin-left: ${(props) => (props.securityHeader ? "1.5rem" : "")};
  }
  @media screen and (max-width: 20em) {
    font-size: ${(props) => (props.settingsMobile_font ? "0.6em" : "")};
    margin-left: ${(props) => (props.securityHeader ? "1rem" : "")};
    margin-right: ${(props) => (props.securityHeader ? "1rem" : "")};
  }
`;

const Span = styled.span`
  margin-left: 0.125rem;
  font-family: "Poppins";
  font-size: 1rem;
  font-size: ${({ newSearchNo, searchSort }) =>
    newSearchNo || searchSort ? "0.675rem" : ""};
  font-size: ${({ newSearch }) => (newSearch ? "1rem" : "")};

  font-weight: bold;
  font-weight: ${({ searchSort }) => (searchSort ? "500" : "")};
  font-weight: ${({ newSearchNo }) => (newSearchNo ? "normal" : "")};
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #36d7ff;
  color: ${({ newSearchNo, searchSort }) =>
    newSearchNo || searchSort ? "#484848" : ""};
  /* margin: ${({ newSearch }) => (newSearch ? "0.5rem 20% 0 0" : "")}; */
  margin: ${({ searchSort }) => (searchSort ? ".8rem 0 0 0" : "")};
  cursor: ${({ newSearch }) => (newSearch ? "pointer" : "")};

  @media screen and (min-width: 52em) {
    font-size: ${({ newSearch }) => (newSearch ? "1.25rem" : "")};
    font-size: ${({ searchSort }) => (searchSort ? "0.95rem" : "")};
    margin: ${({ newSearch }) => (newSearch ? "1.2rem 30% 0 0" : "")};
  }
`;

export { H2, H3, P, Span };
