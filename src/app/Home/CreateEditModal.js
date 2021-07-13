import { useFormik } from "formik";
import React, { useContext } from "react";
import styled from "styled-components";
import api from "../../api";
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
  const { values, setFieldValue, errors, submitForm } = useFormik({
    initialValues: documentToModal,
    enableReinitialize: true,
    onSubmit: (values) => {
      if (values._id) return api.editConsumption(values);
      return api.createConsumption(values);
    },
  });
  return (
    documentToModal && ( //only shows if there is a document in the context
      <Modal
        header={documentToModal?._id ? "Edit consumption" : "Create consumption"}
        onCancel={() => setDocumentToModal(null)}
        onAccept={submitForm}
      >
        <InputsWrapper>
          <Input
            label={"Date"}
            name="date"
            value={values?.date}
            onChange={setFieldValue}
            placeholder={"YYYY-MM-DD"}
          />
          <Input label={"Time"} name="time" value={values?.time} onChange={setFieldValue} />
          <Input
            label={"Consumption (Wh)"}
            name="consumption"
            value={values?.consumption}
            onChange={setFieldValue}
          />
          <Input
            label={"Price (€/kWh)"}
            name="price"
            value={values?.price}
            onChange={setFieldValue}
          />
          <Input
            label={"Cost per hour (€)"}
            name="cost_per_hour"
            value={values?.cost_per_hour}
            onChange={setFieldValue}
          />
        </InputsWrapper>
      </Modal>
    )
  );
};
