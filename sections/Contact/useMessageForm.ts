import { useTranslation } from 'next-i18next';
import { ChangeEventHandler, useState } from 'react';

export const useMessageForm = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((res) => {
        console.log(t(`contact:form.response.${res.status}`));
        setForm({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error(t(`contact:form.response.${err.status}`));
      });
  };

  const handleChange: ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = (event) => {
    const { name, value } = event.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  return { form, handleSubmit, handleChange };
};
