import { Link } from "react-router-dom";
function Login() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          border: "1px solid gray",
          padding: "30px",
          borderRadius: "10px",
          width: "300px",
        }}
      >
        <h2>AI Chatbot Login</h2>

        <input
          type="email"
          placeholder="Email"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <Link to="/chat">
  <button
    style={{
      width: "100%",
      padding: "10px",
    }}
  >
    Login
  </button>
</Link>
        <p>
  Don't have an account? <Link to="/register">Register</Link>
</p>
      </div>
    </div>
  );
}

export default Login;