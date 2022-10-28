import { Card } from '@/components/Card';
import { Variants, motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';

const cardVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
  },
};

const About = () => {
  const { t } = useTranslation();
  return (
    <motion.article
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      id="about"
      className="flex w-full pt-14 md:pt-16 min-h-screen overflow-hidden flex-col justify-evenly space-y-5 px-4 md:px-10 bg-gradient-to-tr from-background via-background to-primary-700/40"
    >
      <span>
        <motion.h1
          variants={cardVariants}
          transition={{ duration: 1 }}
          className="m-auto font-bold text-4xl md:text-6xl text-center text-shadow-md"
        >
          {t('about:takeYourBusiness')}
        </motion.h1>
        <motion.h2
          variants={cardVariants}
          transition={{ duration: 1, delay: 0.2 }}
          className="m-auto font-bold text-4xl md:text-6xl max-w-lg text-center text-transparent bg-clip-text bg-gradient-to-r from-primary-100 to-primary-600 text-shadow-md"
        >
          {t('about:toNextLevel')}
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
      </span>
      <div className="flex lg:flex-row flex-col m-auto space-y-5 lg:space-y-0 lg:space-x-5">
        <Card
          content={t('about:fastContent')}
          title={t('about:fast')}
          delay={0.2}
        />
        <Card
          content={t('about:modernContent')}
          title={t('about:modern')}
          delay={0.4}
        />
        <Card
          content={t('about:intuitiveContent')}
          title={t('about:intuitive')}
          delay={0.6}
        />
      </div>
    </motion.article>
  );
};

export default About;
