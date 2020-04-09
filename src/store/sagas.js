import {takeEvery} from 'redux-saga/effects';

function * mySaga() {
    yield takeEvery("",fetchUser);
}
export default mySaga;