import { useState } from "react";

const URL = import.meta.env.VITE_API_URL;

function SignUp() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  //   const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  console.info(values);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // const validationErrors = Validation(values);
    // setErrors(validationErrors);

    if (Object.keys.length === 0) {
      try {
        const response = await fetch(`${URL}/api/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            password: values.password,
          }),
        });
        if (!response.ok) {
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
    <div>
      {" "}
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

          <button type="submit">
            <p>SignUp</p>
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
