const colors = require("colors");

const app = require("./app");

const port = process.env.PORT || 5000;
const mode = process.env.NODE_ENV;

app.listen(port, () =>
  console.log(`Server is running mode ${mode} on port ${port}`)
);
