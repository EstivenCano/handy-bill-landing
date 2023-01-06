import { Input } from '@/components/Input';
import { TextArea } from '@/components/TextArea';
import { useTranslation } from 'next-i18next';

import { useMessageForm } from './useMessageForm';

export const MessageForm = () => {
  const { t } = useTranslation();
  const { form, handleChange, handleSubmit } = useMessageForm();

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-5 w-full max-w-xl bg-foreground border-2 border-primary/30 p-4 rounded-md shadow-md shadow-primary-700"
    >
      <h3 className="font-bold text-2xl text-primary-700 dark:text-primary-500">
        {t('contact:sendUs')}
      </h3>
      <hr className="my-5 border-content/20" />
      <div className="flex flex-col space-y-2">
        <label htmlFor="name" className="text-lg font-bold">
          {t('contact:name')}
        </label>
        <Input
          type="text"
          required
          name="name"
          id="name"
          onChange={handleChange}
          value={form.name}
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="email" className="text-lg font-bold">
          {t('contact:email')}
        </label>
        <Input
          type="email"
          required
          name="email"
          id="email"
          onChange={handleChange}
          value={form.email}
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="message" className="text-lg font-bold">
          {t('contact:message')}
        </label>
        <TextArea
          name="message"
          rows={4}
          required
          id="message"
          onChange={handleChange}
          value={form.message}
        />
      </div>
      <button type="submit" className="button-outlined">
        {t('contact:send')}
      </button>
    </form>
  );
};
