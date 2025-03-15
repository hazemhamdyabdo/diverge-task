declare module 'vform' {
  import { AxiosInstance } from 'axios';

  export class Form {
    static axios: AxiosInstance;
    constructor(data: Record<string, object>);
    reset(): void;
    submit(method: string, url: string): Promise<object>;
    // Add other methods and properties as needed
  }
}
