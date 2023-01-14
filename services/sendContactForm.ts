import type { ContactForm } from '../models/ContactForm';

export const sendContactForm = async (form: ContactForm) => {
  return await fetch('/api/contact', {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form),
  });
};
