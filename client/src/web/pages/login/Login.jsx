import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signin.css";
import { AuthContext } from "../../context/AuthContext";

export default function Login(params) {
  const [validuser, setUser] = useState({
    username: undefined,
    password: undefined,
  });
  // const [err,setErr]=useState(false);
  const { error, user, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setLoading(false);
    setUser((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "https://culture1.onrender.com/api/auth/login",
        validuser
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      if (res.data === "Incorrect email" || res.data === "login failed")
        setLoading(true);
      else navigate("/");
    } catch (err) {
      setLoading(true);
      dispatch({ type: "LOGIN_FAILED", payload: err.response.data });
    }
  };

  const regClick = (e) => {
    navigate("/register");
  };

  return (
    <div className="login">
      <div className="lContainer">
        <p style={{ fontSize: 40, fontWeight: "bold" }}>
          Welcome to Culture Hub{" "}
          <div style={{ fontSize: 30, fontWeight: 300 }}>
            Start Exploring...
          </div>
        </p>
        <input
          type="text"
          placeholder="Your Username"
          className="userName"
          id="username"
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Enter your password..."
          id="password"
          onChange={handleChange}
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button>
        <button onClick={regClick} className="lButton">
          Register
        </button>
        {error && <span>{error}</span>}
      </div>
    </div>
  );
}
