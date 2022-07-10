import { useState } from 'react';

const isBrowser = typeof window !== 'undefined';

export function stringifyOptions(options) {
  return Object.keys(options).reduce((acc, key) => {
    if (key === 'days') {
      return acc;
    }
    if (options[key] === false) {
      return acc;
    }
    if (options[key] === true) {
      return `${acc}; ${key}`;
    }
    return `${acc}; ${key}=${options[key]}`;
  }, '');
}

/**
 *
 * Description of the function that sets cookies
 *
 * @param {String} name Name cookie
 * @param {String} value Value cookie
 * @param {Object} options Cookie options
 * @param {number} options.days The number of days the cookie is stored (defaults to 7)
 * @param {string} options.path The path of the cookie (defaults to '/')
 * @param {string} options.domain Optional domain (Not Required)
 * @param {string} options.SameSite Optional SameSite (Not Required)
 * @param {boolean} options.Secure Optional Secure value (Not Required)
 * @param {boolean} options.HttpOnly Optional HttpOnly (Not Required)
 *
 */

export const setCookie = (name, value, options) => {
  if (!isBrowser) return;

  const optionsWithDefaults = {
    days: 7,
    path: '/',
    ...options,
  };

  const current = new Date();

  current.setTime(
    // eslint-disable-next-line no-magic-numbers
    current.getTime() + optionsWithDefaults.days * 60 * 60 * 24 * 1000
  );

  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; expires=${current.toUTCString()}${stringifyOptions(optionsWithDefaults)}`;
};

/**
 *
 * Description of the function that receives cookies
 *
 * @param {String} name Name cookie
 * @param {String} initialValue InitialValue cookie (default empty string)
 *
 */

export const getCookie = (name, initialValue = '') => {
  return (
    (isBrowser &&
      document.cookie.split('; ').reduce((r, v) => {
        const parts = v.split('=');
        return parts[0] === name ? decodeURIComponent(parts[1]) : r;
      }, '')) ||
    initialValue
  );
};

/**
 *
 * Hook Description
 *
 * @param {String} key The name of the cookie that we want to change
 * @param {String} initialValue The cookie value we want to view
 * @description In the function we declare the hook as follows:
 * const [cookie, setExampleCookie] = useCookie('key', '12')
 * Method for updating cookies and, if necessary, options
 * () => setExampleCookie('key', options);
 *
 */

export const useCookie = (key, initialValue) => {
  const [item, setItem] = useState(() => {
    return getCookie(key, initialValue);
  });

  const updateItem = (value, options) => {
    setItem(value);
    setCookie(key, value, options);
  };

  return [item, updateItem];
};
