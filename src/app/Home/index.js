import React, { useContext } from "react";
import api from "../../api";
import Body from "../../components/Body";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
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
  const { documentToModal, setDocumentToModal } = useContext(MainContext);
  const onChange = (e) => {
    var reader = new FileReader();
    const file = e.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64 = reader.result.split("base64,")[1];
      const format = file.name.split(".")[1];
      api.importData({ base64, format });
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  };
  return (
    <>
      <Header />
      <Body>
        <Table
          columns={columns}
          data={data}
          onRowClick={(row) => setDocumentToModal(row)}
          onAdd={(row) => setDocumentToModal(row)}
          onDelete={(row) => console.log(row)}
        />
      </Body>
      <CreateEditModal />
      )
      <input type="file" id="myFile" name="filename" onChange={onChange} />
      <Footer />
    </>
  );
};

export default Home;
