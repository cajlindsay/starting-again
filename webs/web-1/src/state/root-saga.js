import { fork } from 'redux-saga';

import { rootSaga as carsSaga } from './cars';

export default function* rootSaga() {
  yield fork(carsSaga);
}
