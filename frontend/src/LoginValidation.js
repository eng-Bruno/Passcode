function Validation(values) {
  let error = {};
  const email_mask = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_mask = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (values.email === "") {
    error.email = "Email should not be empty";
  } else if (!email_mask.test(values.email)) {
    error.email = "Email Didn't match";
  } else {
    error.email = "";
  }

  if (values.password === "") {
    error.password = "Password should not be empty";
  } else if (!password_mask.test(values.password)) {
    error.password = "Password didn't match";
  } else {
    error.password = "";
  }

  return error;
}

export default Validation;
