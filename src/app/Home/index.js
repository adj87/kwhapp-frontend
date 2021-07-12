import React, { useContext } from "react";
import Body from "../../components/Body";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import Table from "../../components/Table";
import { MainContext } from "../../contexts/MainContext";
import { CreateEditModal } from "./CreateEditModal";

const columns = [
  {
    Header: "Name",
    columns: [
      { Header: "Date", accessor: "date" },
      { Header: "Time", accessor: "time" },
    ],
  },
];

const data = [
  {
    date: "19/08/1987",
    time: "05:05",
  },

  {
    date: "19/08/1987",
    time: "05:05",
  },
  {
    date: "19/08/1987",
    time: "05:05",
  },
  {
    date: "19/08/1987",
    time: "05:05",
  },
  {
    date: "19/08/1987",
    time: "05:05",
  },
  {
    date: "19/08/1987",
    time: "05:05",
  },
  {
    date: "19/08/1987",
    time: "05:05",
  },
  {
    date: "19/08/1987",
    time: "05:05",
  },
  {
    date: "19/08/1987",
    time: "05:05",
  },
  {
    date: "19/08/1987",
    time: "05:05",
  },
  {
    date: "19/08/1987",
    time: "05:05",
  },
  {
    date: "19/08/1987",
    time: "05:05",
  },
  {
    date: "19/08/1987",
    time: "05:05",
  },
  {
    date: "19/08/1987",
    time: "05:05",
  },
  {
    date: "19/08/1987",
    time: "05:05",
  },
  {
    date: "19/08/1987",
    time: "05:05",
  },
  {
    date: "19/08/1987",
    time: "05:05",
  },
  {
    date: "19/08/1987",
    time: "05:05",
  },
  {
    date: "19/08/1987",
    time: "05:05",
  },
];

const Home = () => {
  const { rowToEdit, setRowToEdit } = useContext(MainContext);
  return (
    <>
      <Header />
      <Body>
        <Table
          columns={columns}
          data={data}
          onRowClick={(row) => setRowToEdit(row)}
          onAdd={(row) => setRowToEdit(row)}
        />
      </Body>
      {rowToEdit && (
        <CreateEditModal rowToEdit={rowToEdit} setRowToEdit={setRowToEdit} />
      )}
      <Footer />
    </>
  );
};

export default Home;
