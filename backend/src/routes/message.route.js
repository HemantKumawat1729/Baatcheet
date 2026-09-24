import express from 'express';
import { getUsersForSideBar,getConversationsForSidebar,
  getMessages,
  sendMessage
 } from '../controllers/message.controller.js';
import { protectRoute } from '../middlewares/auth.middleware.js';
import {upload} from '../middlewares/upload.middleware.js';

const router=express.Router();

//middleware
router.use(protectRoute);

router.get('/users',getUsersForSideBar);
router.get('/conversations',getConversationsForSidebar);
router.get('/:id',getMessages);
router.post('/send/:id',upload.single("media"),sendMessage);
// todo:show this in the frontend

export default router;