import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import styles from "./signin.module.css";
import Home from "../../assets/images/home.svg";

function SignIn() {
  const [signinInfo, setSignInInfo] = useState({
    email: "",
    password: "",
  });

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
          navigate("/admin");
          console.info(`Bienvenue`);
        } else {
          navigate("/");
          console.info(`Bienvenue`);
        }
      } else {
        console.info("Login failed with status:", response.status);
        console.info("Identifiants invalides");
      }
    } catch (error) {
      console.error("Error during login:", error);
      console.info("Une erreur est survenue lors de la connexion");
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
