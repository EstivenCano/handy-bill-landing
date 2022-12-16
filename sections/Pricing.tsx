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

const Pricing = () => {
  const { t } = useTranslation();
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      id="pricing"
      className="flex w-full pt-14 md:pt-20 min-h-screen overflow-hidden flex-col justify-start space-y-5 px-4 md:px-10 bg-gradient-to-tl from-background via-background to-primary-700/40"
    >
      <motion.span>
        <motion.h1
          variants={TitleVariants}
          transition={{ duration: 1 }}
          className="font-bold text-4xl md:text-6xl text-shadow-md"
        >
          {t('pricing:chooseAPlan')}
        </motion.h1>
        <motion.h2
          variants={TitleVariants}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-bold text-4xl md:text-6xl  text-transparent bg-clip-text bg-gradient-to-r from-primary-100 to-primary-600 text-shadow-md"
        >
          {t('pricing:thatBestSuitsYourNeeds')}
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
      <div className="flex flex-wrap space-x-6">
        <Card
          title={t('pricing:basic')}
          content={
            <div className="flex flex-col w-full">
              <span className="m-auto">
                <h4 className="text-4xl text-primary-400 font-bold">{`$ 50.000`}</h4>
                <h5 className="text-xl">{t('pricing:monthlyPayment')}</h5>
              </span>
              <hr className="my-5 border-content/20" />
              <ul className="flex flex-col space-y-1 text-xl text-center">
                <li>{t('pricing:3Users')}</li>
                <li>{t('pricing:1000billsPerMonth')}</li>
                <li>{t('pricing:userNotifications')}</li>
              </ul>
              <p className="py-3 text-primary-400 text-center">
                {`${t('pricing:reports')} +
                  ${t('pricing:customers')} +
                  ${t('pricing:products')}`}
              </p>
            </div>
          }
          size="small"
          className="h-96 scale-95 hover:scale-100 transition-all duration-300 ease-in-out"
        />
        <Card
          title={t('pricing:standard')}
          titleIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-amber-300"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
          }
          className="h-96 scale-100 hover:scale-105 transition-all duration-300 ease-in-out"
          featured
        />
        <Card
          title={t('pricing:premium')}
          size="small"
          className="h-96 scale-95 hover:scale-100 transition-all duration-300 ease-in-out"
        />
      </div>
    </motion.section>
  );
};

export default Pricing;
