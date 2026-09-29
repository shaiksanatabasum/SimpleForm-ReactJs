import React, { useState } from "react";

function SimpleForm() {
  // Define state variables for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    alert(`Name: ${name}\nEmail: ${email}`);

    // Optionally clear fields
    setName("");
    setEmail("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>React Form Example</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ margin: "10px" }}>
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div style={{ margin: "10px" }}>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SimpleForm;