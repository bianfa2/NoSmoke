import key from './key';

const admin = require('firebase-admin');
const serviceAccount = key.database;

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

export default db;