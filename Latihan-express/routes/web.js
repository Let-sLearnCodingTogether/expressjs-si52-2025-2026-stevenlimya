import express from "express"
import * as profileController from "../controller/profileController.js"
import * as profileCont from "../controller/profileCont.js"

const web = express.Router()

web.get('/:username', profileController.publicProfile)
web.get('/:profile/:username', profileController.publicProfile)

export default web
