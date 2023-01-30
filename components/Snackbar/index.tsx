import { AnimatePresence, motion } from 'framer-motion';
import { Status } from 'models/Status';
import { useTranslation } from 'next-i18next';
import { FC, useEffect, useState } from 'react';
import { match } from 'ts-pattern';

interface Props {
  message: string;
  isOpen: boolean;
  type: Status;
  timeout?: number;
}

export const Snackbar: FC<Props> = ({
  message,
  isOpen,
  type,
  timeout = 5000,
}) => {
  const [open, setOpen] = useState(isOpen);
  const { t } = useTranslation();

  //Return a className depending on the type of the alert
  const alertColor = match(type)
    .with('success', () => 'text-primary-500 border-primary-500/20')
    .with('error', () => 'text-red-500 border-red-500/20')
    .with('warning', () => 'text-yellow-500 border-yellow-500/20')
    .with('info', () => 'text-content border-content/20')
    .exhaustive();

  //If the isOpen prop changes, set the open state to the new value and set a timer to close the alert
  useEffect(() => {
    if (isOpen) {
      setOpen(isOpen);
    }

    const timer = setTimeout(() => {
      setOpen(false);
    }, timeout);

    return () => clearTimeout(timer);
  }, [isOpen, timeout]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{
            duration: 0.4,
          }}
          className={`${alertColor} border-2 flex p-4 mb-4 text-sm rounded-lg bg-foreground fixed bottom-0 right-auto left-auto justify-start items-center z-50`}
          role="alert"
        >
          <svg
            aria-hidden="true"
            className="flex-shrink-0 inline w-5 h-5 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">{t(`common:${type}`)} </span>
          <div>
            <span className="font-medium">
              <strong>{t(`common:${type}`) + '!'}</strong>
            </span>{' '}
            {message}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
