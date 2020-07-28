import { ErrorAnalytics } from "../analytics/error-analytics";

export class SentryAdapter implements ErrorAnalytics {
  saveError(errir: any): void {}
}
