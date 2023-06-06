const FetchData = async (method, url, data) => {
  const options = {
    method: method,
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  };

  return fetch(url, options)
    .then((response) => {
      if (response.status !== 200)
        throw new Error(`Can't open with status ${response.status}`);

      return response.json();
    })
    .catch((error) => {
      console.error(error);
    });
};
export default FetchData;
