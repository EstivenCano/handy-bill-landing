import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';
import { match } from 'ts-pattern';

import { CardContent } from './CardContent';
import { CardHeader } from './CardHeader';
import { CardImage } from './CardImage';

interface Props {
  image?: ReactNode;
  content?: ReactNode;
  title?: string;
  size?: 'small' | 'medium' | 'large';
  direction?: 'row' | 'column';
  delay?: number;
  className?: string;
}

export const Card: FC<Props> = ({
  content,
  image,
  title,
  delay,
  size = 'medium',
  direction = 'column',
  className,
}) => {
  const cardSize = match(size)
    .with('small', () => ({ card: 'max-w-sm', title: 'text-xl md:text-3xl' }))
    .with('medium', () => ({ card: 'max-w-md', title: 'text-2xl md:text-4xl' }))
    .with('large', () => ({ card: 'max-w-lg', title: 'text-3xl md:text-5xl' }))
    .exhaustive();

  const cardDirection = match(direction)
    .with('row', () => ({
      card: 'flex-row',
      image: 'h-full w-72',
    }))
    .with('column', () => ({
      card: 'flex-col',
      image: 'h-40 w-full',
    }))
    .exhaustive();

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
      className={`flex flex-1 basis-56 md:basis-72 bg-gradient-to-tr overflow-hidden from-foreground/20 to-primary/20 rounded-xl border-content/10 border-2 ${cardSize.card} ${cardDirection.card} ${className}`}
    >
      <CardImage image={image} className={cardDirection.image} />
      <div className={`flex my-5 px-5 w-full h-fit flex-col`}>
        <CardHeader className={cardSize.title} title={title} />
        <CardContent content={content} />
      </div>
    </motion.article>
  );
};
