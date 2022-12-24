import { Card } from '@/components/Card';
import { Image } from '@/components/Image';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';

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

const imageSrc =
  'https://res.cloudinary.com/dwlgyffvu/image/upload/v1668320395/handy-bill-landing/';

const cardContent = [
  {
    title: 'billing',
    image: `${imageSrc}bill_vde3to.webp`,
    content: ['billing.content.1', 'billing.content.2', 'billing.content.3'],
  },
  {
    title: 'accounting',
    image: `${imageSrc}accounting_pj8iut.webp`,
    content: [
      'accounting.content.1',
      'accounting.content.2',
      'accounting.content.3',
    ],
  },
  {
    title: 'inventory',
    image: `${imageSrc}store_u0iah0.webp`,
    content: [
      'inventory.content.1',
      'inventory.content.2',
      'inventory.content.3',
    ],
  },
  {
    title: 'sales',
    image: `${imageSrc}transaction_jk9zsl.webp`,
    content: ['sales.content.1', 'sales.content.2', 'sales.content.3'],
  },
  {
    title: 'reports',
    image: `${imageSrc}financial_fc7wql.webp`,
    content: ['reports.content.1', 'reports.content.2', 'reports.content.3'],
  },
  {
    title: 'payroll',
    image: `${imageSrc}waitress_lcrl7w.webp`,
    content: ['payroll.content.1', 'payroll.content.2', 'payroll.content.3'],
  },
  {
    title: 'customers',
    image: `${imageSrc}customers_j6r0nm.webp`,
    content: [
      'customers.content.1',
      'customers.content.2',
      'customers.content.3',
    ],
  },
  {
    title: 'suppliers',
    image: `${imageSrc}suppliers_vtg7dl.webp`,
    content: [
      'suppliers.content.1',
      'suppliers.content.2',
      'suppliers.content.3',
    ],
  },
  {
    title: 'products',
    image: `${imageSrc}products_tzwq2b.webp`,
    content: ['products.content.1', 'products.content.2', 'products.content.3'],
  },
];

const Services = () => {
  const { t } = useTranslation();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const cardSelected = cardContent.find((card) => card.title === selectedId);

  useEffect(() => {
    if (selectedId) {
      document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    } else {
      document.getElementsByTagName('body')[0].style.overflow = 'auto';
    }
  }, [selectedId]);

  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      id="services"
      className="flex overflow-visible w-full pt-14 md:pt-20 min-h-screen flex-col justify-start space-y-5 px-4 md:px-10 bg-gradient-to-bl from-background via-background to-primary-700/40"
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
      <motion.ol className="flex flex-wrap justify-center m-auto gap-5">
        {cardContent.map(({ image, title }) => (
          <motion.li
            key={title}
            initial="offscreen"
            whileInView="onscreen"
            variants={CardVariants}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            layoutId={title}
            className="basis-96 sm:basis-80 cursor-pointer hover:bg-primary-300/20 rounded-lg"
          >
            <Card
              title={t(`services:${title}`)}
              onClick={() => setSelectedId(title)}
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
          </motion.li>
        ))}
        <AnimatePresence>
          {selectedId && (
            <>
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-foreground/95 z-40 fixed p-8 top-0 flex w-screen h-screen"
              >
                <Card
                  title={t(`services:${selectedId}`)}
                  content={
                    <div className="space-y-8 flex flex-col flex-wrap overflow-y-auto">
                      {cardSelected?.content.map((item) => (
                        <p key={item} className="text-lg">
                          {t(`services:${item}`)}
                        </p>
                      ))}
                    </div>
                  }
                  selected={selectedId}
                  size="large"
                  direction="row"
                  className="m-auto h-5/6 w-5/6 bg-foreground max-w-4xl"
                  onClose={() => setSelectedId(null)}
                  image={
                    <Image
                      src={cardSelected?.image || ''}
                      layout="fill"
                      objectFit="cover"
                      alt={`${selectedId} image`}
                    />
                  }
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.ol>
    </motion.section>
  );
};

export default Services;
