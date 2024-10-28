import styled from 'styled-components';

const DatePickerWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 2.5rem;
  border: 1px solid #D8D8D8;
  border-radius: 1000px;  
  
`;

const CalendarIcon = styled.img.attrs({
    src: "/assets/calendar-line.png",
    alt: "Calendar logo",
  })`
    height: 1rem;
    margin-left: 0.8rem;
  `;

export { DatePickerWrapper, CalendarIcon }