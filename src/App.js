import logo from './logo.svg';
import './App.css';
import app from './firebase';
import {useState, useEffect} from 'react'
import { getDatabase, ref, update, push, onValue, remove } from "firebase/database";

function App() {
  const [username, setusername] = useState('Ram')
  const [data, setdata] = useState([])

  const db= getDatabase()

  useEffect(() => {
    onValue(ref(db, 'users/'), (snapshot)=>{
      const datas= snapshot.val()
      const emptyData= []
      for(const id in datas){
        emptyData.push({id, ...datas[id]})
      }
      setdata(emptyData);
    })
  }, [])

  const clickHandler=()=>{
    push(ref(db, 'users/'),{
      name: username,
      email: "rupak@gmail.com"
    })
  }

  const updateHandler= (id)=>{
    update(ref(db, 'users/'+ id), {
      name: "Hari"
    })
  }

  const deleteHandler= (id)=>{
    remove(ref(db, 'users/'+id))
  }

  return (
    <>
      <input value={username} onChange={(e)=> setusername(e.target.value)} placeholder="Enter Username" />
      <button onClick={clickHandler}>Add</button>
      {/* <button onClick={getHandler}>Get</button>   */}
      {data?.map(item=>{
        return(
          <div key={item.id}>
            <h5>{item.email}</h5>
            <h5>{item.name}</h5>
            <button onClick={(e)=> deleteHandler(item.id)}>Delete</button>
            <button onClick={(e)=> updateHandler(item.id)}>Update</button>
          </div>
        )
      })}    
    </>
  );
}

export default App;
