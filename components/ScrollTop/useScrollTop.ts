import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';

export const useScrollTop = (show: boolean) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const { t } = useTranslation();

  const handleShowTooltip = () => {
    setShowTooltip(true);
  };

  const handleCloseTooltip = () => {
    setShowTooltip(false);
  };

  useEffect(() => {
    !show && handleCloseTooltip();
  }, [show]);

  return { showTooltip, t, handleCloseTooltip, handleShowTooltip };
};
