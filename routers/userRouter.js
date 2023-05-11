class UserRouter {
  constructor(express, controller, authenticateToken) {
    this.router = express.Router();
    this.controller = controller;
    this.authenticateToken = authenticateToken;
  }

  routes() {
    this.router.get(
      "/",
      this.authenticateToken,
      this.controller.getUserProfile
    );
    this.router.put(
      "/",
      this.authenticateToken,
      this.controller.updateUserProfile
    );
    // this.router.put(
    //   "/xp",
    //   this.authenticateToken,
    //   this.controller.incrementUserXp
    // );
    this.router.post("/check-if-exist", this.controller.checkIfUserExists);

    return this.router;
  }
}

module.exports = UserRouter;
