class FluencyLevelRouter {
  constructor(express, controller) {
    this.router = express.Router();
    this.controller = controller;
  }

  routes() {
    this.router.get("/", this.controller.getAllFluencyLevels);
    return this.router;
  }
}

module.exports = FluencyLevelRouter;
