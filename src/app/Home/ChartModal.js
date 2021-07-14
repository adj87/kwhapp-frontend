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
                fill={colors[i + 1]}
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

const colors = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
  "#80B300",
  "#809900",
  "#E6B3B3",
  "#6680B3",
  "#66991A",
  "#FF99E6",
  "#CCFF1A",
  "#FF1A66",
  "#E6331A",
  "#33FFCC",
  "#66994D",
  "#B366CC",
  "#4D8000",
  "#B33300",
  "#CC80CC",
  "#66664D",
  "#991AFF",
  "#E666FF",
  "#4DB3FF",
  "#1AB399",
  "#E666B3",
  "#33991A",
  "#CC9999",
  "#B3B31A",
  "#00E680",
  "#4D8066",
  "#809980",
  "#E6FF80",
  "#1AFF33",
  "#999933",
  "#FF3380",
  "#CCCC00",
  "#66E64D",
  "#4D80CC",
  "#9900B3",
  "#E64D66",
  "#4DB380",
  "#FF4D4D",
  "#99E6E6",
  "#6666FF",
];
