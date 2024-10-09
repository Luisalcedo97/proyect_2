import { Router } from "express";
import {
    renderCreateActivityForm,
    createActivity,
    renderEditForm,
    updateActivity,
    deleteActivity,
} from "../controllers/activities.controller.js";

import { isAuthenticated } from "../helpers/auth.js";

const router = Router();

router.get("/activities/add", isAuthenticated, renderCreateActivityForm);

router.post("/activities/new-activity", isAuthenticated, createActivity);

router.get("/activities", isAuthenticated, renderActivity);

router.get("/activities/edit/:id", isAuthenticated, renderEditForm);

router.get("/activities/edit-activity/:id", isAuthenticated, updateActivity);

router.delete("/activities/delete/:id", isAuthenticated, deleteActivity);

export default router;
