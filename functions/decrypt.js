const NodeRSA = require('node-rsa');
const rc4 = require('./arc4');

const decrypt = (privateKey, envKey, data) => {
  // Convert envKey from base64 to buffer

  // eslint-disable-next-line no-console
  console.log('privateKey: ', privateKey);
  
  const encryptedBuffer = Buffer.from(envKey, 'base64');

  // Initialize NodeRSA instance with the private key and set encryption scheme
  const keyRSA = new NodeRSA(privateKey, 'private', { encryptionScheme: 'pkcs1' });
  keyRSA.setOptions({ environment: 'browser' }); // Use browser-compatible option

  try {
    // Decrypt the envKey to get the decrypted key for RC4
    const decrypted = keyRSA.decrypt(encryptedBuffer, 'buffer'); // Specify 'buffer' output

    // Use RC4 with the decrypted key to decode the data
    const cipher = rc4(decrypted);
    return cipher.decode(Buffer.from(data, 'base64'), 'utf8');
  } catch (error) {
    console.error('Error during decryption:', error.message);
    throw new Error('Decryption failed: check key or encrypted data format.');
  }
};

module.exports = decrypt;
