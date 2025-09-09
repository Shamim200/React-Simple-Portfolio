import { Container } from "react-bootstrap";

const Contact = () => {
  return (
    <>
      <div className="w-100 py-3 mt-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.1135985016526!2d88.6080552141147!3d24.377351311364084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbee4ca833e0bd%3A0x419d2318e0d159f0!2sShiroil%20Colony%20Boro%20Jame%20Masjid!5e0!3m2!1sen!2sbd!4v1665136385997!5m2!1sen!2sbd"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Container>
        <h2 className="text-center text-info py-3">Contact Form</h2>
        <form action="https://formspree.io/f/moqbwkza" method="POST">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              required
              name="name"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              class="form-control"
              placeholder="Enter Your Email"
              name="email"
              required
            />
          </div>

          <div className="mb-3">
            <textarea
              name="message"
              class="form-control"
              placeholder="Message"
              rows="5"
            ></textarea>
          </div>
          <button class="btn btn-outline-primary my-4" type="submit">
            Submit form
          </button>
        </form>
      </Container>
    </>
  );
};

export default Contact;
