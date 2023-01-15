import { Tooltip } from '@/components/Tooltip';
import { Variants, motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { FacebookIcon } from 'public/icons/FacebookIcon';
import { InstagramIcon } from 'public/icons/InstagramIcon';
import { LinkedInIcon } from 'public/icons/LinkedInIcon';
import { WhatsappIcon } from 'public/icons/WhatsappIcon';

const SocialVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 10,
  },
  onscreen: {
    opacity: 1,
    y: 0,
  },
};

const TitleVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
  },
};

//TODO: Add social links
const links = [
  {
    name: 'Facebook',
    icon: <FacebookIcon className="styled-icon" />,
    href: '/',
  },
  {
    name: 'Instagram',
    href: '/',
    icon: <InstagramIcon className="styled-icon" />,
  },
  {
    name: 'WhatsApp',
    href: '/',
    icon: <WhatsappIcon className="styled-icon" />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/estivencano/',
    icon: <LinkedInIcon className="styled-icon" />,
  },
];

export const SocialLinks = () => {
  const { t } = useTranslation();
  return (
    <>
      <motion.h3
        variants={TitleVariants}
        transition={{ duration: 1, delay: 0.2 }}
        initial="offscreen"
        whileInView="onscreen"
        className="font-bold text-2xl text-primary-700 dark:text-primary-500"
      >
        {t('contact:orContactUsSocial')}
      </motion.h3>
      <motion.div className="flex w-full space-x-5 justify-center md:justify-start">
        {links.map((link, index) => (
          <Tooltip
            key={link.name}
            title={link.name}
            position="bottom"
            positionDistance={1}
          >
            <motion.span
              initial="offscreen"
              whileInView="onscreen"
              variants={SocialVariants}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <Link href={link.href} about={link.name}>
                <a
                  target="_blank"
                  aria-label={`${t('common:goTo')} ${link.name}`}
                >
                  {link.icon}
                </a>
              </Link>
            </motion.span>
          </Tooltip>
        ))}
      </motion.div>
    </>
  );
};
