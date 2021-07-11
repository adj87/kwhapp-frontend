import React, { useContext } from "react";
import styled, { withTheme } from "styled-components";
import { useTable, useSortBy } from "react-table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { MainContext } from "../contexts/MainContext";

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;

    thead {
      th {
        color: ${({ theme }) => theme.palette.grey[1]};
        border-bottom: ${({ theme, darkMode }) =>
          `3px solid ${
            darkMode ? theme.palette.bodyColor : theme.palette.grey[1]
          }`};
        padding: 10px 50px;
        font-family: Poppins ExtraBold;
        color: ${({ theme, darkMode }) =>
          darkMode ? "white" : theme.palette.grey[1]};
      }
    }
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      color: ${({ darkMode, theme }) =>
        darkMode ? theme.palette.bodyColor : theme.palette.grey[1]};
      margin: 0;
      padding: 0.5rem;
      text-align: center;
      border-bottom: ${({ theme, darkMode }) =>
        `1px solid ${
          darkMode ? theme.palette.bodyColor : theme.palette.grey[1]
        }`};
      :last-child {
        border-right: 0;
      }
    }
  }
`;

function Table({ columns, data, onRowClick }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );
  const firstPageRows = rows.slice(0, 20);

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers
                .filter((el) => el.columns === undefined)
                .map((column) => {
                  // @ts-ignore
                  const color = column.isSorted
                    ? "text-white font-bold"
                    : "text-primary-light font-thin";
                  // @ts-ignore
                  const icon = column.isSorted ? (
                    // @ts-ignore
                    column.isSortedDesc ? (
                      <FontAwesomeIcon
                        icon={faAngleDown}
                        className="text-secondary-main text-md"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faAngleUp}
                        className="text-secondary-main text-md"
                      />
                    )
                  ) : (
                    ""
                  );
                  return (
                    <th
                      // @ts-ignore
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className={`text-center py-2 bg-primary-dark text-sm ${color}`}
                    >
                      {icon}
                      {` ${column.render("Header")}`}
                    </th>
                  );
                })}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} onClick={() => console.log(row)}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <div>Showing the first 20 results of {rows.length} rows</div>
    </>
  );
}

export default withTheme(function ({ data, columns }) {
  const { darkMode } = useContext(MainContext);
  return (
    <Styles darkMode={darkMode}>
      <Table columns={columns} data={data} />
    </Styles>
  );
});
