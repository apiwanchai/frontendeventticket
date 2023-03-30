export const useLazyFetchFullAPI = (request, opts) => {
  const config = useRuntimeConfig();
  return useLazyFetch(request, { baseURL: config.public.baseURL, ...opts });
};

export const useLazyFetchAPI = () => {
  const { token } = useToken();
  const baseURL = useRuntimeConfig().public.baseURL;
  const headers = {
    Authorization: `Bearer ${token.value.token}`,
  };
  return {
    get: (request, payload, opts) =>
      useLazyFetch(
        request + (payload ? "?" : "") + new URLSearchParams(payload),
        { baseURL, ...(token.value.token && { headers }), ...opts }
      ),
    post: (request, payload, opts) =>
      useLazyFetch(request, {
        baseURL,
        method: "POST",
        ...(token.value.token && { headers }),
        body: JSON.stringify(payload),
        ...opts,
      }),
    update: (request, payload, opts) =>
      useLazyFetch(request, {
        baseURL,
        method: "UPDATE",
        ...(token.value.token && { headers }),
        body: JSON.stringify(payload),
        ...opts,
      }),
    delete: (request, payload, opts) =>
      useLazyFetch(request, {
        baseURL,
        method: "DELETE",
        ...(token.value.token && { headers }),
        body: JSON.stringify(payload),
        ...opts,
      }),
    patch: (request, payload, opts) =>
      useLazyFetch(request, {
        baseURL,
        method: "PATCH",
        ...(token.value.token && { headers }),
        body: JSON.stringify(payload),
        ...opts,
      }),
    put: (request, payload, opts) =>
      useLazyFetch(request, {
        baseURL,
        method: "PUT",
        ...(token.value.token && { headers }),
        body: JSON.stringify(payload),
        ...opts,
      }),
  };
};
