import {
  CONTACT_FORM_LABELS,
  CONTACT_INFO_CONTENT,
  CONTACT_FAQ_CONTENT,
} from '../constants/contactConstants';

export const contactFormFields = [
  { name: 'firstName', type: 'text', colClass: 'col-12 col-md-6', required: true },
  { name: 'lastName', type: 'text', colClass: 'col-12 col-md-6', required: true },
  { name: 'email', type: 'email', colClass: 'col-12', required: true },
  { name: 'phone', type: 'tel', colClass: 'col-12', required: false },
  { name: 'subject', type: 'text', colClass: 'col-12', required: true },
  { name: 'message', type: 'textarea', colClass: 'col-12', rows: 4, required: true },
].map((field) => ({
  ...field,
  id: field.name,
  label: CONTACT_FORM_LABELS[field.name].label,
  placeholder: CONTACT_FORM_LABELS[field.name].placeholder,
}));

export const contactFormInitialState = contactFormFields.reduce(
  (acc, field) => ({ ...acc, [field.name]: '' }),
  {}
);

export const contactInfoCards = [
  { id: 'email', icon: 'mail' },
  { id: 'phone', icon: 'phone' },
  { id: 'office', icon: 'location' },
  { id: 'hours', icon: 'clock' },
].map((card) => ({
  ...card,
  title: CONTACT_INFO_CONTENT[card.id].title,
  lines: CONTACT_INFO_CONTENT[card.id].lines,
}));

export const faqItems = CONTACT_FAQ_CONTENT.map((item, index) => ({
  id: `faq-${index + 1}`,
  ...item,
}));
