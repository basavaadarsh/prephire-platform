const MapPlaceholder = ({ title, label, address }) => {
  return (
    <div className="card contact-card border shadow-sm">
      <div className="card-body p-4">
        <h4 className="fw-bold mb-3">{title}</h4>
        <div
          className="contact-map__placeholder d-flex flex-column align-items-center justify-content-center rounded-3"
          role="img"
          aria-label={`${label} - ${address}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-secondary mb-2"
            aria-hidden="true"
          >
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <p className="text-secondary fw-medium mb-1">{label}</p>
          <p className="text-secondary small mb-0">{address}</p>
        </div>
      </div>
    </div>
  );
};

export default MapPlaceholder;
