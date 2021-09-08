const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");

//check if environment is production or not
const isProduction = process.env.NODE_ENV === "production";
const origin = {
  origin: isProduction ? "https://localhost:3000" : "*",
};

var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://fusion-analytics.us.auth0.com/.well-known/jwks.json",
  }),
  audience: "https://fusion/api",
  algorithms: ["RS256"],
});

//middlewares
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(jwtCheck);

//routes
app.use(require("./routes/index"));
app.use(require("./routes/events"));
app.use(require("./routes/trends"));
app.use(require("./routes/dashboards"));
app.use(require("./routes/users"));

app.listen(process.env.SERVER_PORT || 6060, () => {
  console.log(`Fusion API server listening...`);
});
