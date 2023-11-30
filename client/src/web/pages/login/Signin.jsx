import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signin.css";
import { AuthContext } from "../../context/AuthContext";

export default function Signin(params) {
  const [user, setUser] = useState({
    username: undefined,
    password: undefined,
  });
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    setLoading(false);
    setError(null);
    setUser((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { dispatch } = useContext(AuthContext);
  const handleClick = async (e) => {
    e.preventDefault();
    // navigate('/');
    try {
      const res = await axios.post(
        "https://culture1.onrender.com/api/auth/register",
        user
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (err) {
      setLoading(true);
      setError("cant register");
    }
  };

  const regClick = (e) => {
    navigate("/login");
  };

  return (
    <div className="login">
      <div className="lContainer">
        <p style={{ fontSize: 40, fontWeight: "bold" }}>
          Welcome to Culture Hub{" "}
          <div style={{ fontSize: 30, fontWeight: 300 }}>
            It all begins here...
          </div>
        </p>
        <input
          type="text"
          placeholder="Give yourself a Username"
          id="username"
          onChange={handleChange}
          className="lInput userName"
        />

        <input
          type="password"
          placeholder="Type your password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Register
        </button>
        <button onClick={regClick} className="lButton">
          Login
        </button>
        {error && <span>{error}</span>}
      </div>
    </div>
  );
}
