import { useTranslation } from 'next-i18next';
import { ChangeEventHandler, useState } from 'react';
import { sendContactForm } from 'services/sendContactForm';

export const useMessageForm = () => {
  const { t } = useTranslation();
  const [fetching, setFetching] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFetching(true);
    sendContactForm(form)
      .then((res) => {
        console.log(t(`contact:form.response.${res.status}`));
        setForm({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error(t(`contact:form.response.${err.status}`));
      })
      .finally(() => {
        setFetching(false);
      });
  };

  const handleChange: ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = (event) => {
    const { name, value } = event.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  return { form, handleSubmit, handleChange, fetching };
};
