function ValidationContact(contactValues) {
  const errors = {};
  const namePattern = /^[a-zA-Z][a-zA-Z0-9]{2,15}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^\+?[0-9\s-()]{8,20}$/;
  const companyPattern = /^[a-zA-Z][a-zA-Z0-9]{2,15}$/;
  const messagePattern = /^[a-zA-Z][a-zA-Z0-9]{2,300}$/;

  if (contactValues.name.trim() === "") {
    errors.name = "Your name required";
  } else if (!namePattern.test(contactValues.name)) {
    errors.name = "Your name is not validated ";
  }

  if (contactValues.email.trim() === "") {
    errors.email = "Your email is required";
  } else if (!emailPattern.test(contactValues.email)) {
    errors.email = "Your email is not validated";
  }
  if (contactValues.phonenumber.trim() === "") {
    errors.phonenumber = "Your phonenumber is required";
  } else if (!phonePattern.test(contactValues.phonenumber)) {
    errors.phonenumber = "Le phonenumber is not validated";
  }

  if (contactValues.companyname.trim() === "") {
    errors.companyname = "Your companyname is required";
  } else if (!companyPattern.test(contactValues.companyname)) {
    errors.companyname = "Your companyname is not validated";
  }

  if (contactValues.message.trim() === "") {
    errors.name = "Your message is required";
  } else if (!messagePattern.test(contactValues.message)) {
    errors.message = "Your message is not validated";
  }

  return errors;
}

export default ValidationContact;
