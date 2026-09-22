import mongoose from 'mongoose';
 
const messageSchema=new mongoose.messageSchema({
  senderId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true,
  },
  receiverId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true,
  },
  text:{
    type:String
  },
  image:{
    type:String,
  },
  video: {
    type:String,
  },
},
{timestamps:true},
);