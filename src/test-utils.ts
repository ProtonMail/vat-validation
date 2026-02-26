import { checkVAT } from './index';
import { Country } from './lib/jsvat';

export function checkValidVat(
  vat: string,
  countriesList: ReadonlyArray<Country>,
  codes: ReadonlyArray<string>,
  name: string
): void {
  const result = checkVAT(vat, countriesList);

  expect(result.isValid).toBe(true);
  expect(result.isSupportedCountry).toBe(true);
  expect(result.isValidFormat).toBe(true);
  const country = result.country;
  expect(country).toBeDefined();
  expect(country?.name).toBe(name);
  expect(country?.isoCode.short).toBe(codes[0]);
  expect(country?.isoCode.long).toBe(codes[1]);
  expect(country?.isoCode.numeric).toBe(codes[2]);
}

export function checkInvalidVat(vat: string, countriesList: ReadonlyArray<Country>): void {
  const result = checkVAT(vat, countriesList);
  expect(result.isValid).toBe(false);
}

export function checkOnlyValidFormatVat(
  vat: string,
  countriesList: ReadonlyArray<Country>,
  _codes?: ReadonlyArray<string>,
  _name?: string
): void {
  const result = checkVAT(vat, countriesList);

  expect(result.isValid).toBe(false);
  expect(result.isSupportedCountry).toBe(true);
  expect(result.isValidFormat).toBe(true);
}

export function addCharsToString(item: string, char: string): string {
  const val = item.split('');
  val.splice(3, 0, char);
  val.splice(7, 0, char);
  return val.join('');
}
