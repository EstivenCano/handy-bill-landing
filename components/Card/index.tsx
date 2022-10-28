import { motion } from 'framer-motion';
import { FC } from 'react';

interface Props {
  content: string;
  title?: string;
  delay?: number;
}

export const Card: FC<Props> = ({ content, title, delay }) => {
  return (
    <motion.article
      variants={{
        offscreen: {
          opacity: 0,
          y: -10,
        },
        onscreen: {
          opacity: 1,
          y: 0,
        },
      }}
      transition={{ duration: 1, delay: delay || 0.2 }}
      className="flex flex-col self-stretch space-y-5 bg-gradient-to-tr from-foreground/20 to-primary/20 py-5 px-5 rounded-xl border-content/10 border-2 max-w-lg"
    >
      <h2 className="font-bold max text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-bl from-primary-100 to-primary-600 text-shadow">
        {title}
      </h2>
      <hr className="border-content/20" />
      <p className="text-md text-justify">{content}</p>
    </motion.article>
  );
};
