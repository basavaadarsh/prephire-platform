import { memo, useState, useCallback } from 'react';

const FAQItem = memo(({ id, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerId = `${id}-trigger`;
  const panelId = `${id}-panel`;

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className="card contact-card border shadow-sm">
      <div className="card-body p-4">
        <button
          id={triggerId}
          className="contact-faq__trigger d-flex align-items-center justify-content-between w-100 border-0 bg-transparent p-0 text-start"
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={toggle}
        >
          <span className="contact-faq__question">{question}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`contact-faq__chevron ${isOpen ? 'contact-faq__chevron--open' : ''}`}
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
        <div
          id={panelId}
          role="region"
          aria-labelledby={triggerId}
          hidden={!isOpen}
          className={`contact-faq__panel ${isOpen ? 'contact-faq__panel--open' : ''}`}
        >
          <p className="contact-faq__answer mb-0 mt-3">{answer}</p>
        </div>
      </div>
    </div>
  );
});

FAQItem.displayName = 'FAQItem';

export default FAQItem;
