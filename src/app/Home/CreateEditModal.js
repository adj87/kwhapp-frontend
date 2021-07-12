import React from "react";
import styled from "styled-components";
import Input from "../../components/Input";
import Modal from "../../components/Modal";

const InputsWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 2px;
`;

export const CreateEditModal = ({ rowToEdit, setRowToEdit }) => {
  return (
    <Modal
      header={rowToEdit?.id ? "Edit consumption" : "Create consumption"}
      onCancel={() => setRowToEdit(null)}
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
  );
};
