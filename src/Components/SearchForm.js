import React from 'react';

const SearchForm = (props) => {

  return(
    <input
    type="text"
    placeholder="Search"
    value={props.value}
    onChange={props.changeHandler}
    />
  )

}
export default SearchForm;
