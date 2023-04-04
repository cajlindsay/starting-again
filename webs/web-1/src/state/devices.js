import { takeLatest, call, put } from '@redux-saga/core/effects';
import apiClient from '@starting-again/web-common/src/api-client.js';

// actions
export const FETCH_ALL = 'devices/FETCH_ALL';
export const FETCH_ALL_SUCCEEDED = 'devices/FETCH_ALL_SUCCEEDED';
export const FETCH_ALL_FAILED = 'devices/FETCH_ALL_FAILED';
export const CREATE = 'devices/CREATE';
export const CREATE_SUCCEEDED = 'devices/CREATE_SUCCEEDED';
export const CREATE_FAILED = 'devices/CREATE_FAILED';
export const DELETE = 'devices/DELETE';
export const DELETE_SUCCEEDED = 'devices/DELETE_SUCCEEDED';
export const DELETE_FAILED = 'devices/DELETE_FAILED';

// constants
export const status = {
  IN_PROGRESS: 'IN_PROGRESS',
  IDLE: 'IDLE'
};

// reducers
function defaultState() {
  return {
    items: [],
    status: status.IDLE,
    error: null
  };
}

export function reducer(state = defaultState(), action) {
  switch (action.type) {
    case FETCH_ALL:
    case CREATE:
    case DELETE:
      return {
        ...state,
        status: status.IN_PROGRESS
      };

    case FETCH_ALL_SUCCEEDED:
      return {
        ...state,
        items: action.payload,
        status: status.IDLE,
        error: null
      };

    case FETCH_ALL_FAILED:
    case CREATE_FAILED:
    case DELETE_FAILED:
      return {
        ...state,
        status: status.IDLE,
        error: action.payload
      };

    case CREATE_SUCCEEDED:
    case DELETE_SUCCEEDED:
      return {
        ...state,
        status: status.IDLE,
        error: null
      };

    default:
      return state;
  }
}

// sagas
export function* saga() {
  yield takeLatest([FETCH_ALL, CREATE_SUCCEEDED, DELETE_SUCCEEDED], onFetchAll);
  yield takeLatest(CREATE, onCreate);
  yield takeLatest(DELETE, onDelete);
  yield put({ type: FETCH_ALL });
}

function* onFetchAll() {
  try {
    const response = yield call(apiClient.get, '/api-1/devices');
    yield put({ type: FETCH_ALL_SUCCEEDED, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_ALL_FAILED, payload: error.toString() });
  }
}

function* onCreate(action) {
  try {
    yield call(apiClient.post, '/api-1/devices', action.payload);
    yield put({ type: CREATE_SUCCEEDED });
  } catch (error) {
    yield put({ type: CREATE_FAILED, payload: error.toString() });
  }
}

function* onDelete(action) {
  try {
    yield call(apiClient.delete, `/api-1/devices/${action.payload._id}`);
    yield put({ type: DELETE_SUCCEEDED });
  } catch (error) {
    yield put({ type: DELETE_FAILED, payload: error.toString() });
  }
}

// selectors
export const selectDevices = (state) => state.devices.items;
