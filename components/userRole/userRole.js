import React from "react";
import {
    SelectFieldContainer,
    Select,
} from "./userRole.styles";
const UserRoleDropdownComponent = () => {
    const userRoles = ["User Role", "Option 2", "Option 3"];
  
    return (
      <SelectFieldContainer>
        <Select id="role" name="role">
          {userRoles.map((role, index) => (
            <option key={index} value={`option${index + 1}`}>
              {role}
            </option>
          ))}
        </Select>
      </SelectFieldContainer>
    );
  };
  
  export default UserRoleDropdownComponent;