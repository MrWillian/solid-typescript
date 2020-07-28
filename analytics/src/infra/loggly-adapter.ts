import { ErrorAnalytics } from "../analytics/error-analytics";

export class LogglyAdapter implements ErrorAnalytics {
  saveError(errir: any): void {}
}
