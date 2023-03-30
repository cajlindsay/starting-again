import { fork } from '@redux-saga/core/effects';
import { saga as devicesSaga } from './devices';

export default function* rootSaga() {
  yield fork(devicesSaga);
}
