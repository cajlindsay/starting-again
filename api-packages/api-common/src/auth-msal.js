import { BearerStrategy } from 'passport-azure-ad';
import passport from 'passport';

const TENANT_URL = 'https://login.microsoftonline.com/consumers';
const CLIENT_ID = 'ef0f1a58-5d27-48f4-a47d-043df4ea4c3f';
const CLIENT_SECRET = 'HqN8Q~uAE.yQED1eb-2k_bnVXjCNwqojugqfFaSp';

const strategy = new BearerStrategy(
  {
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    identityMetadata: `${TENANT_URL}/v2.0/.well-known/openid-configuration`,
    validateIssuer: false,
    loggingLevel: 'info',
    passReqToCallback: false
    //scope: ['openid', 'profile']
    //loggingNoPII: false // uncomment this line to get better log output
  },
  (token, done) => {
    console.log(token);
    done(null, {}, token);
  }
);

export default passport.authenticate(strategy, { session: false });
