import * as yup from "yup";

export const API_URL = "http://localhost:3001";

export const theme = {
  breakpoints: {
    xs: 300,
    sm: 500,
    md: 700,
    lg: 1021,
  },
  palette: {
    primary: {
      1: "#004B23",
      2: "#006400",
      3: "#007200",
      4: "#008000",
      5: "#38B000",
      6: "#70E000",
      7: "#9EF01A",
    },

    blue: "#1AE3F0",
    error: "#FF5858",
    success: "#47ad34",
    grey: {
      1: "#2D3748",
      2: "#ACB4C2",
    },
    bodyColor: "aliceblue",
  },
};

export const device = {
  deviceXs: `(min-width: ${theme.breakpoints.xs}px)`,
  deviceSm: `(min-width: ${theme.breakpoints.sm}px)`,
  deviceMd: `(min-width: ${theme.breakpoints.md}px)`,
  deviceLg: `(min-width: ${theme.breakpoints.lg}px)`,
};

export const defaultValues = {
  consumption: null,
  cost_per_hour: null,
  date: null,
  price: null,
  time: null,
};

export const tableColumns = [
  {
    Header: "Name",
    columns: [
      { Header: "Date", accessor: "date" },
      { Header: "Time", accessor: "time" },
      { Header: "Consumption (Wh)", accessor: "consumption" },
      { Header: "Price (€/kWh)", accessor: "price" },
      { Header: "Cost per hour (€)", accessor: "cost_per_hour" },
    ],
  },
];

export const validationConsumptionSchema = yup.object().shape({
  date: yup
    .string()
    .nullable()
    .required()
    .matches(/^\d{4}-\d{2}-\d{2}$/, "date must be YYYY-MM-DD format"),
  time: yup.number().typeError("time must be a number").nullable().max(23).min(0).required(),
  consumption: yup.number().typeError("time must be a number").nullable().required(),
  price: yup.number().typeError("time must be a number").nullable().required(),
  cost_per_hour: yup.number().typeError("time must be a number").nullable().required(),
});
