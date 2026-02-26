import { Country } from '../vat-validation';

export const singapore: Country = {
  name: 'Singapore',
  codes: ['SG', 'SGP', '702'],
  calcFn: (): boolean => {
    // Singapore UEN check digit algorithm is not publicly well-documented.
    // Only format validation is performed.
    return true;
  },
  rules: {
    multipliers: {},
    regex: [/^(SG)(\d{8,9}[A-Z])$/, /^(SG)([TSRF]\d{2}[A-Z]{2}\d{4}[A-Z])$/]
  }
};
