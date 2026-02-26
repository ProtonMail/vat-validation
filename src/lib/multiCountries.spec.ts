import { unitedKingdom } from './countries/unitedKingdom';
import { belgium } from './countries/belgium';
import { brazil } from './countries/brazil';
import { lithuania } from './countries/lithuania';
import * as unitedKingdomVat from './countries/unitedKingdom.vat';
import * as brazilVat from './countries/brazil.vat';
import * as lithuanianVat from './countries/lithuania.vat';
import { addCharsToString, checkInvalidVat, checkOnlyValidFormatVat, checkValidVat } from '../test-utils';
import { checkVAT } from '../index';

const countriesToTest = [brazil, unitedKingdom, lithuania];

describe('Multicountries', () => {
  describe('United Kingdom', () => {
    const { codes, invalid, name, valid, validOnlyByFormat } = unitedKingdomVat;

    it('should return "true" result for valid VATs', () => {
      valid.forEach((vat) => checkValidVat(vat, countriesToTest, codes, name));
    });

    it('should return "true" for "isSupportedCountry" and "isValidFormat" fields, but "false" for "isValid" for VATs that match format but still invalid', () => {
      validOnlyByFormat.forEach((vat) => checkOnlyValidFormatVat(vat, countriesToTest, codes, name));
    });

    it('should return "true" result for valid VATs with extra dash characters', () => {
      valid.map((vat) => addCharsToString(vat, '-')).forEach((vat) => checkValidVat(vat, countriesToTest, codes, name));
    });

    it('should return "true" result for valid VATs with extra space characters', () => {
      valid.map((vat) => addCharsToString(vat, ' ')).forEach((vat) => checkValidVat(vat, countriesToTest, codes, name));
    });

    it('should return "false" result for invalid VATs', () => {
      invalid.forEach((vat) => checkInvalidVat(vat, countriesToTest));
    });
  });

  describe('Brazil', () => {
    const { codes, invalid, name, valid, validOnlyByFormat } = brazilVat;

    it('should return "true" result for valid VATs', () => {
      valid.forEach((vat) => checkValidVat(vat, countriesToTest, codes, name));
    });

    it('should return "true" for "isSupportedCountry" and "isValidFormat" fields, but "false" for "isValid" for VATs that match format but still invalid', () => {
      validOnlyByFormat.forEach((vat) => checkOnlyValidFormatVat(vat, countriesToTest, codes, name));
    });

    it('should return "true" result for valid VATs with extra dash characters', () => {
      valid.map((vat) => addCharsToString(vat, '-')).forEach((vat) => checkValidVat(vat, countriesToTest, codes, name));
    });

    it('should return "true" result for valid VATs with extra space characters', () => {
      valid.map((vat) => addCharsToString(vat, ' ')).forEach((vat) => checkValidVat(vat, countriesToTest, codes, name));
    });

    it('should return "false" result for invalid VATs', () => {
      invalid.forEach((vat) => checkInvalidVat(vat, countriesToTest));
    });
  });

  describe('Lithuanian', () => {
    const { codes, invalid, name, valid, validOnlyByFormat } = lithuanianVat;

    it('should return "true" result for valid VATs', () => {
      valid.forEach((vat) => checkValidVat(vat, countriesToTest, codes, name));
    });

    it('should return "true" for "isSupportedCountry" and "isValidFormat" fields, but "false" for "isValid" for VATs that match format but still invalid', () => {
      validOnlyByFormat.forEach((vat) => checkOnlyValidFormatVat(vat, countriesToTest, codes, name));
    });

    it('should return "true" result for valid VATs with extra dash characters', () => {
      valid.map((vat) => addCharsToString(vat, '-')).forEach((vat) => checkValidVat(vat, countriesToTest, codes, name));
    });

    it('should return "true" result for valid VATs with extra space characters', () => {
      valid.map((vat) => addCharsToString(vat, ' ')).forEach((vat) => checkValidVat(vat, countriesToTest, codes, name));
    });

    it('should return "false" result for invalid VATs', () => {
      invalid.forEach((vat) => checkInvalidVat(vat, countriesToTest));
    });
  });

  describe('Strict mode', () => {
    it('should reject VAT numbers with extra characters when strict is true', () => {
      const result = checkVAT('BE0411-905847', [belgium], { strict: true });
      expect(result.isValid).toBe(false);
    });

    it('should accept VAT numbers with extra characters when strict is false', () => {
      const result = checkVAT('BE0411-905847', [belgium]);
      expect(result.isValid).toBe(true);
    });

    it('should accept clean VAT numbers in strict mode', () => {
      const result = checkVAT('BE0411905847', [belgium], { strict: true });
      expect(result.isValid).toBe(true);
    });
  });
});
