const express = require("express");
const {check} = require("express-validator");
const router = express.Router();

const projectController = require("../controllers/projectController");
const auth = require("../middleware/auth");
const checkValidations = require("../middleware/checkValidations");
const taskController = require("../controllers/taskController");

// Create project
// api/projects
router.post("/",
    auth,
    [check("name", "Project name is required").not().isEmpty()],
    projectController.createProject
);

router.get("/",
    auth,
    projectController.getUserProjects
);

router.put("/:id",
    auth,
    [check("name", "Project name is required").not().isEmpty()],
    projectController.updateProject
);

router.delete("/:id",
    auth,
    projectController.deleteProject
);

// Get project tasks
// api/projects/:id/tasks
router.get("/:id/tasks",
    auth,
    taskController.getTasks
);

module.exports = router;
