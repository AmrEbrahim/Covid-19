import React, { useState } from "react";
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

  const toggle = () => setIsOpen(!isOpen);

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
          <form className="searchForm mr-auto">
            <input
              className="mr-3"
              //value={this.state.term}
              //onChange={(e) => this.setState({ term: e.target.value })}
              placeholder="Search a Country..."
            />
            <button className="searchBtn" type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
          <NavbarText>
            <div className="countryCode d-flex">
              {code("usa")}
              <h6 className="ml-2">{name("US")}</h6>
            </div>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
