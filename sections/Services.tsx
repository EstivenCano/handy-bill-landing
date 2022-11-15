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
        <Card
          title={t('services:billing')}
          size="small"
          image={
            <Image
              blurDataURL="data:image/webp;base64,UklGRswCAABXRUJQVlA4WAoAAAAgAAAAgQAAVQAASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOCCOAAAA8AYAnQEqggBWAD7tdrBWKackI6ComTAdiWlu3V45AMiJBWtU1nX1YshYMeS5c9mSjlTLqVZu/FxNGygD4iK1lAD+71bKhe5KZ4shJqOiNbI1ukmUqoK88mEzQTH2xr3K1C/KsLhK3bH10jP4JSAghaJ9pF8ELQqMb40CXuTuRCOfu/IqggAYH/S7tgAAAA=="
              src="https://res.cloudinary.com/dwlgyffvu/image/upload/v1668320395/handy-bill-landing/bill_vde3to.webp"
              layout="fill"
              objectFit="cover"
              alt="Report icon"
            />
          }
        />
        <Card
          title={t('services:accounting')}
          size="small"
          image={
            <Image
              blurDataURL="data:image/webp;base64,UklGRswCAABXRUJQVlA4WAoAAAAgAAAAgQAAVQAASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOCCOAAAA8AYAnQEqggBWAD7tdrBWKackI6ComTAdiWlu3V45AMiJBWtU1nX1YshYMeS5c9mSjlTLqVZu/FxNGygD4iK1lAD+71bKhe5KZ4shJqOiNbI1ukmUqoK88mEzQTH2xr3K1C/KsLhK3bH10jP4JSAghaJ9pF8ELQqMb40CXuTuRCOfu/IqggAYH/S7tgAAAA=="
              src="https://res.cloudinary.com/dwlgyffvu/image/upload/v1668320395/handy-bill-landing/accounting_pj8iut.webp"
              layout="fill"
              objectFit="cover"
              alt="Report icon"
            />
          }
        />
        <Card
          title={t('services:inventory')}
          size="small"
          image={
            <Image
              src="https://res.cloudinary.com/dwlgyffvu/image/upload/v1668320395/handy-bill-landing/store_u0iah0.webp"
              layout="fill"
              objectFit="cover"
              alt="Report icon"
            />
          }
        />
        <Card
          title={t('services:sales')}
          size="small"
          image={
            <Image
              src="https://res.cloudinary.com/dwlgyffvu/image/upload/v1668320395/handy-bill-landing/transaction_jk9zsl.webp"
              layout="fill"
              objectFit="cover"
              alt="Report icon"
            />
          }
        />
        <Card
          title={t('services:reports')}
          size="small"
          image={
            <Image
              src="https://res.cloudinary.com/dwlgyffvu/image/upload/v1668320394/handy-bill-landing/financial_fc7wql.webp"
              layout="fill"
              objectFit="cover"
              className="filter brightness-90"
              alt="Report icon"
            />
          }
        />
        <Card
          title={t('services:payroll')}
          size="small"
          image={
            <Image
              src="https://res.cloudinary.com/dwlgyffvu/image/upload/v1668320395/handy-bill-landing/waitress_lcrl7w.webp"
              layout="fill"
              objectFit="cover"
              alt="Report icon"
            />
          }
        />
        <Card
          title={t('services:customers')}
          size="small"
          image={
            <Image
              src="https://res.cloudinary.com/dwlgyffvu/image/upload/v1668320395/handy-bill-landing/customers_j6r0nm.webp"
              layout="fill"
              objectFit="cover"
              alt="Report icon"
            />
          }
        />
        <Card
          title={t('services:suppliers')}
          size="small"
          image={
            <Image
              src="https://res.cloudinary.com/dwlgyffvu/image/upload/v1668320395/handy-bill-landing/suppliers_vtg7dl.webp"
              layout="fill"
              objectFit="cover"
              alt="Report icon"
            />
          }
        />
        <Card
          title={t('services:products')}
          size="small"
          image={
            <Image
              src="https://res.cloudinary.com/dwlgyffvu/image/upload/v1668320396/handy-bill-landing/products_tzwq2b.webp"
              layout="fill"
              objectFit="cover"
              alt="Report icon"
            />
          }
        />
      </motion.div>
    </motion.section>
  );
};

export default Services;
