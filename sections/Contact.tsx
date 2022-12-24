import { Input } from '@/components/Input';
import { TextArea } from '@/components/TextArea';
import { Variants, motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { ChangeEventHandler, useState } from 'react';

const TitleVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
  },
};

const Contact = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  const handleChange: ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = (event) => {
    const { name, value } = event.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      id="contact"
      className="flex w-full pt-14 md:pt-20 min-h-screen overflow-hidden flex-col justify-start space-y-5 px-4 md:px-10 bg-gradient-to-br from-background via-background to-primary-700/40 pb-4"
    >
      <motion.span>
        <motion.h1
          variants={TitleVariants}
          transition={{ duration: 1 }}
          className="m-auto font-bold text-4xl md:text-6xl text-center text-shadow-md"
        >
          {t('contact:letsGet')}
        </motion.h1>
        <motion.h2
          variants={TitleVariants}
          transition={{ duration: 1 }}
          className="m-auto font-bold text-4xl md:text-6xl text-center text-shadow-md text-transparent bg-clip-text bg-gradient-to-r from-primary-100 to-primary-600"
        >
          {t('contact:inTouch')}
        </motion.h2>
        <motion.hr
          variants={{
            offscreen: {
              width: 0,
            },
            onscreen: {
              width: '100%',
            },
          }}
          transition={{ duration: 1, delay: 0.2 }}
          className="border-0 mt-5 bg-gradient-to-r from-primary to-primary-600 h-1 w-full"
        />
      </motion.span>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-5 max-w-xl bg-foreground/50 border-2 border-primary/30 p-4 rounded-md shadow-md shadow-primary-700"
      >
        <h3 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary-100 to-primary-600">
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
          />
        </div>
        <button type="submit" className="button-outlined">
          {t('contact:send')}
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
