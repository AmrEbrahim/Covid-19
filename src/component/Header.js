import React, { useState } from "react";
import history from "../history";
import { connect } from "react-redux";
import { fetchCountryData, clearData } from "../actions";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavbarText,
  Button,
} from "reactstrap";
import { code, name } from "country-emoji";

const Header = ({ fetchCountryData, clearData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [term, setTerm] = useState("");
  const [world, setworld] = useState("");

  const toggle = () => setIsOpen(!isOpen);
  const onFormSubmit = async (e) => {
    e.preventDefault();
    setworld(term);
    history.push(`/${term}`);
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
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder="Search a Country..."
            />
            <Button className="searchBtn" type="submit">
              <i className="fa fa-search"></i>
            </Button>
          </form>
          <NavbarText>
            <div className="countryCode d-flex">
              {world === "" ? "🌎" : code(term)}
              <h6 className="ml-2">
                {world === "" ? "World" : name(code(term))}
              </h6>
            </div>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default connect(null, { fetchCountryData, clearData })(Header);
