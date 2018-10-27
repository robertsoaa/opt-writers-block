const express = require("express");

const StoryController = require("../controllers/stories");

const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("/story", checkAuth, StoryController.createStory);

router.put("/story/:id", checkAuth, StoryController.updateStory);

router.get("/story", StoryController.getStories);

router.get("/story/:id", StoryController.getStory);

router.delete("/story/:id", checkAuth, StoryController.deleteStory);

module.exports = router;
