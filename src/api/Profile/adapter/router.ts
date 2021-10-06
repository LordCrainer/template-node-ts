import { Router } from "express";
import * as ProfileController from "./controller";

/**
 * @constant {express.Router}
 */
const router: Router = Router();

router.get("/", ProfileController.readingAllProfile);

router.get("/:id", ProfileController.readingProfile);

router.post("/", ProfileController.creatingProfile);

router.put("/:id", ProfileController.editingProfile);

router.delete("/:id", ProfileController.deletingProfile);

/**
 * @export {express.Router}
 */
export default router;
