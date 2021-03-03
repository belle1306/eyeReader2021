import { all, fork } from 'redux-saga/effects';
import { watchGetAuthors } from './authorSaga';

export default function* rootSaga() {
    yield all([fork(watchGetAuthors)]);
}
