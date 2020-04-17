import React from "react"
import Title from "../Title"

const Contact = () => {
  return (
    <div className="section section-spaced flex flex-col items-center">
      <Title title="contact" subtitle="us" />
      <div className="w-full mt-10">
        <form
          action="https://formspree.io/xqkdwpdr"
          method="POST"
          className="flex flex-col w-full"
        >
          <div className="input-field">
            <label htmlFor="name" className="label">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              className="input"
            />
          </div>
          <div className="input-field">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="input"
            />
          </div>
          <div className="input-field">
            <label htmlFor="message" className="label">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="10"
              placeholder="You got something to say?!"
              className="input"
            />
          </div>
          <button type="submit" className="btn btn-green btn-lg md:self-start">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
