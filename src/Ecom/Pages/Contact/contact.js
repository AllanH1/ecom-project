import React from "react";

const Contact = props => {
  // runs when you hit "SUBMIT"
  const getFormData = e => {
    e.preventDefault();
    let contactForm = document.querySelector(".form");
    let question = {
      topic: contactForm.elements[0].value,
      firstName: contactForm.elements[1].value,
      lastName: contactForm.elements[2].value,
      email: contactForm.elements[3].value,
      question: contactForm.elements[4].value
    };
    return props.postQuestion(question);
  };

  return (
    <div>
      <main
        className="content"
        style={{
          maxWidth: "550px",
          margin: "0 auto",
          padding: "0 30px"
        }}
      >
        <form
          className="form"
          onSubmit={e =>
            getFormData(e)
              .then(() => console.log("it works"))
              .catch(() => console.log("it doesn't work"))
          }
        >
          <legend className="form__title">Have Questions?</legend>
          <label className="label--select" htmlFor="trees">
            Please choose a topic
          </label>
          <select id="trees" name="trees">
            <option value="Business">General Business</option>
            <option value="Cherry Blossom">Cherry Blossom</option>
            <option value="Angel Oak">Angel Oak</option>
            <option value="Grandidier's Boabab">Grandidier's Baobab</option>
            <option value="Willow">Willow</option>
            <option value="Red Maple">Red Maple</option>
            <option value="Bonsai">Bonsai</option>
          </select>
          <label className="label--text" htmlFor="firstName">
            First Name
          </label>
          <input className="form__text" type="text" id="firstName" />
          <label className="label--text" htmlFor="lastName">
            Last Name
          </label>
          <input className="form__text" type="text" id="lastName" />
          <label className="label--text" htmlFor="email">
            Email
          </label>
          <input className="form__text" type="email" id="email" />
          <label className="label--area" htmlFor="question">
            What is your question?
          </label>
          <textarea
            className="form__area"
            id="question"
            rows="10"
            col="30"
            placeholder="Type here..."
          />
          <input className="form__submit" type="submit" id="submit" />
        </form>
      </main>
    </div>
  );
};

export default Contact;
