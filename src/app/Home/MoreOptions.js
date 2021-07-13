import React, { useContext } from "react";
import styled from "styled-components";
import ImportCsv from "../../components/InputFile";
import api from "../../api";
import { MainContext } from "../../contexts/MainContext";

const Wrapper = styled.div`
  display: grid;
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
    <Wrapper>
      <ImportCsv text={"Import CSV"} inverseButtonStyle handleFile={handleFile} />
    </Wrapper>
  );
};

export default MoreOptions;
