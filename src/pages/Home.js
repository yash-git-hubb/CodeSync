import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const [roomId , setRoomId] = useState('')
  const [username , setUsername] = useState('')
  const navigate= useNavigate()

  const createNewRoom =(e)=>{
    e.preventDefault();
    const id = uuidv4()
    setRoomId(id)
    toast.success('Room Created Successfully')
    
  }

  const joinRoom=()=>{
    if(!roomId || !username){
      toast.error('RoomId and Username Required')
      return;
    }

    navigate(`/editor/${roomId}`,{
      state:{
        username,
      }
    }
    )

  }
  const handleInputEnter=(e)=>{
    if(e.code==='Enter'){
      joinRoom();
    }

  }
  return (
    <div className='homePageWrapper'>
        <div className='formWrapper'>
            <img src='/logo.png' className='homePageLogo' alt='logo'></img>
            <h4 className='mainLabel'>Paste Invitation Room ID</h4>
            <div className='inputGroup'>
              
                <input 
                type='text'
                className='inputBox'
                placeholder='Room ID'
                value={roomId}
                onChange={(e)=>setRoomId(e.target.value)}
                onKeyUp={handleInputEnter}
                />

                <input 
                type='text'
                className='inputBox'
                placeholder='Username'
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                onKeyUp={handleInputEnter}
                />

                <button onClick={joinRoom} className='btn joinBtn'>Join</button>

                <span  className='createInfo'>If you dont have an invite then create &nbsp;
                    <a onClick={createNewRoom} href='' className='createNewBtn'>new room</a>
                </span>

            </div>
        </div>
        <footer>
          <h4>
            Built with love &nbsp; by &nbsp;      
            <a href='#'>Lucky</a>
            </h4>
        </footer>
    </div>
  )
}

export default Home
