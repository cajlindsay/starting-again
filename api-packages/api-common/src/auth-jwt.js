import jwt from 'jsonwebtoken';
import jwksClient from 'jwks-rsa';
import axios from 'axios';

const { 
  MSAL_TENANT_URL, 
  MSAL_CLIENT_ID
} = process.env;

const DISCOVERY_KEYS_ENDPOINT = `${MSAL_TENANT_URL}/discovery/v2.0/keys`;
const configPromise = axios.get(`${MSAL_TENANT_URL}/v2.0/.well-known/openid-configuration`);

export default function validateJwt(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.sendStatus(401);
  }

  const token = authHeader.split(' ')[1];

  return configPromise.then((config) => {
    const validationOptions = {
      audience: MSAL_CLIENT_ID,
      issuer: config.issuer
    };

    jwt.verify(token, getSigningKeys, validationOptions, (err) => {
      console.log(new Date());
      if (err) {
        console.log(err);
        return res.sendStatus(403);
      }

      return next();
    });
  });
}

function getSigningKeys(header, callback) {
  var client = jwksClient({
    jwksUri: DISCOVERY_KEYS_ENDPOINT
  });

  client.getSigningKey(header.kid, function (err, key) {
    if (err) {
      console.log(err);
      throw err;
    }

    var signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
}
