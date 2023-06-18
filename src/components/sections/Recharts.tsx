"use client";

import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";

interface Data {
  name: string;
  instances: number;
}

export default function Recharts() {
  const data = [
    { name: "January", uv: 1200, pv: 800 },
    { name: "February", uv: 1500, pv: 1000 },
    { name: "March", uv: 900, pv: 600 },
    { name: "April", uv: 1800, pv: 1200 },
    { name: "May", uv: 1600, pv: 1100 },
    { name: "June", uv: 1400, pv: 900 },
    { name: "July", uv: 2000, pv: 1300 },
    { name: "August", uv: 1100, pv: 700 },
    { name: "September", uv: 1700, pv: 1000 },
    { name: "October", uv: 1900, pv: 1200 },
    { name: "November", uv: 1300, pv: 800 },
    { name: "December", uv: 1500, pv: 1000 },
  ];

  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart data={data} margin={{ top: 10, right: 20, bottom: 10, left: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" style={{ fontSize: "0.75rem" }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="uv" fill="#007bff" />
        <Bar dataKey="pv" fill="#44dde0" />
      </BarChart>
    </ResponsiveContainer>
  );
}
