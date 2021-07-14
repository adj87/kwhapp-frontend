import React, { useContext, useEffect } from "react";
import api from "../../api";
import Body from "../../components/Body";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Table from "../../components/Table";
import { defaultValues, tableColumns } from "../../constants";
import { MainContext } from "../../contexts/MainContext";
import { CreateEditModal } from "./CreateEditModal";
import MoreOptions from "./MoreOptions";

const Home = () => {
  const { data, setDocumentToModal, setData } = useContext(MainContext);

  useEffect(() => {
    api.getConsumptions().then(({ data }) => setData(data));
  }, []);

  return (
    <>
      <Header />
      <Body>
        <Table
          columns={tableColumns}
          data={data}
          onRowClick={(row) => setDocumentToModal(row)}
          onAdd={() => setDocumentToModal(defaultValues)}
          onDelete={({ _id }) =>
            api
              .deleteConsumption(_id)
              .then(() => api.getConsumptions().then(({ data }) => setData(data)))
          }
        />
      </Body>
      <CreateEditModal />

      <MoreOptions />

      <Footer />
    </>
  );
};

export default Home;
