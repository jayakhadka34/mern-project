import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router'

const CreatePage = () => {
  const navigate=useNavigate()

  const [title, setTitle]=useState("")
  const [content,setContent]=useState("")
  const [loading, setLoading]=useState(false)

  const handleSubmit=async (e)=>{
  e.preventDefault()
  if (!title.trim() || !content.trim()){
    toast.error("All fields are required")
    return
  }
  setLoading(true)
  try{
  await axios.post("http://localhost:5001/api/notes",{
    title,
    content,
  });
  }catch(error){
 console.log("Error creating note",error)
  }finally{
setLoading(false)
navigate("/")
  }

  console.log()
  }
  return (
    <div className='min-h-screen bg-base-200'>
      <div className='card-body'>
        <h2 className='card-title text-2xl mb-4'>Create New Note</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-control mb-4'>
          <label className='label'>
            <span className='label-text'>Title</span>

          </label>
         <input type='text' placeholder='Note Title' className='input input-bordered ' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <label className='label'>
            <span className='label-text'>Content</span>

          </label>
         <input type='text' placeholder='write your note here' className='input input-bordered ' value={content} onChange={(e)=>setContent(e.target.value)}/>
         </div>
         <div className="card-actions justify-end" >
           <button type='submit' className='btn btn-primary' disabled={loading}>
            {loading ? "Creating..." : "Create Note"}
            
            </button>

         </div>
        </form>


      </div>
    
    
    
    </div>
  )
}

export default CreatePage