import { LoginView } from '../presentation/login-view';
import { LogStrategy } from '../analytics/log-strategy';
import { ErrorLog } from '../analytics/error-log';
import { ScreenLog } from '../analytics/screen-log';
import { ActionLog } from '../analytics/action-log';
import { SentryAdapter } from '../infra/sentry-adapter';
import { FirebaseAdapter } from '../infra/firebase-adapter';

export const makeLoginView = (): LoginView => {
  const sentryAdapter = new SentryAdapter();
  const firebaseAdapter = new FirebaseAdapter();
  const errorLog = new ErrorLog(sentryAdapter);
  const actionLog = new ActionLog(firebaseAdapter);
  const screenLog = new ScreenLog(firebaseAdapter);

  const logStrategy = new LogStrategy(errorLog, actionLog, screenLog);
  return new LoginView(logStrategy);
}