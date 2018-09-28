import React from "react";

const Contact = () => {
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
        <form className="form">
          <legend className="form__title">Have Questions?</legend>
          <label className="label--select" htmlFor="trees">
            Please choose a topic
          </label>
          <select id="trees" name="trees">
            <option value="business">The business in general</option>
            <option value="cherry">Cherry Blossom</option>
            <option value="angel">Angel Oak</option>
            <option value="baobab">Grandidier's Baobab</option>
            <option value="willow">Willow</option>
            <option value="maple">Red Maple</option>
            <option value="bonsai">Bonsai</option>
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
