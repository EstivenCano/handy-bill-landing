import { Input } from '@/components/Input';
import { TextArea } from '@/components/TextArea';
import { useTranslation } from 'next-i18next';
import { FormEvent, useState } from 'react';

import { useMessageForm } from './useMessageForm';

export const MessageForm = () => {
  const { t } = useTranslation();
  const { form, handleChange, handleSubmit } = useMessageForm();
  const [invalidClass, setInvalidClass] = useState('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    handleSubmit(e);
    setInvalidClass('');
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col space-y-5 w-full max-w-xl mx-auto"
    >
      <h3 className="font-bold text-2xl text-primary-700 dark:text-primary-500">
        {t('contact:sendUs')}
      </h3>
      <hr className="my-5 border-content/20" />
      <div className="flex flex-col space-y-2">
        <label htmlFor="name" className="text-lg font-bold">
          {t('contact:name')} *
        </label>
        <Input
          type="text"
          pattern="^[a-zA-Z\p{L} ]*"
          required
          name="name"
          id="name"
          onChange={handleChange}
          placeholder={t('contact:namePlaceholder')}
          value={form.name}
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="email" className="text-lg font-bold">
          {t('contact:email')} *
        </label>
        <Input
          type="email"
          required
          name="email"
          id="email"
          onChange={handleChange}
          placeholder={t('contact:emailPlaceholder')}
          value={form.email}
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="message" className="text-lg font-bold">
          {t('contact:message')} *
        </label>
        <TextArea
          name="message"
          rows={4}
          required
          id="message"
          onChange={handleChange}
          placeholder={t('contact:messagePlaceholder')}
          style={{ resize: 'none' }}
          value={form.message}
        />
      </div>
      <button type="submit" className="button-outlined">
        {t('contact:send')}
      </button>
    </form>
  );
};
