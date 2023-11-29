import crypto from 'node:crypto';

const getRandomUUID = () => crypto.randomUUID();

export { getRandomUUID };