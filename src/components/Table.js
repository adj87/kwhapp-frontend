import React, { useContext } from "react";
import styled, { withTheme } from "styled-components";
import { useTable, useSortBy, usePagination } from "react-table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faAngleLeft,
  faAngleDoubleLeft,
  faAngleRight,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import { MainContext } from "../contexts/MainContext";

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    width: 100%;
    thead {
      th {
        color: ${({ theme }) => theme.palette.grey[1]};
        border-bottom: ${({ theme, darkMode }) =>
          `3px solid ${
            darkMode ? theme.palette.grey[2] : theme.palette.grey[1]
          }`};
        padding: 10px 50px;
        font-family: Poppins ExtraBold;
        color: ${({ theme, darkMode }) =>
          darkMode ? theme.palette.grey[2] : theme.palette.grey[1]};
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
        darkMode ? theme.palette.grey[2] : theme.palette.grey[1]};
      margin: 0;
      padding: 0.5rem;
      text-align: center;
      border-bottom: ${({ theme, darkMode }) =>
        `1px solid ${
          darkMode ? theme.palette.grey[2] : theme.palette.grey[1]
        }`};
      :last-child {
        border-right: 0;
      }
    }
  }
`;

const NavigationButton = styled.button`
  width: 30px;
  height: 30px;
  cursor: pointer;
  background-color: ${({ theme, darkMode }) =>
    darkMode ? theme.palette.grey[2] : theme.palette.grey[1]};
  color: ${({ theme, darkMode }) =>
    !darkMode ? theme.palette.grey[2] : theme.palette.grey[1]};
  border: none;
  border-radius: 5px;
`;

const NavigationResume = styled.span`
  font-family: Poppins Black;
  color: ${({ theme, darkMode }) =>
    !darkMode ? theme.palette.grey[2] : theme.palette.grey[1]};
`;

function Table({ columns, data, onRowClick }) {
  const { darkMode } = useContext(MainContext);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    gotoPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    nextPage,
    pageCount,
    pageOptions,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: 0,
        pageSize: 5,
      },
    },
    useSortBy,
    usePagination
  );

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
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
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
      <tfoot
        style={{
          display: "flex",
          width: "80%",
          margin: "auto",
          alignContent: "center",
          justifyContent: "space-around",
          marginTop: "10px",
        }}
      >
        <NavigationButton
          darkMode={darkMode}
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </NavigationButton>
        <NavigationButton
          darkMode={darkMode}
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          <FontAwesomeIcon icon={faAngleDoubleLeft} />
        </NavigationButton>
        <NavigationResume>
          {pageIndex + 1} of {pageOptions.length}
        </NavigationResume>
        <NavigationButton
          darkMode={darkMode}
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </NavigationButton>
        <NavigationButton
          darkMode={darkMode}
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          <FontAwesomeIcon icon={faAngleDoubleRight} />
        </NavigationButton>
      </tfoot>
      <br />
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
