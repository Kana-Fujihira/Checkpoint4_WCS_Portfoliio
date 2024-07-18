import { Link } from "react-router-dom";
import { useState } from "react";
import Validation from "./signupValidation";
import styles from "./signup.module.css";
import Home from "../../assets/images/home.svg";

function SignUp() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  console.info(values);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = Validation(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/users`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: values.name,
              email: values.email,
              password: values.password,
            }),
          }
        );
        if (response.status !== 200) {
          throw new Error("Erreur lors de l'inscription");
        }
      } catch (err) {
        console.error("Erreur lors de la requête d'inscription:", err);
        console.info("Une erreur est survenue lors de l'inscription");
      }
    } else {
      console.info("Veuillez corriger les erreurs dans le formulaire");
    }
  };

  return (
    <>
      <Link to="/">
        <img className={styles.homeIcon} src={Home} alt="Home icon" />
      </Link>
      <div className={styles.signupContainer}>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">
              <p>Name</p>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={values.name}
              onChange={handleInput}
            />
            <p className={styles.errorsField}>
              {errors.name !== undefined && <span>{errors.name}</span>}
            </p>
          </div>
          <div>
            <label htmlFor="email">
              <p>Email</p>
            </label>
            <input
              type="email"
              placeholder="Your email"
              name="email"
              value={values.email}
              onChange={handleInput}
            />
            <p className={styles.errorsField}>
              {errors.email !== undefined && <span>{errors.email}</span>}
            </p>
          </div>
          <div>
            <label htmlFor="password">
              <p>Password</p>
            </label>
            <input
              type="password"
              placeholder="●●●●●●"
              name="password"
              value={values.password}
              onChange={handleInput}
            />
            <p className={styles.errorsField}>
              {errors.password !== undefined && <span>{errors.password}</span>}
            </p>
            <button type="submit">
              <p>Sign Up</p>
            </button>
            <Link to="/signin">
              <p>Sign In</p>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
