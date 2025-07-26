
import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import "./Diet.css";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const defaultDiets = [
  { name: "2 Eggs", calories: 140, protein: 12 },
  { name: "1 Cup Rice", calories: 200, protein: 4 },
  { name: "Grilled Chicken (100g)", calories: 165, protein: 31 },
  { name: "Banana", calories: 90, protein: 1 },
  { name: "Milk (1 glass)", calories: 120, protein: 8 },
  { name: "1 Chapati", calories: 70, protein: 2 },
  { name: "Paneer (50g)", calories: 130, protein: 11 },
];

const Diet = () => {
  const [dietList, setDietList] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);
  const [totalProtein, setTotalProtein] = useState(0);
  const [search, setSearch] = useState("");
  const [customName, setCustomName] = useState("");
  const [customCal, setCustomCal] = useState("");
  const [customProtein, setCustomProtein] = useState("");
  const [usePieChart, setUsePieChart] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("dietLogs");
    if (stored) {
      const parsed = JSON.parse(stored);
      setDietList(parsed);
      updateTotals(parsed);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("dietLogs", JSON.stringify(dietList));
  }, [dietList]);

  const updateTotals = (data) => {
    const cal = data.reduce((sum, d) => sum + d.calories, 0);
    const prot = data.reduce((sum, d) => sum + d.protein, 0);
    setTotalCalories(cal);
    setTotalProtein(prot);
  };

  const addDiet = (diet) => {
    const updated = [...dietList, diet];
    setDietList(updated);
    updateTotals(updated);
  };

  const deleteItem = (index) => {
    const updated = [...dietList];
    updated.splice(index, 1);
    setDietList(updated);
    updateTotals(updated);
  };

  const handleAddCustom = () => {
    if (!customName || !customCal || !customProtein) return;
    const diet = {
      name: customName,
      calories: parseInt(customCal),
      protein: parseInt(customProtein),
    };
    addDiet(diet);
    setCustomName("");
    setCustomCal("");
    setCustomProtein("");
  };

  const filteredDiets = defaultDiets.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const COLORS = ["#ff7f50", "#87ceeb"];

  const macroData = [
    { name: "Calories", value: totalCalories },
    { name: "Protein", value: totalProtein * 4 }, 
  ];

  return (
    <>
    <div className="diet-container">
      <h1>🍽️ Smart Diet Logger</h1>

      <div className="search-section">
        <input
          type="text"
          placeholder="Search diet item..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="predefined-buttons">
        {filteredDiets.length > 0 ? (
          filteredDiets.map((item, idx) => (
            <button key={idx} onClick={() => addDiet(item)}>
              ➕ {item.name}
            </button>
          ))
        ) : (
          <p>No matching items found.</p>
        )}
      </div>

      <div className="custom-add">
        <h3>Add Custom Diet</h3>
        <input
          type="text"
          placeholder="Diet name"
          value={customName}
          onChange={(e) => setCustomName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Calories"
          value={customCal}
          onChange={(e) => setCustomCal(e.target.value)}
        />
        <input
          type="number"
          placeholder="Protein (g)"
          value={customProtein}
          onChange={(e) => setCustomProtein(e.target.value)}
        />
        <button onClick={handleAddCustom}>➕ Add Custom</button>
      </div>

      <div className="diet-log">
        <h2>📒 Logged Diets</h2>
        {dietList.length === 0 ? (
          <p>No items added yet.</p>
        ) : (
          <ul>
            {dietList.map((item, idx) => (
              <li key={idx}>
                <span className="diet-name">{item.name}</span>
                <span className="calorie-protein">
                  {item.calories} kcal | {item.protein}g protein
                </span>
                <button className="delete-btn" onClick={() => deleteItem(idx)}>
                  🗑️
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="summary">
        <h3>🔥 Total Calories: {totalCalories} kcal</h3>
        <h3>💪 Total Protein: {totalProtein} g</h3>
      </div>

      <div className="chart-container">
        <h2>📊 Nutrient Chart</h2>
        <button className="toggle-chart" onClick={() => setUsePieChart(!usePieChart)}>
          Switch to {usePieChart ? "Bar" : "Pie"} Chart
        </button>
        <ResponsiveContainer width="100%" height={300}>
          {usePieChart ? (
            <PieChart>
              <Pie
                data={macroData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {macroData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          ) : (
            <BarChart data={macroData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
      
    </div>
    <Footer/>
    </>
  );
};

export default Diet;
