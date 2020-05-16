import React from "react";
import { connect } from "react-redux";

import { fetchCountryData } from "../actions";
import { MDBDataTable } from "mdbreact";

const StatisticsTable = ({ fetchCountryData, CountryData }) => {
  const data = {
    columns: [
      {
        label: "Flag",
        field: "countryInfo.flag",
        sort: "asc",
      },
      {
        label: "Country",
        field: "country",
        sort: "asc",
      },
      {
        label: "Continent",
        field: "continent",
        sort: "asc",
      },
      {
        label: "Total Cases",
        field: "cases",
        sort: "asc",
      },
      {
        label: "Active",
        field: "active",
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
    rows: Object.values(CountryData),
  };
  return (
    <div className="firstColor col-12 pt-5 pb-2 px-5 mb-2 table">
      <MDBDataTable
        paginationLabel={["←", "→"]}
        entries={10}
        pagesAmount={5}
        // style={{ color: "white" }}
        responsiveSm
        hover
        data={data}
      />
    </div>
  );
};
const mapStateToProps = ({ CountryData }) => {
  return {
    CountryData,
  };
};

export default connect(mapStateToProps, {
  fetchCountryData,
})(StatisticsTable);

/*

const StatisticsTable = ({ fetchCountryData, CountryData }) => {
  const [sortType, setSortType] = useState("asc");

  useEffect(() => {
    fetchCountryData();
  }, []);

  const sortBy = (field) => {
    return (a, b) => {
      const isReversed = sortType === "asc" ? 1 : -1;
      if (typeof a.field === "string") {
        return isReversed * a.field.localeCompare(b.field);
      } else {
        if (sortType === "asc") {
          return isReversed * a.field - b.field;
        } else {
          return isReversed * a.field + b.field;
        }
      }
    };
  };

  const sorted = Object.values(CountryData);

  return (
    <Table className="firstColor ">
      <thead>
        <tr>
          <th
            onClick={() => {
              sortType === "asc" ? setSortType("desc") : setSortType("asc");
            }}
            style={{ borderTop: "0", borderBottom: "0px" }}
          >
            Flag
          </th>
          <th
            onClick={() => {
              sortType === "asc" ? setSortType("desc") : setSortType("asc");
            }}
            style={{ borderTop: "0", borderBottom: "0px" }}
          >
            Country
          </th>
          <th
            onClick={() => {
              sortType === "asc" ? setSortType("desc") : setSortType("asc");
            }}
            style={{ borderTop: "0", borderBottom: "0px" }}
          >
            Continent
          </th>
          <th
            onClick={() => {
              sortType === "asc" ? setSortType("desc") : setSortType("asc");
            }}
            style={{ borderTop: "0", borderBottom: "0px" }}
          >
            Total Cases
          </th>
          <th
            onClick={() => {
              sortType === "asc" ? setSortType("desc") : setSortType("asc");
            }}
            style={{ borderTop: "0", borderBottom: "0px" }}
          >
            Active
          </th>
          <th
            onClick={() => {
              sortType === "asc" ? setSortType("desc") : setSortType("asc");
            }}
            style={{ borderTop: "0", borderBottom: "0px" }}
          >
            Deaths
          </th>
          <th
            onClick={() => {
              sortType === "asc" ? setSortType("desc") : setSortType("asc");
            }}
            style={{ borderTop: "0", borderBottom: "0px" }}
          >
            Recovered
          </th>
        </tr>
      </thead>
      <tbody>
        {sorted.map((country) => (
          <tr className="table-row" key={country.country}>
            <th style={{ borderTop: "1px solid #191e3a" }}>
              {code(country.country) ? code(country.country) : "-"}
            </th>
            <td style={{ borderTop: "1px solid #191e3a" }}>
              {country.country}
            </td>
            <td style={{ borderTop: "1px solid #191e3a" }}>
              {country.continent}
            </td>
            <td style={{ borderTop: "1px solid #191e3a" }}>{country.cases}</td>
            <td style={{ borderTop: "1px solid #191e3a" }}>{country.active}</td>
            <td style={{ borderTop: "1px solid #191e3a" }}>{country.deaths}</td>
            <td style={{ borderTop: "1px solid #191e3a" }}>
              {country.recovered}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
const mapStateToProps = ({ CountryData }) => {
  return {
    CountryData,
  };
};

export default connect(mapStateToProps, {
  fetchCountryData,
})(StatisticsTable);
*/
