import React, { useState } from "react";

import { Button, Form, Modal, Spinner } from "react-bootstrap";

const FilterDropdown = ({ handleChange, label, name, options, value }) => {
  return (
    <>
      <p>{label}</p>

      <Form.Select
        onChange={(e) => handleChange(name, e.target.value)}
        value={value}
      >
        <option key="N/A">N/A</option>
        {options?.map((optionText) => (
          <option key={optionText}>{optionText}</option>
        ))}
      </Form.Select>
    </>
  );
};

const Filters = ({
  isLoading,
  filterOptions,
  filterSuggestions,
  selectedFilters,
  setSelectedFilters,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleFilterSelection(filterName, newValue) {
    setSelectedFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      newFilters[filterName] = newValue;
      return newFilters;
    });
  }

  return (
    <div>

          {isLoading ? (
            <Spinner />
          ) : (

          <div class="wrapFilters">
                {filterOptions.map((filterOption) => (
                  <div className="one" key={filterOption.name}>
                    <Form.Group>
                      <FilterDropdown
                        handleChange={handleFilterSelection}
                        label={filterOption.label_short}
                        name={filterOption.name}
                        options={filterSuggestions[filterOption.name]}
                        value={selectedFilters[filterOption.name]}
                      />
                    </Form.Group>
                  </div>
                ))}
              </div>

          )}

    </div>
  );
};

export default Filters;
