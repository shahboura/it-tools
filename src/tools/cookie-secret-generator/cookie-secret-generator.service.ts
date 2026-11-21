import { Base64 } from 'js-base64';

export const cookieSecretByteLengths = [16, 24, 32];

export function generateCookieSecret(byteLength = 32): string {
  const size = cookieSecretByteLengths.includes(byteLength) ? byteLength : 32;
  return Base64.fromUint8Array(crypto.getRandomValues(new Uint8Array(size)), true);
}
