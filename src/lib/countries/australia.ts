import { Country } from '../vat-validation';

export const australia: Country = {
  name: 'Australia',
  codes: ['AU', 'AUS', '036'],
  calcFn: (vat: string): boolean => {
    let total = 0;
    for (let i = 0; i < 11; i++) {
      let digit = Number(vat.charAt(i));
      if (i === 0) digit -= 1;
      total += digit * australia.rules.multipliers.common[i];
    }

    return total % 89 === 0;
  },
  rules: {
    multipliers: {
      common: [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    },
    regex: [/^(AU)?(\d{11})$/]
  }
};
