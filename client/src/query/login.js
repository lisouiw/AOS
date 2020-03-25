const axios = require("axios");

const instance = axios.create({
  baseURL: "http://localhost:8000/"
});

export const login = setErr => {
  let elements = document.getElementById("form").elements;

  if (!(elements[0].value && elements[1].value))
    return setErr("the form is not complete");

  instance
    .get("/users", {
      params: {
        email: elements[0].value.toLowerCase(),
        password: elements[1].value
      }
    })
    .then(({ data }) => {
      if (data.err) return setErr(data.err);
      setErr(true);
      window.location = "/success";
    })
    .catch(({ err }) => setErr(err));
};
