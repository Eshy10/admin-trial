import React from "react";
import {
    SelectFieldContainer,
    Select,
} from "./select/selectField.styles";
const StatusComponent = () => {
    const status = ["Status", "Option 2", "Option 3"];
    return (
        <SelectFieldContainer>
            <Select id="status" name="status">
            {status.map((status, index) => (
                <option key={index} value={`option${index + 1}`}>
                {status}
                </option>
            ))}
            </Select>
      </SelectFieldContainer>
    );
  };
  
  export default StatusComponent;