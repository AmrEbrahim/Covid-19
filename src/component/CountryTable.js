import React from "react";
import { MDBDataTable } from "mdbreact";

const CountryTable = ({ data }) => {
  const Tabledata = {
    columns: [
      {
        label: "Date",
        field: "",
        sort: "asc",
      },
      {
        label: "Total Cases",
        field: "cases",
        sort: "asc",
      },
      {
        label: "Deaths",
        field: "deaths",
        sort: "asc",
      },
      {
        label: "Recovered",
        field: "recovered",
        sort: "asc",
      },
    ],
    rows: Object.values(data),
  };
  return (
    <div className="firstColor col-12 pt-5 pb-2 px-5 mb-2 table">
      <MDBDataTable
        paginationLabel={["←", "→"]}
        entries={10}
        pagesAmount={5}
        responsiveSm
        hover
        data={Tabledata}
        order={["cases", "asc"]}
      />
    </div>
  );
};

export default CountryTable;
