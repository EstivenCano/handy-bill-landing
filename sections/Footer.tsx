import { useTranslation } from 'next-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="flex flex-col items-start p-5 justify-center border-t-2 border-primary/50">
      <p className="text-sm text-content">
        {t('common:handyBill')} © {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
