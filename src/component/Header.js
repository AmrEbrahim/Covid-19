import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const toggle = () => setIsOpen(!isOpen);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    setCountryInput(currentCountry);
    navigate(`/${currentCountry}`);
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
              className="me-2"
              alt=""
            />
            Coronavirus (COVID-19)
          </NavbarBrand>
          <form onSubmit={onFormSubmit} className="searchForm me-auto d-flex">
            <input
              className="form-control me-3"
              value={currentCountry}
              onChange={(e) => setCurrentCountry(e.target.value)}
              placeholder="Search a Country..."
            />
            <Button className="searchBtn" type="submit">
              <i className="fa fa-search"></i>
            </Button>
          </form>
          <NavbarText>
            <div className="countryCode d-flex align-items-center">
              {countryInput === "" ? "🌎" : code(countryInput)}
              <h6 className="ms-2 mb-0">
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
