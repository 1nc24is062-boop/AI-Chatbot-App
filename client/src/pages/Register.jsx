import { Link } from "react-router-dom";
function Register() {
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
        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Full Name"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

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

        <button
          style={{
            width: "100%",
            padding: "10px",
          }}
        >
          Register
        </button>
        <p>
  Already have an account? <Link to="/">Login</Link>
</p>
      </div>
    </div>
  );
}

export default Register;