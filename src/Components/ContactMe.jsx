export default function ContactMe({ hideContact }) {
  return (
    <div id="contact-me" style={{ display: hideContact }}>
      <nav>
        <h3>Abdul</h3>
      </nav>
      <div>
        <input type="text" placeholder="Email Title" />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button>send email</button>
      </div>
    </div>
  );
}
