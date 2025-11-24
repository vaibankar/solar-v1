import ContactForm from '../components/ContactForm.jsx';

const ContactPage = () => (
  <div className="grid md:grid-cols-2 gap-8 items-start">
    <ContactForm />
    <section className="card space-y-4 text-sm text-white/70">
      <h3 className="text-2xl text-white font-semibold">Reach our engineers</h3>
      <p>+91 8008 123 456 · hello@solarone.energy</p>
      <p>
        4th Floor, Sunriver Building
        <br />
        Koramangala, Bengaluru — 560047
      </p>
      <p>Working hours: 9AM – 7PM IST (24/7 NOC for monitoring customers)</p>
    </section>
  </div>
);

export default ContactPage;

