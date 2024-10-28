import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 
import { DatePickerWrapper, CalendarIcon } from './datePicker.styles';

const CustomDatePicker = ({ placeholderText }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <DatePickerWrapper>
       <CalendarIcon />
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd/MM/yyyy"
          placeholderText={placeholderText}
        />
    </DatePickerWrapper>
  );
};

export default CustomDatePicker;
