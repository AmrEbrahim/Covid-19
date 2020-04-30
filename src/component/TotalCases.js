import React from "react";

const TotalCases = ({ WorldData }) => {
  return (
    <React.Fragment>
      <h4 className="ml-3 text-muted">World Live Statistics</h4>
      <div className="alert firstColor m-3 py-3">
        <div className="row justify-content-around">
          <div className="col-4 col-sm-2 d-flex justfiy-content-center align-items-center flex-column">
            <div className="count-contianer p-1 py-3">
              {WorldData.todayCases}
            </div>
            <p className="mt-2">Today Cases </p>
          </div>
          <div className="col-4 col-sm-2 d-flex justfiy-content-center align-items-center flex-column">
            <div className="count-contianer p-1 py-3">
              {WorldData.todayDeaths}
            </div>
            <p className="mt-2">Today Deaths</p>
          </div>
          <div className="col-4 col-sm-2 d-flex justfiy-content-center align-items-center flex-column">
            <div className="count-contianer p-1 py-3">{WorldData.deaths}</div>
            <p className="mt-2">Deaths</p>
          </div>
          <div className="col-4 col-sm-2 d-flex justfiy-content-center align-items-center flex-column">
            <div className="count-contianer p-1 py-3">
              {WorldData.recovered}
            </div>
            <p className="mt-2">Recovered</p>
          </div>
          <div className="col-4 col-sm-2 d-flex justfiy-content-center align-items-center flex-column">
            <div className="count-contianer p-1 py-3">{WorldData.cases}</div>
            <p className="mt-2">Total Cases</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TotalCases;
