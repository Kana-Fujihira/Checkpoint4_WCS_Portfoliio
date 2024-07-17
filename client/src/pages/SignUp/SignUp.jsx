import { useState } from "react";

function SignUp() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  console.info(values);

  //   const handleSubmit = async (event) => {
  //     event.preventDefault();

  //   }

  return (
    <div>
      <div>
        <form>
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
        </form>
      </div>
      <div>
        <form>
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
        </form>
      </div>
      <div>
        <form>
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
        </form>
      </div>
    </div>
  );
}

export default SignUp;
