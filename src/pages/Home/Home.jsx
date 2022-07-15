import React , {useState, useEffect} from 'react'
import Card from '../../components/Card/card'
import './styles.css'
const Home = () => {

 const [studentName, setStudentName] = useState();
// esse estado vai receber os etudantes da minha lita de presenaça
 const [students, setStudents] = useState([])
 const[user, setUser] = useState({name:'', avatar:''});

 function handleAddStudent(){
const newStudent = {
  name:studentName,
  time: new Date().toLocaleDateString('pt-br', {
    hour: '2-digit',
    minute: '2-digit',
    second:'2-digit',
  })
 
}

setStudents(prevState=>[...prevState,newStudent]);
input.value = '';
 }
  
useEffect(()=>{
  fetch('https://api.github.com/users/diegofchagas')
  .then(response => response.json())
  .then(data =>{
    setUser({
      name: data.name,
      avatar: data.avatar_url,
    })
  })
},[])


  return (
    <div className='container'>

      <header>
      <h1>Lista de Presença</h1>

      <div>
        <strong>{user.name}</strong>
        <img src={user.avatar} alt="foto perfil" />
      </div>
      </header>
        

        <input id='input'  type="text" placeholder='digite um nome...' onChange={e => setStudentName(e.target.value)} />
         {/* nesse caso ele me dar o valor atual que esta dentro do input no momento atual que é informado */}
        <button type='button' onClick={handleAddStudent}>Adicionar</button>
        
        { students.map(student => (<Card key={student.time} name={student.name}time={student.time}/>) )
          
        

        }

        
    </div>
  )
}

export default Home;