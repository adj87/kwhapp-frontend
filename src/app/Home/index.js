import React, { useContext, useEffect } from "react";
import api from "../../api";
import Body from "../../components/Body";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Table from "../../components/Table";
import { defaultValues, tableColumns } from "../../constants";
import { MainContext } from "../../contexts/MainContext";
import { CreateEditModal } from "./CreateEditModal";

const Home = () => {
  const { data, setDocumentToModal, setData } = useContext(MainContext);

  useEffect(() => {
    api.getConsumptions().then(({ data }) => setData(data));
  }, []);
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
      <input type="file" id="myFile" name="filename" onChange={onChange} />
      <Footer />
    </>
  );
};

export default Home;
