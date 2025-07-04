import React from "react";
import { useAuth } from "../contexts/AuthContext";

// Example component showing how to use the context
function ExampleUsage() {
  const {
    inputValue,
    user,
    isLoggedIn,
    setInputValue,
    setInputValueTo100,
    login,
    logout,
  } = useAuth();

  const handleLogin = () => {
    login({ name: "John Doe", email: "john@example.com" });
  };

  const handleInputChange = (e) => {
    setInputValue(Number(e.target.value));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Context API Example</h2>

      {/* Input Value Section */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Input Value: {inputValue}</h3>
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a number"
        />
        <button onClick={setInputValueTo100}>Set to 100</button>
      </div>

      {/* Authentication Section */}
      <div>
        <h3>Authentication Status</h3>
        <p>Logged in: {isLoggedIn ? "Yes" : "No"}</p>
        {isLoggedIn && user && (
          <div>
            <p>Welcome, {user.name}!</p>
            <p>Email: {user.email}</p>
          </div>
        )}

        <div>
          {!isLoggedIn ? (
            <button onClick={handleLogin}>Login</button>
          ) : (
            <button onClick={logout}>Logout</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ExampleUsage;
