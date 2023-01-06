import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';
import { match } from 'ts-pattern';

import { CardClose } from './CardClose';
import { CardContent } from './CardContent';
import { CardHeader } from './CardHeader';
import { CardImage } from './CardImage';

interface Props {
  className?: string;
  content?: ReactNode;
  delay?: number;
  direction?: 'row' | 'column';
  featured?: boolean;
  image?: ReactNode;
  onClick?: () => void;
  onClose?: () => void;
  selected?: string;
  size?: 'small' | 'medium' | 'large';
  title?: string;
  titleIcon?: ReactNode;
}

export const Card: FC<Props> = ({
  className,
  content,
  delay,
  direction = 'column',
  featured,
  image,
  onClick,
  onClose,
  selected,
  size = 'medium',
  title,
  titleIcon,
}) => {
  const cardSize = match(size)
    .with('small', () => ({ title: 'text-xl md:text-3xl' }))
    .with('medium', () => ({ title: 'text-2xl md:text-4xl' }))
    .with('large', () => ({ title: 'text-3xl md:text-5xl' }))
    .exhaustive();

  const cardDirection = match(direction)
    .with('row', () => ({
      card: 'md:flex-row flex-col',
      image: 'md:h-full md:w-3/6 h-52 w-full',
    }))
    .with('column', () => ({
      card: 'flex-col',
      image: 'h-40 w-full',
    }))
    .exhaustive();

  const cardFeatured = match(featured)
    .with(true, () => ({
      card: 'bg-gradient-to-tr from-foreground to-primary/50 scale-105',
    }))
    .otherwise(() => ({
      card: 'bg-gradient-to-tr from-foreground to-primary/30',
    }));

  return (
    <motion.article
      layoutId={selected}
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
      transition={{ duration: 0.4, delay: delay || 0.2 }}
      className={`flex overflow-hidden relative flex-grow rounded-xl border-content/10 border-2 ${cardDirection.card} ${cardFeatured.card} ${className}`}
    >
      <CardClose onClose={onClose} />
      <CardImage image={image} className={cardDirection.image} />
      <div className={`flex my-5 px-5 w-full h-fit flex-col overflow-y-auto`}>
        <CardHeader
          className={cardSize.title}
          title={title}
          titleIcon={titleIcon}
        />
        <CardContent content={content} />
      </div>
    </motion.article>
  );
};
