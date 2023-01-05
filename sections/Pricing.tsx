import { Card } from '@/components/Card';
import { Variants, motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { Fragment } from 'react';

const TitleVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
  },
};

type PricingContent = {
  title: string;
  cost: number;
  mainContent: {
    users: number;
    bills: number;
    products: number;
  };
  secondaryContent: string[];
  recommended?: boolean;
};

const pricingContent: Record<string, PricingContent> = {
  basic: {
    title: 'pricing:basic',
    cost: 50000,
    mainContent: {
      users: 2,
      bills: 1000,
      products: 100,
    },
    secondaryContent: [
      'pricing:reports',
      'pricing:customers',
      'pricing:inventory',
    ],
  },
  standard: {
    title: 'pricing:standard',
    cost: 100000,
    mainContent: {
      users: 3,
      bills: 2000,
      products: 200,
    },
    secondaryContent: [
      'pricing:basicBenefits',
      'pricing:taxes',
      'pricing:userNotifications',
    ],
    recommended: true,
  },
  premium: {
    title: 'pricing:premium',
    cost: 200000,
    mainContent: {
      users: 5,
      bills: 5000,
      products: 500,
    },
    secondaryContent: [
      'pricing:standardBenefits',
      'pricing:expenses',
      'pricing:suppliers',
    ],
  },
};

const Pricing = () => {
  const { t } = useTranslation();
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
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
      <motion.div
        variants={TitleVariants}
        transition={{
          duration: 1,
          delay: 0.4,
        }}
        className="flex flex-wrap gap-6"
      >
        {Object.keys(pricingContent).map((key) => {
          const { title, cost, mainContent, secondaryContent, recommended } =
            pricingContent[key];
          return (
            <Card
              key={key}
              title={t(title)}
              titleIcon={
                recommended && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 fill-amber-300"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433L10.788 3.21z"
                    />
                  </svg>
                )
              }
              content={
                <div className="flex flex-col w-full">
                  <span className="m-auto flex flex-col content-center items-center">
                    <p className="text-4xl text-primary-400 font-bold">{`$ ${cost} COP`}</p>
                    <p className="text-xl">{t('pricing:monthlyPayment')}</p>
                  </span>
                  <hr className="my-5 border-content/20" />
                  <ul className="flex flex-col space-y-1 text-xl text-center">
                    <li>
                      <strong>{mainContent.users}</strong> {t('pricing:users')}
                    </li>
                    <li>
                      <strong>{mainContent.bills}</strong>{' '}
                      {t('pricing:billsPerMonth')}
                    </li>
                    <li>
                      <strong>{mainContent.products}</strong>{' '}
                      {t('pricing:products')}
                    </li>
                  </ul>
                  <p className="py-3 text-primary-400 text-center">
                    {secondaryContent.map((content, index) => (
                      <Fragment key={content}>
                        {`${t(content)}` +
                          (index !== secondaryContent.length - 1 ? ' - ' : '')}
                      </Fragment>
                    ))}
                  </p>
                </div>
              }
              featured={recommended}
              className={
                'transition-transform duration-300' +
                (recommended
                  ? ' scale-100 hover:scale-105'
                  : ' scale-95 hover:scale-100')
              }
            />
          );
        })}
      </motion.div>
    </motion.section>
  );
};

export default Pricing;
