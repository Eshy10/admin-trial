import React from "react";
import {
    SelectFieldContainer,
    Select,
} from "./selectField.styles";
const SelectFieldComponent = () => {
    const selectTypes = ["Select Type", "Option 2", "Option 3"];

    return (
        <SelectFieldContainer>
          <Select id="type" name="type">
          {selectTypes.map((type, index) => (
            <option key={index} value={`option${index + 1}`}>
              {type}
            </option>
          ))}
        </Select>
      </SelectFieldContainer>
    );
  };
  
  export default SelectFieldComponent;