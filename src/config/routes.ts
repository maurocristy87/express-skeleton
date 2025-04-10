import { Router } from "express";
import { container } from "tsyringe";
import { UserController } from "@controller/UserController";

const router = Router();

const userController = container.resolve(UserController);

router.get("/users", (req, res) => userController.getUsers(req, res));
router.get("/users/:id", (req, res) => userController.getUserById(req, res));
router.post("/users", (req, res) => userController.createUser(req, res));

export default router;
