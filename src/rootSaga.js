/**
  * Root saga combining all application sagas
  */
import authSaga from 'containers/Auth/ducks/sagas';


export default function *() {
  yield [
    authSaga(),
  ];
}
