import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavbarText,
  Button,
} from "reactstrap";

import { code, name } from "country-emoji";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentCountry, setCurrentCountry] = useState("");
  const [countryInput, setCountryInput] = useState("");
  const history = useHistory();
  const toggle = () => setIsOpen(!isOpen);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    setCountryInput(currentCountry);
    history.push(`/${currentCountry}`);
  };
  return (
    <div>
      <Navbar dark expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <NavbarBrand href="/" style={{ fontSize: "20px", fontWeight: "700" }}>
            <img
              src="/corona-virus.png"
              width="40"
              height="40"
              className="mr-2"
              alt=""
            />
            Coronavirus (COVID-19)
          </NavbarBrand>
          <form onSubmit={onFormSubmit} className="searchForm mr-auto">
            <input
              className="mr-3"
              value={currentCountry}
              onChange={(e) => setCurrentCountry(e.target.value)}
              placeholder="Search a Country..."
            />
            <Button className="searchBtn" type="submit">
              <i className="fa fa-search"></i>
            </Button>
          </form>
          <NavbarText>
            <div className="countryCode d-flex">
              {countryInput === "" ? "🌎" : code(countryInput)}
              <h6 className="ml-2">
                {countryInput === "" ? "World" : name(code(countryInput))}
              </h6>
            </div>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
