import React, { useState } from "react";
import history from "../history";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavbarText,
} from "reactstrap";
import { code, name } from "country-emoji";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [term, setTerm] = useState("");

  const toggle = () => setIsOpen(!isOpen);
  const onFormSubmit = (e) => {
    // e.preventDefault();
    console.log(term);
    history.push(`/${term}`);
    // this.props.fetchSearch(this.state.term);
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
            <button className="searchBtn" type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
          <NavbarText>
            <div className="countryCode d-flex">
              {code("EGYPT")}
              <h6 className="ml-2">{name("EG")}</h6>
            </div>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
