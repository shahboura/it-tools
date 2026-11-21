import { describe, expect, it } from 'vitest';
import { generateCookieSecret } from './cookie-secret-generator.service';

describe('cookie-secret-generator', () => {
  describe('generateCookieSecret', () => {
    it('generates 32 bytes worth of url-safe base64 without padding by default', () => {
      const secret = generateCookieSecret();

      expect(secret).toHaveLength(43);
      expect(secret).toMatch(/^[\w-]+$/);
    });

    it.each([
      [16, 22],
      [24, 32],
      [32, 43],
    ])('encodes %i random bytes as %i characters', (byteLength, expectedLength) => {
      const secret = generateCookieSecret(byteLength);

      expect(secret).toHaveLength(expectedLength);
      expect(secret).toMatch(/^[\w-]+$/);
    });

    it('falls back to 32 bytes for unsupported lengths', () => {
      expect(generateCookieSecret(7)).toHaveLength(43);
    });

    it('generates a different secret each time', () => {
      expect(generateCookieSecret()).not.toEqual(generateCookieSecret());
    });
  });
});
