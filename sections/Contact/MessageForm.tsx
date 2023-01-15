import { Input } from '@/components/Input';
import { Snackbar } from '@/components/Snackbar';
import { Spinner } from '@/components/Spinner';
import { TextArea } from '@/components/TextArea';
import { Variants, motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { FormEvent } from 'react';
import { match } from 'ts-pattern';

import { useMessageForm } from './useMessageForm';

const FormVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
  },
};

const InputVariants: Variants = {
  offscreen: {
    opacity: 0,
    x: -10,
  },
  onscreen: {
    opacity: 1,
    x: 0,
  },
};

export const MessageForm = () => {
  const { t } = useTranslation();
  const { form, handleChange, handleSubmit, fetching, response } =
    useMessageForm();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    handleSubmit(e);
  };

  return (
    <>
      <motion.form
        initial="offscreen"
        whileInView="onscreen"
        variants={FormVariants}
        transition={{ duration: 1 }}
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
        <motion.div
          variants={InputVariants}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          className="flex flex-col space-y-2"
        >
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
        </motion.div>
        <motion.div
          variants={InputVariants}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
          className="flex flex-col space-y-2"
        >
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
        </motion.div>
        <motion.div
          variants={InputVariants}
          transition={{
            duration: 1,
            delay: 0.6,
          }}
          className="flex flex-col space-y-2"
        >
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
        </motion.div>
        <motion.button
          variants={InputVariants}
          transition={{
            duration: 1,
            delay: 0.6,
          }}
          type="submit"
          className="button-outlined"
          disabled={fetching}
        >
          {match(fetching)
            .with(true, () => t('common:loading'))
            .otherwise(() => t('contact:send'))}
        </motion.button>
      </motion.form>
      <Snackbar
        type={response.type}
        message={response.message}
        isOpen={!!response.message}
      />
    </>
  );
};
