const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");
require("dotenv").config();

var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
  }),
  audience: process.env.AUTH0_AUDIENCE,
  algorithms: ["RS256"],
});

//middlewares
app.use(cors({ origin: "*" }));
app.use(express.json({limit: '100mb'}));
app.use(express.urlencoded({limit: '100mb', extended: false}));
app.use(jwtCheck.unless({path: ['/health-query-service', '/getPluginStatus']}));

//routes
app.use(require("./routes/index"));
app.use(require("./routes/events"));
app.use(require("./routes/trends"));
app.use(require("./routes/dashboards"));
app.use(require("./routes/users"));
app.use(require("./routes/cohorts"));
app.use(require("./routes/session"));
app.use(require("./routes/plugins"));

app.get('/health-query-service', (req, res) => {
  res.json({"health": 'OK'})
})

app.listen(process.env.PORT || 6060, () => {
  console.log(`Fusion API server listening...`);
});
