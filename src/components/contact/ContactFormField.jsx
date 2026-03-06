const ContactFormField = ({ field, value, onChange }) => {
  const { id, name, label, type, placeholder, colClass, rows, required } = field;

  const inputProps = {
    id,
    name,
    className: 'form-control contact-form__input',
    placeholder,
    value,
    onChange,
    required,
    'aria-required': required,
  };

  return (
    <div className={colClass}>
      <label htmlFor={id} className="form-label contact-form__label fw-medium">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea {...inputProps} rows={rows} />
      ) : (
        <input {...inputProps} type={type} />
      )}
    </div>
  );
};

export default ContactFormField;
