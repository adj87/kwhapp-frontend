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
import { Label } from "../../components/Input";

const SelectorWrapper = styled.div``;

export default function ChartModal() {
  const { data, setShowChartModal } = useContext(MainContext);
  const [dataKey, setDataKey] = useState("consumption");
  const distinctDays = [...new Set(data.map((item) => item.date))];
  const [daysSelected, setDaysSelected] = useState([distinctDays[0]]);

  return (
    <Modal header="Charts" onAccept={() => setShowChartModal(false)} onAcceptText={"Ok"} size="lg">
      <SelectorWrapper>
        <Label>Select one category to show</Label>
        <select onChange={(e) => setDataKey(e.target.value)}>
          <option value="consumption" selected={dataKey === "consumption"}>
            consumption
          </option>
          <option value="price" selected={dataKey === "price"}>
            price
          </option>
          <option value="cost_per_hour" selected={dataKey === "cost_per_hour"}>
            Cost per hour
          </option>
        </select>
      </SelectorWrapper>
      <SelectorWrapper>
        <Label>Select one or multiple dates to compare with each other</Label>
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
            <option value={el} selected={daysSelected.includes(el)}>
              {el}
            </option>
          ))}
        </select>
      </SelectorWrapper>
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart
          width={500}
          height={400}
          style={{ backgroundColor: "#f3fff2", borderRadius: "10px", marginTop: "10px" }}
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
  );
}
