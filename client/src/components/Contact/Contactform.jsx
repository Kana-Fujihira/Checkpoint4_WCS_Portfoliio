import { useState } from "react";

function Contactform() {
  const [contactValues, setContactValues] = useState({
    name: "",
    email: "",
    phonenumber: "",
    companyname: "",
    message: "",
  });

  const handleInputContact = (event) => {
    setContactValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  console.info(contactValues);

  const handleSend = async (event) => {
    event.preventDefault();

    if (Object.keys.length !== 0) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/contact`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: contactValues.name,
              email: contactValues.email,
              phonenumber: contactValues.phonenumber,
              companyname: contactValues.companyname,
              message: contactValues.message,
            }),
          }
        );
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
      <form onSubmit={handleSend}>
        <div>
          <label htmlFor="name">
            <p>Name</p>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            value={contactValues.name}
            onChange={handleInputContact}
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
            value={contactValues.email}
            onChange={handleInputContact}
          />
        </div>
        <div>
          <label htmlFor="number">
            <p>Phone number</p>
          </label>
          <input
            type="number"
            placeholder="09074286987"
            name="number"
            value={contactValues.number}
            onChange={handleInputContact}
          />
        </div>
        <div>
          <label htmlFor="name">
            <p>Company name</p>
          </label>
          <input
            type="companyname"
            placeholder="WAKAZE FRANCE"
            name="companyname"
            value={contactValues.companyname}
            onChange={handleInputContact}
          />
        </div>
        <div>
          <label htmlFor="message">
            <p>Your message</p>
          </label>
          <input
            type="text"
            placeholder="Your message"
            name="message"
            value={contactValues.message}
            onChange={handleInputContact}
          />
        </div>
        <button type="submit">
          <p>Send</p>
        </button>
      </form>
    </div>
  );
}

export default Contactform;
