import { Card } from '@/components/Card';
import { Variants, motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

const TitleVariants: Variants = {
  offscreen: {
    opacity: 0,
    x: -10,
  },
  onscreen: {
    opacity: 1,
    x: 0,
  },
};

const imageSrc =
  'https://res.cloudinary.com/dwlgyffvu/image/upload/v1668320395/handy-bill-landing/';

const cardContent = [
  { title: 'billing', image: `${imageSrc}bill_vde3to.webp` },
  { title: 'accounting', image: `${imageSrc}accounting_pj8iut.webp` },
  { title: 'inventory', image: `${imageSrc}store_u0iah0.webp` },
  { title: 'sales', image: `${imageSrc}transaction_jk9zsl.webp` },
  { title: 'reports', image: `${imageSrc}financial_fc7wql.webp` },
  { title: 'payroll', image: `${imageSrc}waitress_lcrl7w.webp` },
  { title: 'customers', image: `${imageSrc}customers_j6r0nm.webp` },
  { title: 'suppliers', image: `${imageSrc}suppliers_vtg7dl.webp` },
  { title: 'products', image: `${imageSrc}products_tzwq2b.webp` },
];

const Services = () => {
  const { t } = useTranslation();
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      id="services"
      className="flex w-full pt-14 md:pt-20 min-h-screen overflow-hidden flex-col justify-start space-y-5 px-4 md:px-10 bg-gradient-to-bl from-background via-background to-primary-700/40"
    >
      <motion.span>
        <motion.h1
          variants={TitleVariants}
          transition={{ duration: 1 }}
          className="font-bold text-4xl md:text-6xl text-shadow-md"
        >
          {t('services:everythingYouNeed')}
        </motion.h1>
        <motion.h2
          variants={TitleVariants}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-bold text-4xl md:text-6xl max-w-lg text-transparent bg-clip-text bg-gradient-to-r from-primary-100 to-primary-600 text-shadow-md pb-2"
        >
          {t('services:inOnePlace')}
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
      <motion.div className="flex justify-center flex-wrap gap-x-2 md:gap-x-10 gap-y-10 pt-10">
        {cardContent.map(({ image, title }) => (
          <Card
            key={title}
            title={t(`services:${title}`)}
            size="small"
            image={
              <Image
                src={image}
                layout="fill"
                objectFit="cover"
                alt={`${title} image`}
              />
            }
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Services;
