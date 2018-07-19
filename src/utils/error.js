// @flow
export const checkStatus = (response: Object) => {
  if (response.ok) {
    // eslint-disable-next-line compat/compat
    return Promise.resolve(response);
  }
  // eslint-disable-next-line compat/compat
  return Promise.reject(response.status);
};

export const printError = (errorCode: number, token: string) => {
  if (errorCode === 401) {
    console.error(`The token ${token} has been deleted by someone on your team. Please create a new token on your team page at inflect.com.`);
  } else if (errorCode === 403) {
    console.error(`The token ${token} has been revoked by Inflect. Contact hello@inflect.com for more information.`);
  } else {
    console.error(`Non-200 status code, hiding Inflect Map.`);
  }
};
