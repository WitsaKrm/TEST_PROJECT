require("dotenv").config();
const path = require("path");
const buildApp = require("./src/app");
const { nodeRoutes, userRoutes } = require("./src/routes/routes");

const startApp = async () => {
  const appOptions = {
    logger: true,
  };

  const app = buildApp(appOptions);

  const port = process.env.DB_PORT || 9000;
  const host = process.env.DB_HOST || "172.20.10.8";
  nodeRoutes(app);
  userRoutes(app);
  try {
    app.listen(port, host, () => {
      console.log(`Server is running on port ${port} ${host}`);
    });
  } catch (error) {
    throw error;
  }
};

startApp();
