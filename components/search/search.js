import React from "react";

import {
    SearchInput,
    SearchContainer,
    SearchIconWrapper,
    SearchIcon,
} from "./search.styles";

const SearchComponent = ({ width, searchField, setField }) => {
    const handleChange = (e) => {
        setField(e.target.value)
    }
    return (
        <SearchContainer width={width}>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <SearchInput type="text" placeholder="Search" value={searchField} onChange={handleChange} />
        </SearchContainer>
    );
};

export default SearchComponent;