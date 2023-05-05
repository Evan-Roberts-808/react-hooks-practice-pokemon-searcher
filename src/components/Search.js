import React, { useState } from "react";

function Search({ onHandleSearch, searchTerm }) {

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchTerm} onChange={onHandleSearch}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
