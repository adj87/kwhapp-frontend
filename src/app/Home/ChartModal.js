import React, { useContext, useState } from "react";
import styled from "styled-components";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { MainContext } from "../../contexts/MainContext";
import Modal from "../../components/Modal";
import { listOfColorsForCharts } from "../../constants";

const SelectorWrapper = styled.div``;
const CustomLabel = styled.label`
  font-family: Poppins Bold;
`;

export default function App() {
  const { data, setShowChartModal, showChartModal } = useContext(MainContext);
  const [dataKey, setDataKey] = useState("consumption");
  const distinctDays = [...new Set(data.map((item) => item.date))];
  const [daysSelected, setDaysSelected] = useState([distinctDays[0]]);

  return (
    (showChartModal && data.length) > 0 && (
      <Modal
        header="Charts"
        onCancel={() => setShowChartModal(false)}
        onAccept={() => setShowChartModal(false)}
        size="lg"
      >
        <SelectorWrapper>
          <CustomLabel>Select one category to show</CustomLabel>
          <select onChange={(e) => setDataKey(e.target.value)}>
            <option value="consumption">consumption</option>
            <option value="price">price</option>
            <option value="cost_per_hour">Cost per hour</option>
          </select>
        </SelectorWrapper>
        <SelectorWrapper>
          <CustomLabel>Select one or multiple dates to compare with each other</CustomLabel>
          <select
            onChange={(e) => {
              const selectedOnes = [...e.target.options]
                .filter((o) => o.selected)
                .map((o) => o.value);
              setDaysSelected(selectedOnes);
            }}
            multiple
          >
            {distinctDays.map((el) => (
              <option value={el}>{el}</option>
            ))}
          </select>
        </SelectorWrapper>
        <ResponsiveContainer width="100%" height={400}>
          <ScatterChart
            width={500}
            height={400}
            style={{ backgroundColor: "white", borderRadius: "10px", marginTop: "10px" }}
          >
            <CartesianGrid />
            <XAxis
              dataKey="time"
              name="Time"
              unit="h"
              type="category"
              allowDuplicatedCategory={false}
            />
            <YAxis type="number" dataKey={dataKey} name={dataKey} unit="" />

            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Legend />
            {daysSelected.map((day, i) => (
              <Scatter
                name={`${dataKey}-${day}`}
                data={data.filter((el) => el.date === day).sort((a, b) => a.time - b.time)}
                fill={listOfColorsForCharts[i + 1]}
                line
                shape="circle"
              />
            ))}
          </ScatterChart>
        </ResponsiveContainer>
      </Modal>
    )
  );
}
