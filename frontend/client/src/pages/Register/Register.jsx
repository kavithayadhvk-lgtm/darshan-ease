import "./Register.css";

function Register() {
  return (
    <div className="register">
      <h1>Create Account</h1>

      <form>
        <input
          type="text"
          placeholder="Enter name"
        />

        <input
          type="email"
          placeholder="Enter email"
        />

        <input
          type="password"
          placeholder="Create password"
        />

        <button type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;