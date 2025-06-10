import express from "express";
import { changePriorityHigh, changePriorityMedium, changePriorityLow, changeStatusDone, changeStatusProgress, changeStatusTodo, deleteTask, editTask, getAllTasks, newTask } from "../controllers/task.controller.js";
import authMiddleware from "../middleware/middleware.js";

const router = express.Router()

// CRUD on task
router.get('/all', authMiddleware, getAllTasks)
router.post('/new', authMiddleware, newTask)
router.put('/edit/:_id', authMiddleware, editTask)
router.delete('/delete/:_id', authMiddleware, deleteTask)

// change task status
router.put('/todo/:_id', authMiddleware, changeStatusTodo)
router.put('/progress/:_id', authMiddleware, changeStatusProgress)
router.put('/done/:_id', authMiddleware, changeStatusDone)

// change task priority
router.put('/low/:_id', authMiddleware, changePriorityLow)
router.put('/medium/:_id', authMiddleware, changePriorityMedium)
router.put('/high/:_id', authMiddleware, changePriorityHigh)

export default router