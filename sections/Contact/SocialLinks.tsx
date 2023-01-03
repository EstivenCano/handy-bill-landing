import { FacebookIcon } from 'public/icons/FacebookIcon';
import { InstagramIcon } from 'public/icons/InstagramIcon';
import { LinkedInIcon } from 'public/icons/LinkedInIcon';
import { WhatsappIcon } from 'public/icons/WhatsappIcon';

export const SocialLinks = () => {
  return (
    <div className="flex space-x-5">
      <FacebookIcon className="styled-icon" />
      <LinkedInIcon className="styled-icon" />
      <InstagramIcon className="styled-icon" />
      <WhatsappIcon className="styled-icon" />
    </div>
  );
};
