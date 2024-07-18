function Validation(values) {
  const errors = {};
  const namePattern = /^[a-zA-Z][a-zA-Z0-9]{2,15}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,255}$/;

  if (values.name.trim() === "") {
    errors.name = "Name is required";
  } else if (!namePattern.test(values.name)) {
    errors.name = "Name is not validated";
  }

  if (values.email.trim() === "") {
    errors.email = "Email is required";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "Email is not validated";
  }

  if (values.password.trim() === "") {
    errors.password = "Password is required";
  } else if (!passwordPattern.test(values.password)) {
    errors.password =
      "The password must contain at least 5 characters, an upper case letter, a lower case letter and a number";
  } else if (values.password.trim().length > 255) {
    errors.password = "The password must not exceed 255 characters.";
  }

  return errors;
}

export default Validation;
