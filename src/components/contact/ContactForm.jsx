import { useState, useCallback } from 'react';
import ContactFormField from './ContactFormField';

const ContactForm = ({ fields, initialState, strings }) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
      setFormData(initialState);
    },
    [formData, initialState]
  );

  return (
    <section>
      <h2 className="contact-section__title">{strings.sectionTitle}</h2>
      <div className="card contact-card border shadow-sm">
        <div className="card-body p-4 p-md-5">
          <h3 className="contact-form-card__title mb-1">{strings.cardTitle}</h3>
          <p className="contact-form-card__subtitle mb-4">{strings.cardSubtitle}</p>
          <form onSubmit={handleSubmit} noValidate>
            <div className="row g-3">
              {fields.map((field) => (
                <ContactFormField
                  key={field.id}
                  field={field}
                  value={formData[field.name]}
                  onChange={handleChange}
                />
              ))}
            </div>
            <button type="submit" className="btn contact-btn--primary w-100 mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m22 2-7 20-4-9-9-4z" />
                <path d="M22 2 11 13" />
              </svg>
              {strings.submitButton}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
