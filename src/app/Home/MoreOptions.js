import React, { useContext } from "react";
import styled from "styled-components";
import ImportCsv from "../../components/InputFile";
import api from "../../api";
import { MainContext } from "../../contexts/MainContext";

const Wrapper = styled.div`
  width: 1000px;
  margin: auto;
  margin-top: 50px;
  display: grid;
  grid-template-columns: 150px 150px;
  justify-content: center;
  grid-gap: 20px;
`;
const MoreOptions = () => {
  const { setData } = useContext(MainContext);
  const handleFile = ({ base64, format, name }) => {
    if (format === "csv") {
      return api
        .importData({ base64, format })
        .then(() => alert(`The file ${name}.${format} has been imported successfully`))
        .then(() => api.getConsumptions().then(({ data }) => setData(data)))
        .catch(() =>
          alert(
            "Something went wrong!! There is only one row per date and time. \nMake sure you are not attempting to insert a duplicated value",
          ),
        );
    }
    return alert("csv format required");
  };

  return (
    <>
      <Wrapper>
        <ImportCsv text={"Import CSV"} inverseButtonStyle handleFile={handleFile} />
        <ImportCsv text={"Import CSV"} inverseButtonStyle handleFile={handleFile} />
      </Wrapper>
    </>
  );
};

export default MoreOptions;
