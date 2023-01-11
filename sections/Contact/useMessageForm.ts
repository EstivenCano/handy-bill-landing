import { Status } from 'models/Status';
import { useTranslation } from 'next-i18next';
import { ChangeEventHandler, useEffect, useState } from 'react';
import { sendContactForm } from 'services/sendContactForm';

export const useMessageForm = () => {
  const { t } = useTranslation();
  const [fetching, setFetching] = useState(false);
  const [response, setResponse] = useState<{ type: Status; message: string }>({
    type: 'success',
    message: '',
  });
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Clear response to it's initial state.
  const clearResponse = () => setResponse({ type: 'success', message: '' });

  /**
   * Submit contact form info to server and handle response
   * @param e FormEvent<HTMLFormElement>
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //start fetching data from server
    setFetching(true);
    sendContactForm(form)
      .then((res) => {
        // set the success message to the response
        setResponse({
          type: 'success',
          message: t(`contact:form.response.${res.status}`),
        });
        // clear the form
        setForm({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        // set the error message to the response
        setResponse({
          type: 'error',
          message: t(`contact:form.response.${err.status}`),
        });
      })
      .finally(() => {
        // stop fetching data from server
        setFetching(false);
      });
  };

  const handleChange: ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = (event) => {
    const { name, value } = event.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  // Clear response after 5 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      clearResponse();
    }, 5000);
    return () => clearTimeout(timeout);
  });

  return { form, handleSubmit, handleChange, fetching, response };
};
