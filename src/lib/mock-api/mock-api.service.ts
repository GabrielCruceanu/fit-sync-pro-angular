import { Injectable } from '@angular/core';
import { MockApiRequestHandler } from './mock-api.request-handler';
import { compact, fromPairs } from 'lodash';

@Injectable({ providedIn: 'root' })
export class MockApiService {
  private _handler: { [key: string]: Map<string, MockApiRequestHandler> } = {
    get: new Map<string, MockApiRequestHandler>(),
    post: new Map<string, MockApiRequestHandler>(),
    patch: new Map<string, MockApiRequestHandler>(),
    delete: new Map<string, MockApiRequestHandler>(),
    put: new Map<string, MockApiRequestHandler>(),
    head: new Map<string, MockApiRequestHandler>(),
    jsonp: new Map<string, MockApiRequestHandler>(),
    options: new Map<string, MockApiRequestHandler>(),
  };

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Find the handler from the service
   * with the given method and url
   *
   * @param method
   * @param url
   */
  findHandler(
    method: string,
    url: string,
  ): {
    handler: MockApiRequestHandler | undefined;
    urlParams: { [key: string]: string };
  } {
    // Prepare the return object
    const matchingHandler: {
      handler: MockApiRequestHandler | undefined;
      urlParams: { [key: string]: string };
    } = {
      handler: undefined,
      urlParams: {},
    };

    // Split the url
    const urlParts = url.split('/');

    // Get all related request handlers
    const handlers = this._handler[method.toLowerCase()];

    // Iterate through the handlers
    handlers.forEach((handler, handlerUrl) => {
      // Skip if there is already a matching handler
      if (matchingHandler.handler) {
        return;
      }

      // Split the handler url
      const handlerUrlParts = handlerUrl.split('/');

      // Skip if the handler url parts length is not the same as the url parts length
      if (urlParts.length !== handlerUrlParts.length) {
        return;
      }

      // Compare
      const matches = handlerUrlParts.every(
        (handlerUrlPart, index) => handlerUrlPart === urlParts[index] || handlerUrlPart.startsWith(':'),
      );

      // If here is a match...
      if (matches) {
        // Assign the matching handler
        matchingHandler.handler = handler;

        // Extract and assign the url params
        matchingHandler.urlParams = fromPairs(
          compact(
            handlerUrlParts.map((handlerUrlPart, index) =>
              handlerUrlPart.startsWith(':') ? [handlerUrlPart.slice(1), urlParts[index]] : undefined,
            ),
          ),
        );
      }
    });

    return matchingHandler;
  }

  /**
   * Register GET request handler
   *
   * @param url - URL address of the mocked API endpoint
   * @param delay - Delay of the response in milliseconds
   */
  onGet(url: string, delay?: number): MockApiRequestHandler {
    return this._registerHandler('get', url, delay);
  }

  /**
   * Register POST request handler
   *
   * @param url - URL address of the mocked API endpoint
   * @param delay - Delay of the response in milliseconds
   */
  onPost(url: string, delay?: number): MockApiRequestHandler {
    return this._registerHandler('post', url, delay);
  }

  /**
   * Register PATCH request handler
   *
   * @param url - URL address of the mocked API endpoint
   * @param delay - Delay of the response in milliseconds
   */

  onPatch(url: string, delay?: number): MockApiRequestHandler {
    return this._registerHandler('patch', url, delay);
  }

  /**
   * Register DELETE request handler
   *
   * @param url - URL address of the mocked API endpoint
   * @param delay - Delay of the response in milliseconds
   */
  onDelete(url: string, delay?: number): MockApiRequestHandler {
    return this._registerHandler('delete', url, delay);
  }

  /**
   * Register PUT request handler
   *
   * @param url - URL address of the mocked API endpoint
   * @param delay - Delay of the response in milliseconds
   */
  onPut(url: string, delay?: number): MockApiRequestHandler {
    return this._registerHandler('put', url, delay);
  }

  /**
   * Register HEAD request handler
   *
   * @param url - URL address of the mocked API endpoint
   * @param delay - Delay of the response in milliseconds
   */
  onHead(url: string, delay?: number): MockApiRequestHandler {
    return this._registerHandler('head', url, delay);
  }

  /**
   * Register JSONP request handler
   *
   * @param url - URL address of the mocked API endpoint
   * @param delay - Delay of the response in milliseconds
   */
  onJsonp(url: string, delay?: number): MockApiRequestHandler {
    return this._registerHandler('jsonp', url, delay);
  }

  /**
   * Register OPTIONS request handler
   *
   * @param url - URL address of the mocked API endpoint
   * @param delay - Delay of the response in milliseconds
   */
  onOptions(url: string, delay?: number): MockApiRequestHandler {
    return this._registerHandler('options', url, delay);
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Register and return a new instance of the handler
   * @param method
   * @param url
   * @param delay
   * @private
   */
  private _registerHandler(method: string, url: string, delay?: number): MockApiRequestHandler {
    // Create a new instance of the handler
    const mockHttp = new MockApiRequestHandler(url, delay);

    // Store the handler to access it from the interceptor
    this._handler[method].set(url, mockHttp);

    // Return the handler
    return mockHttp;
  }
}
