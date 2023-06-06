import React from "react";

const FilterBySearch = ({ filteredList, data }) => {
  const filterBySearch = (event) => {
    const query = event.target.value;
    var updatedList = [...filteredList];
    updatedList = updatedList.filter((item) => {
      return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    data(updatedList);
  };
  return (
    <div>
      <input
        className="form-control"
        placeholder="Search Here By Name"
        onChange={filterBySearch}
      />
    </div>
  );
};

export default FilterBySearch;
