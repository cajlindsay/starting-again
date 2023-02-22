import express from 'express';
import { BearerStrategy } from 'passport-azure-ad';
import passport from 'passport';

import foo from 'package-1/src/module-1.js';
import routes1 from './routes-1.js';

var strategy = new BearerStrategy(
  {
    clientID: 'ef0f1a58-5d27-48f4-a47d-043df4ea4c3f',
    //scope: ['openid', 'profile']
    clientSecret: 'HqN8Q~uAE.yQED1eb-2k_bnVXjCNwqojugqfFaSp',
    validateIssuer: true,
    loggingLevel: 'info',
    passReqToCallback: false,
    identityMetadata: 'https://login.microsoftonline.com/consumers/v2.0/.well-known/openid-configuration',
    // loggingNoPII: false // uncomment this line to get better log output
  },
  (token, done) => {
    console.log(token);
    done(null, {}, token);
  }
);

const PORT = process.env.PORT || 3000;
const app = express();

app.use(passport.authenticate(strategy, { session: false }));

app.get('/', (req, res) => {
  res.json({ api: 'api-1', module: foo(), name: req.authInfo.name });
});

app.use('/routes-1', routes1);

app.listen(PORT, () => {
  console.log('api-1 listening on port ' + PORT);
});
