import { Tooltip } from '@/components/Tooltip';
import Link from 'next/link';
import { FacebookIcon } from 'public/icons/FacebookIcon';
import { InstagramIcon } from 'public/icons/InstagramIcon';
import { LinkedInIcon } from 'public/icons/LinkedInIcon';
import { WhatsappIcon } from 'public/icons/WhatsappIcon';

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
  return (
    <>
      <div className="flex w-full space-x-5 justify-center md:justify-start">
        {links.map((link) => (
          <Tooltip
            key={link.name}
            title={link.name}
            position="bottom"
            positionDistance={1}
          >
            <span>
              <Link href={link.href} about={link.name}>
                <a target="_blank">{link.icon}</a>
              </Link>
            </span>
          </Tooltip>
        ))}
      </div>
    </>
  );
};
