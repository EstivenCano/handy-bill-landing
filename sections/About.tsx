import { Card } from '@/components/Card';
import { useTranslation } from 'next-i18next';

export const About = () => {
  const { t } = useTranslation();
  return (
    <section
      id="about"
      className="flex w-full pt-14 md:pt-16 min-h-screen overflow-hidden flex-col justify-evenly space-y-5 px-4 md:px-10 bg-gradient-to-tr from-background via-background to-primary-700/40"
    >
      <div>
        <h1 className="m-auto font-bold text-4xl md:text-6xl max-w-lg text-center text-shadow-md">
          {t('about:takeYourBusiness')}
        </h1>
        <h2 className="m-auto font-bold text-4xl md:text-6xl max-w-lg text-center text-transparent bg-clip-text bg-gradient-to-r from-primary-100 to-primary-600 text-shadow-md">
          {t('about:toNextLevel')}
        </h2>
        <hr className="border-0 mt-5 bg-gradient-to-r from-primary to-primary-600 h-1 w-full" />
      </div>
      <div className="flex lg:flex-row flex-col m-auto space-y-5 lg:space-y-0 lg:space-x-5">
        <Card content={t('about:fastContent')} title={t('about:fast')} />
        <Card content={t('about:modernContent')} title={t('about:modern')} />
        <Card
          content={t('about:intuitiveContent')}
          title={t('about:intuitive')}
        />
      </div>
    </section>
  );
};
