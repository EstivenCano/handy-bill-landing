import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import { match } from 'ts-pattern';

import { Tooltip } from '../Tooltip';

interface Props {
  onClose?: () => void;
}

export const CardClose: FC<Props> = ({ onClose }) => {
  const { t } = useTranslation();
  return (
    <>
      {match(!!onClose)
        .with(true, () => (
          <Tooltip
            title={t('common:close')}
            position="bottom"
            className="absolute cursor-pointer right-1 top-1 z-10"
          >
            <svg
              data-tooltip-target="close-tooltip"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              onClick={onClose}
              stroke="currentColor"
              className="w-8 h-8 cursor-pointer stroke-primary-600 fill-foreground/80 hover:stroke-primary-500 hover:scale-105 transition-all ease-linear active:scale-95"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </Tooltip>
        ))
        .otherwise(() => null)}
    </>
  );
};
