import ContactInfoCard from './ContactInfoCard';

const ContactInfoSection = ({ cards, sectionTitle }) => {
  return (
    <section>
      <h2 className="contact-section__title">{sectionTitle}</h2>
      <div className="d-flex flex-column gap-3">
        {cards.map((card) => (
          <ContactInfoCard
            key={card.id}
            id={card.id}
            icon={card.icon}
            title={card.title}
            lines={card.lines}
          />
        ))}
      </div>
    </section>
  );
};

export default ContactInfoSection;
