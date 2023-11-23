import apiClient from "./api-client";

interface FetchResponse<T> {
    products: T[];
  }
  

class HttpService {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll<T>() {
        const controller = new AbortController();
        const request = apiClient.get<FetchResponse<T>>(this.endpoint, {
        signal: controller.signal,
      });

      return { request, cancel: () => controller.abort() }
    }
}

const create = (endpoint: string) => new HttpService(endpoint);

export default create;