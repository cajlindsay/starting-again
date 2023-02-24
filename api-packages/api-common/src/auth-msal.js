import { BearerStrategy } from 'passport-azure-ad';
import passport from 'passport';

const { 
  MSAL_TENANT_URL, 
  MSAL_CLIENT_ID, 
  MSAL_CLIENT_SECRET 
} = process.env;

console.log('*************');
console.log(MSAL_CLIENT_ID);
console.log(MSAL_CLIENT_SECRET);
console.log('***********');

const strategy = new BearerStrategy(
  {
    clientID: MSAL_CLIENT_ID,
    clientSecret: MSAL_CLIENT_SECRET,
    identityMetadata: `${MSAL_TENANT_URL}/v2.0/.well-known/openid-configuration`,
    validateIssuer: false,
    loggingLevel: 'info',
    passReqToCallback: false
    //scope: ['openid', 'profile']
    //loggingNoPII: false // uncomment this line to get better log output
  },
  (token, done) => {
    done(null, {}, token);
  }
);

export default passport.authenticate(strategy, { session: false });
