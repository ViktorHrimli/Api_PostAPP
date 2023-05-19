const shemaRegex = {
  password:
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  username: /^[a-zA-Z0-9]+$/,
  url: /^(http|https):\/\/[^\s/$.?#].[^\s]*$/,
  text: /^[a-zA-Z0-9]+$/,
};

export { shemaRegex };
