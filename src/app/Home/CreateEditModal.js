import { useFormik } from "formik";
import React, { useContext } from "react";
import styled, { useTheme } from "styled-components";
import api from "../../api";
import Input from "../../components/Input";
import Modal from "../../components/Modal";
import { validationConsumptionSchema } from "../../constants";
import { MainContext } from "../../contexts/MainContext";

const InputsWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 20px;
`;

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.palette.error};
  font-family: Poppins Bold;
`;

export const CreateEditModal = () => {
  const theme = useTheme();
  const { documentToModal, setDocumentToModal, setData } = useContext(MainContext);
  const { values, setFieldValue, errors, submitForm, submitCount } = useFormik({
    initialValues: documentToModal,
    enableReinitialize: true,
    validationSchema: validationConsumptionSchema,
    onSubmit: (values) => {
      const finalRequest = values._id ? api.editConsumption : api.createConsumption;
      return finalRequest(values)
        .then(() => {
          api.getConsumptions().then(({ data }) => {
            setData(data);
            setDocumentToModal(null);
          });
        })
        .catch(({ message }) => {
          alert(
            "Something went wrong!! There is only one row per date and time. \nMake sure you are not attempting to insert a duplicated value",
          );
        });
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
        {submitCount > 0 &&
          Object.keys(errors).map((err) => {
            return <ErrorMessage theme={theme}>{errors[err]}</ErrorMessage>;
          })}
      </Modal>
    )
  );
};
