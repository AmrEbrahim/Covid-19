import React from "react";

const TotalCases = ({ data }) => {
  return (
    <>
      <h4 className="ms-3 text-white">
        {data.country ? data.country : "World"} Live Statistics
      </h4>
      <div className="alert firstColor m-3 py-3">
        <div className="row justify-content-around">
          <div className="col-4 col-sm-2 d-flex justfiy-content-center align-items-center flex-column">
            <div className="count-contianer p-1 py-3">{data.todayCases}</div>
            <p className="mt-2 text-center">Today Cases </p>
          </div>
          <div className="col-4 col-sm-2 d-flex justfiy-content-center align-items-center flex-column">
            <div className="count-contianer p-1 py-3">{data.todayDeaths}</div>
            <p className="mt-2 text-center">Today Deaths</p>
          </div>
          <div className="col-4 col-sm-2 d-flex justfiy-content-center align-items-center flex-column">
            <div className="count-contianer p-1 py-3">{data.deaths}</div>
            <p className="mt-2 text-center">Deaths</p>
          </div>
          <div className="col-4 col-sm-2 d-flex justfiy-content-center align-items-center flex-column">
            <div className="count-contianer p-1 py-3">{data.recovered}</div>
            <p className="mt-2 text-center">Recovered</p>
          </div>
          <div className="col-4 col-sm-2 d-flex justfiy-content-center align-items-center flex-column">
            <div className="count-contianer p-1 py-3">{data.cases}</div>
            <p className="mt-2 text-center">Total Cases</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalCases;
