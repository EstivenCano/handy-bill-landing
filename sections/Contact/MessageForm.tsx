import { Input } from '@/components/Input';
import { Spinner } from '@/components/Spinner';
import { TextArea } from '@/components/TextArea';
import { useTranslation } from 'next-i18next';
import { FormEvent } from 'react';
import { match } from 'ts-pattern';

import { useMessageForm } from './useMessageForm';

export const MessageForm = () => {
  const { t } = useTranslation();
  const { form, handleChange, handleSubmit, fetching } = useMessageForm();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    handleSubmit(e);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col space-y-5 w-full max-w-xl mx-auto"
    >
      <span className="flex space-x-4">
        <h3 className="font-bold text-2xl text-primary-700 dark:text-primary-500">
          {t('contact:sendUs')}
        </h3>
        {match(fetching)
          .with(true, () => <Spinner />)
          .otherwise(() => null)}
      </span>
      <hr className="my-5 border-content/20" />
      <div className="flex flex-col space-y-2">
        <label htmlFor="name" className="font-bold">
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
        <label htmlFor="email" className="font-bold">
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
        <label htmlFor="message" className="font-bold">
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
      <button type="submit" className="button-outlined" disabled={fetching}>
        {match(fetching)
          .with(true, () => t('common:loading'))
          .otherwise(() => t('contact:send'))}
      </button>
    </form>
  );
};
