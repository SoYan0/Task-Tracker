import express from "express";
import { changePriorityHigh, changePriorityMedium, changeStatusDone, changeStatusProgress, changeStatusTodo, deleteTask, editTask, getAllTasks, newTask } from "../controllers/task.controller.js";

const router = express.Router()

// CRUD on task
router.get('/all', getAllTasks)
router.post('/new', newTask)
router.put('/edit/:_id', editTask)
router.delete('/delete/:_id', deleteTask)

// change task status
router.put('/todo/:_id', changeStatusTodo)
router.put('/progress/:_id', changeStatusProgress)
router.put('/done/:_id', changeStatusDone)

// change task priority
router.put('/low/:_id', changePriorityLow)
router.put('/medium/:_id', changePriorityMedium)
router.put('/high/:_id', changePriorityHigh)

export default router