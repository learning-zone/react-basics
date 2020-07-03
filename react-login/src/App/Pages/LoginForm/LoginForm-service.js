export const signUp = (body) => {
  return fetch({
    method: 'POST',
    url: `${API}/sign-up`,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
};


export const signIn = (body) => {
  return fetch({
    method: 'POST',
    url: `${API}/sign-in`,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
};


export const resetPassword = (body) => {
  return fetch({
    method: 'POST',
    url: `${API}/sign-in`,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
};