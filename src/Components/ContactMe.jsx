export default function ContactMe({ hideContact, onClick }) {
  return (
    <div id="contact-me" style={{ display: hideContact }}>
      <nav>
        <h3 onClick={onClick}>Abdul</h3>
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
