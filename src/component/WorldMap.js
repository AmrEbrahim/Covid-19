import React from "react";
import { VectorMap } from "react-jvectormap";

const Map = ({ data }) => {
  let country = data[60];
  if (!country) {
    return null;
  }
  const handleClick = (e, countryCode) => {
    for (let key in data) {
      if (data[key].countryInfo.iso2 === countryCode) {
        country = data[key];
        console.log(country);
      }
    }
  };
  const ActivePercentage = (country.active * 100) / country.cases;
  const RecoveredPercentage = (country.recovered * 100) / country.cases;
  const DeathsPercentage = (country.deaths * 100) / country.cases;

  return (
    <div className="row mx-3 my-3 mb-2">
      <div className="col-12 col-xl-4 pl-0">
        <div className="col-12 col-xl-12 firstColor h-100">
          <div className="country-heading p-4 mb-3">
            <h6 className="text-white">
              <img
                className="mr-1"
                style={{ width: "25px", height: "25px" }}
                src={country.countryInfo.flag}
              />
              {country.country}
            </h6>
          </div>
          <div className="d-flex mb-4">
            <div className="icon bg-primary mr-2 mt-1">
              <i className="fa fa-heartbeat text-white"></i>
            </div>
            <div style={{ width: "90%" }}>
              <div className="d-flex justify-content-between align-items-center">
                <small>Cases</small>
                <small>{country.active}</small>
              </div>
              <div className="progress" style={{ height: "10px" }}>
                <div
                  style={{
                    background:
                      "linear-gradient(to right, #0081ff 0%, #0045ff 100%)",
                    width: ActivePercentage + "%",
                  }}
                  className="progress-bar"
                ></div>
              </div>
            </div>
          </div>
          <div className="d-flex mb-4">
            <div
              className="icon mr-2 mt-1"
              style={{ background: "rgb(0, 227, 150)" }}
            >
              <i className="fa fa-plus-square text-white"></i>
            </div>
            <div style={{ width: "90%" }}>
              <div className="d-flex justify-content-between align-items-center">
                <small>Recovered</small>
                <small>{country.recovered}</small>
              </div>
              <div className="progress" style={{ height: "10px" }}>
                <div
                  style={{
                    background:
                      "linear-gradient(to right, #3cba92 0%, #0ba360 100%)",
                    width: RecoveredPercentage + "%",
                  }}
                  className="progress-bar"
                ></div>
              </div>
            </div>
          </div>
          <div className="d-flex mb-4">
            <div className="icon bg-danger mr-2 mt-1">
              <i className="fa fa-exclamation-circle text-white"></i>
            </div>
            <div style={{ width: "90%" }}>
              <div className="d-flex justify-content-between align-items-center">
                <small>Deaths</small>
                <small>{country.deaths}</small>
              </div>
              <div className="progress" style={{ height: "10px" }}>
                <div
                  style={{
                    background:
                      "linear-gradient(to right, #d09693 0%, #c71d6f 100%)",
                    width: DeathsPercentage + "%",
                  }}
                  className="progress-bar"
                ></div>
              </div>
            </div>
          </div>
          <div className="d-flex mb-4">
            <div className="icon bg-warning mr-2 mt-1">
              <i className="fa fa-male text-white"></i>{" "}
            </div>
            <div style={{ width: "90%" }}>
              <div className="d-flex justify-content-between align-items-center">
                <small>Overall impacted</small>
                <small>{country.cases}</small>
              </div>
              <div className="progress" style={{ height: "10px" }}>
                <div
                  style={{
                    background:
                      "linear-gradient(to right, #f09819 0%, #ff5858 100%)",
                    width: "100%",
                  }}
                  className="progress-bar"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-xl-8 MapColor py-2 px-0 d-flex justify-content-center align-items-center">
        <VectorMap
          map={"world_mill"}
          backgroundColor="rgb(92, 26, 195)" //change it to ocean blue: #0077be
          zoomOnScroll={true}
          containerStyle={{
            width: "100%",
            height: "420px",
          }}
          onRegionClick={handleClick} //gets the country code
          containerClassName="map"
          regionStyle={{
            initial: {
              fill: "white",
              "fill-opacity": 0.9,
              stroke: "none",
              "stroke-width": 0,
              "stroke-opacity": 0,
              cursor: "pointer",
            },
            hover: {
              "fill-opacity": 0.8,
              cursor: "pointer",
            },
            selected: {
              fill: "rgb(255, 255, 0)", //color for the clicked country
            },
            selectedHover: {},
          }}
          regionsSelectable={true}
          regionsSelectableOne={true}
        />
      </div>
    </div>
  );
};

export default Map;
