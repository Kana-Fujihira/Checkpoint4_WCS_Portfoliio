import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import styles from "./signin.module.css";
import Home from "../../assets/images/home.svg";
import { useUserContext } from "../../context/UserContext";

function SignIn() {
  const [signinInfo, setSignInInfo] = useState({
    email: "",
    password: "",
  });

  const notifySuccess = (text) => toast.success(text);
  const notifyError = (text) => toast.error(text);
  const { login } = useUserContext();

  const navigate = useNavigate();

  const handleSignInInfo = (event) => {
    setSignInInfo((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  console.info(signinInfo);

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (signinInfo.email.trim() === "" || signinInfo.password.trim() === "") {
      console.info("Pseudo et mot de passe doivent être renseignés");
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signinInfo),
      });

      if (response.status === 200) {
        const responseData = await response.json();
        console.info("API response:", responseData);

        if (signinInfo.email === "kana@kana.com") {
          login(responseData.user);
          navigate("/admin");
          notifySuccess(`Welcome Admin`);
        } else {
          navigate("/");
          notifySuccess(`Welcom Visitor`);
        }
      } else {
        notifyError("Login failed with status:", response.status);
      }
    } catch (error) {
      console.error("Error during login:", error);
      notifyError("Error has occurred during connection");
    }
  };

  return (
    <>
      <Link to="/">
        <img className={styles.homeIcon} src={Home} alt="Home icon" />
      </Link>
      <div className={styles.signinContainer}>
        <form onSubmit={handleSignIn}>
          <div>
            <label htmlFor="email">
              <p>Email</p>
            </label>
            <input
              type="email"
              placeholder="Your email"
              name="email"
              value={signinInfo.email}
              onChange={handleSignInInfo}
            />
          </div>
          <div>
            <label htmlFor="password">
              <p>Password</p>
            </label>
            <input
              type="password"
              placeholder="●●●●●●"
              name="password"
              value={signinInfo.password}
              onChange={handleSignInInfo}
            />

            <button type="submit">
              <p>SignIn</p>
            </button>
          </div>
        </form>
        <Link to="/signup">
          <p>Signup</p>
        </Link>
      </div>
    </>
  );
}

export default SignIn;
