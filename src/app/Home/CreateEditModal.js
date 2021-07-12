import React, { useContext } from "react";
import styled from "styled-components";
import Input from "../../components/Input";
import Modal from "../../components/Modal";
import { MainContext } from "../../contexts/MainContext";

const InputsWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 20px;
`;

export const CreateEditModal = () => {
  const { documentToModal, setDocumentToModal } = useContext(MainContext);
  return (
    documentToModal && ( //only shows if there is a document in the context
      <Modal
        header={documentToModal?.id ? "Edit consumption" : "Create consumption"}
        onCancel={() => setDocumentToModal(null)}
        onAccept={() => console.log("aceptado")}
      >
        <InputsWrapper>
          <Input
            label={"hola"}
            name="input1"
            onChange={(name, value) => console.log(name, value)}
          />
          <Input
            label={"hola"}
            name="input2"
            onChange={(name, value) => console.log(name, value)}
          />
          <Input
            label={"hola"}
            name="input3"
            onChange={(name, value) => console.log(name, value)}
          />
          <Input
            label={"hola"}
            name="input4"
            onChange={(name, value) => console.log(name, value)}
          />
        </InputsWrapper>
      </Modal>
    )
  );
};
