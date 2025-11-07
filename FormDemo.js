import React, { useState } from "react";

const FormDemo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    setSubmitted(true);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>📋 React Form Handling Example</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "inline-block",
          textAlign: "left",
          padding: "20px",
          border: "2px solid #ddd",
          borderRadius: "10px",
        }}
      >
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ display: "block", margin: "10px 0", padding: "5px" }}
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ display: "block", margin: "10px 0", padding: "5px" }}
        />

        <label>Course:</label>
        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
          required
          style={{ display: "block", margin: "10px 0", padding: "5px" }}
        >
          <option value="">Select Course</option>
          <option value="React">React</option>
          <option value="Node.js">Node.js</option>
          <option value="MongoDB">MongoDB</option>
        </select>

        <button type="submit" style={{ marginTop: "10px" }}>
          Submit
        </button>
      </form>

      {/* Conditional rendering after submission */}
      {submitted && (
        <div style={{ marginTop: "30px" }}>
          <h3>✅ Form Submitted Successfully!</h3>
          <p>
            <strong>Name:</strong> {formData.name}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <p>
            <strong>Course:</strong> {formData.course}
          </p>
        </div>
      )}
    </div>
  );
};

export default FormDemo;
