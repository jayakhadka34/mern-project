import { json } from "express";
import Note from "../models/Note.js"

export  async function getallNotes(req,res){
  try{
   const notes= await Note.find().sort({createdAt:-1});// show newest created first
   res.status(200).json(notes)
  }catch(error){
 console.error("Error in getallNotes controllers",error)
 res.status(500).json({message:"Internal server error"})
  }
}
export async function getNoteById(req,res){
    try{
   const note= await Note.findById(req.params.id);
   if(!note) return res.status(404),json({message:"Note not found!"});
   res.status(200).json(note)
    }
    catch(error){
     console.error("Error in getNoteById controllers",error)
 res.status(500).json({message:"Internal server error"})
    }
}


export  async function createNotes(req, res){
   try{
    const {title,content}=req.body
    const note= new Note({title,content})
    const savednote=await note.save()
    res.status(201).json(savednote)
   }catch(error){
 console.error("Error in createNotes controllers",error)
 res.status(500).json({message:"Internal server error"})
   }
}
export async function updateNotes(req, res){
   try{
   const {title,content}=req.body
   const updateNote= await Note.findByIdAndUpdate(req.params.id,{title,content},{
    new:true,
   })

   if(!updateNote) return res.status(404).json({message:"Note not found"})

   res.status(200).json(updateNote)
   }catch(error){
     console.error("Error in createNotes controllers",error)
   res.status(500).json({message:"Internal server error"})
   }
}
export async function deleteNotes(req, res){
    try{
const deletedNote=await Note.findByIdAndDelete(req.params.id)
if(!deletedNote) return res.status(404).json({message:"Note not found"})
res.status(200).json({message:"Note deleted sucessfully"})
    }
    catch(error){
     console.error("Error in deleteNotes controllers",error)
   res.status(500).json({message:"Internal server error"})
    }
}

