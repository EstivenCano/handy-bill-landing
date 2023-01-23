import { Variants, motion } from 'framer-motion';
import { useCurrentSection } from 'hooks/useCurrentSection';
import { useTranslation } from 'next-i18next';

import { LocationMap } from './LocationMap';
import { MessageForm } from './MessageForm';
import { SocialLinks } from './SocialLinks';

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
  const setCurrentSection = useCurrentSection(
    (state) => state.setCurrentSection,
  );

  return (
    <motion.section
      id="contact"
      className="flex w-full pt-14 md:pt-20 min-h-screen overflow-hidden flex-col justify-around space-y-5 px-4 md:px-10 bg-gradient-to-br from-background via-background to-primary-300/70 dark:to-primary-700/40 pb-4"
    >
      <motion.span
        initial="offscreen"
        whileInView="onscreen"
        onViewportEnter={() => setCurrentSection('contact')}
      >
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
      <motion.div className="flex flex-col md:flex-row gap-10 items-stretch content-between">
        <MessageForm />
        <div className="w-full space-y-5">
          <LocationMap />
          <SocialLinks />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
