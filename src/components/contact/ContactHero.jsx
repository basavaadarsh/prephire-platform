const ContactHero = ({ title, subtitle }) => {
  return (
    <section className="contact-hero text-center">
      <div className="container">
        <h1 className="contact-hero__title">{title}</h1>
        <p className="contact-hero__subtitle">{subtitle}</p>
      </div>
    </section>
  );
};

export default ContactHero;
