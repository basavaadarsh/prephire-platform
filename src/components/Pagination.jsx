import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Job listings pagination" className="mt-4">
      <ul className="pagination justify-content-center mb-0">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            style={{ fontSize: '14px', color: '#374151', borderColor: '#e5e7eb' }}
          >
            Previous
          </button>
        </li>

        {pages.map((page) => (
          <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
            <button
              className="page-link"
              onClick={() => onPageChange(page)}
              style={{
                fontSize: '14px',
                borderColor: '#e5e7eb',
                ...(currentPage === page
                  ? { backgroundColor: '#2563eb', borderColor: '#2563eb', color: '#fff' }
                  : { color: '#374151' }),
              }}
            >
              {page}
            </button>
          </li>
        ))}

        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            style={{ fontSize: '14px', color: '#374151', borderColor: '#e5e7eb' }}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
