import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CategorySelect = () => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (category && difficulty) {
      navigate(`/${category}/quiz`);
    }
  };

  return (
    <div>
      <h1>Select Category and Difficulty</h1>
      <form onSubmit={handleSubmit}>
        <label>Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select a category</option>
          <option value="science">Science</option>
          <option value="social-studies">Social Studies</option>
          <option value="english">English</option>
        </select>

        <label>Difficulty:</label>
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          required
        >
          <option value="">Select difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <button type="submit">Start Quiz</button>
      </form>
    </div>
  );
};

export default CategorySelect;
