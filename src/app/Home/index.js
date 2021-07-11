import React from "react";
import Body from "../../components/Body";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Table from "../../components/Table";

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
];

const Home = () => {
  return (
    <>
      <Header />
      <Body>
        <Table columns={columns} data={data} />
      </Body>
      <Footer />
    </>
  );
};

export default Home;
