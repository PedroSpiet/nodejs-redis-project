export default {
  host: process.env.mailhost,
  port: process.env.mailport,
  auth: {
    user: process.env.user,
    pass: process.env.password,
  },
};
