const expect = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const app = setupExpressServer();

describe("The express server", () => {
  it("should example x", () => {});
});
