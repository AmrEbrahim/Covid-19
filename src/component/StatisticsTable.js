import React, { useMemo } from "react";
import { useTable, useSortBy, usePagination } from "react-table";

const StatisticsTable = ({ data }) => {
  const columns = useMemo(
    () => [
      {
        Header: "Country",
        accessor: "country",
      },
      {
        Header: "Continent", 
        accessor: "continent",
      },
      {
        Header: "Population",
        accessor: "population",
        Cell: ({ value }) => value?.toLocaleString() || "N/A",
      },
      {
        Header: "Total Cases",
        accessor: "cases",
        Cell: ({ value }) => value?.toLocaleString() || "0",
      },
      {
        Header: "Active",
        accessor: "active",
        Cell: ({ value }) => value?.toLocaleString() || "0",
      },
      {
        Header: "Deaths",
        accessor: "deaths", 
        Cell: ({ value }) => value?.toLocaleString() || "0",
      },
      {
        Header: "Recovered",
        accessor: "recovered",
        Cell: ({ value }) => value?.toLocaleString() || "0",
      },
    ],
    []
  );

  const tableData = useMemo(() => Object.values(data), [data]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data: tableData,
      initialState: { 
        pageIndex: 0, 
        pageSize: 10,
        sortBy: [{ id: "cases", desc: true }]
      },
    },
    useSortBy,
    usePagination
  );

  return (
    <div className="col-12 pt-5 pb-2 px-5 mb-2" style={{
      background: '#0e1726',
      color: '#888ea8',
      borderRadius: '10px'
    }}>
      <div style={{ 
        overflowX: 'auto',
        overflowY: 'hidden',
        scrollbarWidth: 'thin',
        scrollbarColor: '#191e3a #0e1726'
      }}
      className="custom-scrollbar"
      >
        <table {...getTableProps()} style={{ 
          width: '100%',
          backgroundColor: '#0e1726',
          color: '#888ea8',
          fontSize: '13px',
          borderCollapse: 'collapse',
          margin: 0
        }}>
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index} style={{ 
                backgroundColor: '#0e1726'
              }}>
                {headerGroup.headers.map((column, colIndex) => (
                  <th 
                    {...column.getHeaderProps(column.getSortByToggleProps())} 
                    key={colIndex}
                    style={{ 
                      color: '#009688',
                      backgroundColor: '#0e1726',
                      border: 'none',
                      borderBottom: '1px solid #191e3a',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      padding: '12px 8px',
                      textAlign: 'left',
                      cursor: 'pointer'
                    }}
                  >
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, rowIndex) => {
              prepareRow(row);
              return (
                <tr 
                  {...row.getRowProps()} 
                  key={rowIndex}
                  style={{ 
                    borderBottom: '1px solid #191e3a',
                    backgroundColor: '#0e1726',
                    transition: 'all 0.1s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#191e3a';
                    e.currentTarget.style.transform = 'scale(1.008)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#0e1726';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  {row.cells.map((cell, cellIndex) => (
                    <td 
                      {...cell.getCellProps()} 
                      key={cellIndex}
                      style={{ 
                        color: '#888ea8',
                        border: 'none',
                        fontSize: '13px',
                        backgroundColor: 'inherit',
                        padding: '12px 8px'
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginTop: '20px',
        padding: '10px 0'
      }}>
        <div style={{ display: 'flex', gap: '5px' }}>
          <button 
            onClick={() => gotoPage(0)} 
            disabled={!canPreviousPage}
            style={{
              width: '30px',
              height: '30px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: !canPreviousPage ? '#191e3a' : 'transparent',
              color: !canPreviousPage ? '#555' : '#888ea8',
              border: 'none',
              borderRadius: '50%',
              cursor: !canPreviousPage ? 'not-allowed' : 'pointer',
              fontSize: '12px',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              if (canPreviousPage) {
                e.target.style.backgroundColor = '#191e3a';
                e.target.style.color = '#fff';
              }
            }}
            onMouseLeave={(e) => {
              if (canPreviousPage) {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#888ea8';
              }
            }}
          >
            {"<<"}
          </button>
          <button 
            onClick={() => previousPage()} 
            disabled={!canPreviousPage}
            style={{
              width: '30px',
              height: '30px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: !canPreviousPage ? '#191e3a' : 'transparent',
              color: !canPreviousPage ? '#555' : '#888ea8',
              border: 'none',
              borderRadius: '50%',
              cursor: !canPreviousPage ? 'not-allowed' : 'pointer',
              fontSize: '12px',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              if (canPreviousPage) {
                e.target.style.backgroundColor = '#191e3a';
                e.target.style.color = '#fff';
              }
            }}
            onMouseLeave={(e) => {
              if (canPreviousPage) {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#888ea8';
              }
            }}
          >
            {"<"}
          </button>
          <button 
            onClick={() => nextPage()} 
            disabled={!canNextPage}
            style={{
              width: '30px',
              height: '30px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: !canNextPage ? '#191e3a' : 'transparent',
              color: !canNextPage ? '#555' : '#888ea8',
              border: 'none',
              borderRadius: '50%',
              cursor: !canNextPage ? 'not-allowed' : 'pointer',
              fontSize: '12px',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              if (canNextPage) {
                e.target.style.backgroundColor = '#191e3a';
                e.target.style.color = '#fff';
              }
            }}
            onMouseLeave={(e) => {
              if (canNextPage) {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#888ea8';
              }
            }}
          >
            {">"}
          </button>
          <button 
            onClick={() => gotoPage(pageCount - 1)} 
            disabled={!canNextPage}
            style={{
              width: '30px',
              height: '30px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: !canNextPage ? '#191e3a' : 'transparent',
              color: !canNextPage ? '#555' : '#888ea8',
              border: 'none',
              borderRadius: '50%',
              cursor: !canNextPage ? 'not-allowed' : 'pointer',
              fontSize: '12px',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              if (canNextPage) {
                e.target.style.backgroundColor = '#191e3a';
                e.target.style.color = '#fff';
              }
            }}
            onMouseLeave={(e) => {
              if (canNextPage) {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#888ea8';
              }
            }}
          >
            {">>"}
          </button>
        </div>
        
        <span style={{ 
          color: '#888ea8', 
          fontSize: '13px',
          letterSpacing: '0.5px'
        }}>
          Page{" "}
          <strong style={{ color: '#009688' }}>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        
        <select
          style={{ 
            width: "120px",
            background: '#1b2e4b',
            border: '1px solid #1b2e4b',
            borderRadius: '6px',
            color: '#009688',
            fontSize: '13px',
            padding: '8px 12px',
            outline: 'none',
            cursor: 'pointer',
            letterSpacing: '0.5px'
          }}
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize} style={{ 
              background: '#1b2e4b', 
              color: '#009688' 
            }}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default StatisticsTable;
