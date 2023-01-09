import { useTranslation } from 'next-i18next';

export const LocationMap = () => {
  const { t } = useTranslation();
  return (
    <>
      <h3 className="font-bold text-2xl text-primary-700 dark:text-primary-500">
        {t('contact:visitUs')}
      </h3>
      <iframe
        title={t('contact:handyBillLocation')}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126916.74073835151!2d-75.65125228181371!3d6.244198821295224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428dfb80fad05%3A0x42137cfcc7b53b56!2sMedell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses-419!2sco!4v1671857956310!5m2!1ses-419!2sco"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-80 rounded-md shadow-md shadow-primary-700 filter green-filter"
      />
    </>
  );
};
