import { useEffect, useState } from 'react';

//Calculate the number as currency depending on the location of the user using the Intl API
export const useNumberAsCurrency = () => {
  const [locale, setLocale] = useState<string | undefined>(undefined);

  useEffect(() => {
    setLocale(Intl.DateTimeFormat().resolvedOptions().locale);
  }, []);

  const numberAsCurrency = (
    number: number,
    currency: 'COP' | 'USD' = 'USD',
  ) => {
    return Intl.NumberFormat(locale || 'es-US', {
      style: 'currency',
      currency: currency,
      maximumFractionDigits: 0,
    }).format(number);
  };

  return { numberAsCurrency };
};
