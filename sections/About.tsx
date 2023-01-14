import { Card } from '@/components/Card';
import { Variants, motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';

const TitleVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
  },
};

const CardVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 10,
  },
  onscreen: {
    opacity: 1,
    y: 0,
  },
};

const cardsContent = [
  {
    title: 'about:fast',
    content: 'about:fastContent',
  },
  {
    title: 'about:modern',
    content: 'about:modernContent',
  },
  {
    title: 'about:intuitive',
    content: 'about:intuitiveContent',
  },
];

const About = () => {
  const { t } = useTranslation();
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      id="about"
      className="flex w-full pt-14 pb-10 md:pt-16 min-h-screen overflow-hidden flex-col justify-evenly space-y-5 px-4 md:px-10 bg-gradient-to-tr from-background via-background to-primary-300/70 dark:to-primary-700/40"
    >
      <span>
        <motion.h1
          variants={TitleVariants}
          transition={{ duration: 1 }}
          className="m-auto font-bold text-4xl md:text-6xl text-center text-shadow-md"
        >
          {t('about:takeYourBusiness')}
        </motion.h1>
        <motion.h2
          variants={TitleVariants}
          transition={{ duration: 1, delay: 0.2 }}
          className="m-auto font-bold text-4xl md:text-6xl max-w-lg text-center text-transparent bg-clip-text bg-gradient-to-r from-primary-100 to-primary-600 text-shadow-md pb-2"
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
      <motion.ol className="flex lg:flex-row flex-col m-auto space-y-5 lg:space-y-0 lg:space-x-5">
        {cardsContent.map((card, index) => (
          <motion.li
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={CardVariants}
            transition={{ duration: 1, delay: index * 0.2 }}
            key={index}
            className="flex flex-col"
          >
            <Card
              content={<p className="text-md">{t(card.content)}</p>}
              title={t(card.title)}
              delay={index * 0.2}
            />
          </motion.li>
        ))}
      </motion.ol>
    </motion.section>
  );
};

export default About;
