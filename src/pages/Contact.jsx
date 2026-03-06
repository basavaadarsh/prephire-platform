import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import ContactInfoSection from '../components/contact/ContactInfoSection';
import MapPlaceholder from '../components/contact/MapPlaceholder';
import FAQSection from '../components/contact/FAQSection';
import {
  contactFormFields,
  contactFormInitialState,
  contactInfoCards,
  faqItems,
} from '../config/contactConfig';
import {
  CONTACT_HERO,
  CONTACT_FORM_STRINGS,
  CONTACT_INFO_STRINGS,
  CONTACT_MAP_STRINGS,
  CONTACT_FAQ_STRINGS,
} from '../constants/contactConstants';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <ContactHero title={CONTACT_HERO.title} subtitle={CONTACT_HERO.subtitle} />

      <div className="container contact-main">
        <div className="row g-4 g-lg-5">
          <div className="col-12 col-lg-6">
            <ContactForm
              fields={contactFormFields}
              initialState={contactFormInitialState}
              strings={CONTACT_FORM_STRINGS}
            />
          </div>
          <div className="col-12 col-lg-6">
            <ContactInfoSection
              cards={contactInfoCards}
              sectionTitle={CONTACT_INFO_STRINGS.sectionTitle}
            />
            <div className="mt-3">
              <MapPlaceholder
                title={CONTACT_MAP_STRINGS.title}
                label={CONTACT_MAP_STRINGS.label}
                address={CONTACT_MAP_STRINGS.address}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <hr className="contact-divider" />
      </div>

      <div className="container pb-4 pb-md-5">
        <FAQSection
          items={faqItems}
          title={CONTACT_FAQ_STRINGS.title}
          subtitle={CONTACT_FAQ_STRINGS.subtitle}
        />
      </div>
    </div>
  );
};

export default Contact;
