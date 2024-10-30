/* eslint-disable no-console */
const NodeRSA = require('node-rsa');
const rc4 = require('./arc4');

const decrypt = (privateKey, envKey, data) => {
  // Convert envKey from base64 to buffer
  const privateKeyBuffer = Buffer.from(privateKey, 'base64');
  const encryptedBuffer = Buffer.from(envKey, 'base64');

  // Initialize NodeRSA instance with the private key and set encryption scheme
  const keyRSA = new NodeRSA(privateKeyBuffer, 'private', {
    encryptionScheme: 'pkcs1',
    environment: 'browser',
  });

  try {
    console.log('encryptedBuffer type:', encryptedBuffer.constructor.name); // Should be Buffer

    // Decrypt the envKey to get the decrypted key for RC4
    const decrypted = keyRSA.decrypt(encryptedBuffer, 'buffer'); // Ensure output is a buffer
    console.log('decrypted type:', decrypted.constructor.name); // Should output Buffer if decryption was successful

    // Use RC4 with the decrypted key to decode the data
    const cipher = rc4(decrypted);
    return cipher.decode(Buffer.from(data, 'base64'), 'utf8');
  } catch (error) {
    console.error('Error during decryption:', error.message);
    throw new Error('Decryption failed: check key or encrypted data format.');
  }
};

module.exports = decrypt;
