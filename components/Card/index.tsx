import { motion } from 'framer-motion';
import { FC, ReactNode, useEffect, useState } from 'react';
import { match } from 'ts-pattern';

import { CardContent } from './CardContent';
import { CardHeader } from './CardHeader';
import { CardImage } from './CardImage';

interface Props {
  image?: ReactNode;
  content?: ReactNode;
  selected?: string;
  title?: string;
  size?: 'small' | 'medium' | 'large';
  direction?: 'row' | 'column';
  delay?: number;
  onClick?: () => void;
  className?: string;
}

export const Card: FC<Props> = ({
  content,
  image,
  title,
  delay,
  size = 'medium',
  selected,
  direction = 'column',
  className,
  onClick,
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

  return (
    <motion.article
      layoutId={selected}
      onClick={onClick}
      transition={{ duration: 1, delay: delay || 0.2 }}
      className={`flex flex-grow bg-gradient-to-tr overflow-hidden from-foreground/20 to-primary/20 rounded-xl border-content/10 border-2 ${cardDirection.card} ${className}`}
    >
      <CardImage image={image} className={cardDirection.image} />
      <div className={`flex my-5 px-5 w-full h-fit flex-col`}>
        <CardHeader className={cardSize.title} title={title} />
        <CardContent content={content} />
      </div>
    </motion.article>
  );
};
