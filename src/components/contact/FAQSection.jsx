import FAQItem from './FAQItem';

const FAQSection = ({ items, title, subtitle }) => {
  return (
    <section className="contact-faq">
      <div className="text-center mb-4 mb-md-5">
        <h2 className="contact-faq__title mb-2">{title}</h2>
        <p className="contact-faq__subtitle mb-0">{subtitle}</p>
      </div>
      <div className="contact-faq__list d-flex flex-column gap-3 mx-auto">
        {items.map((item) => (
          <FAQItem
            key={item.id}
            id={item.id}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
