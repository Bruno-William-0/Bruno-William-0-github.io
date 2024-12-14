import { Button, Container } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import api from "../../axios"

interface Tarefa
{
    id: number
    title: string
    completed: boolean
}

export default function Tarefas()
{
const [tarefas, setTarefas] = useState<Tarefa[]>([])
useEffect(()=>{
    getTarefas()
},[])
async function getTarefas() {
    const response = await api.get('/task') 
    console.log(response.data)
        setTarefas(response.data)
        
    
}

const  [tituloTarefa, setTituloTarefa] = useState('')
function adicionarTarefa()
{
    
    const novaTarefa =
    {
        title: tituloTarefa,
        completed: false
    }
    api.post('/task', novaTarefa)
    .then(() => {
        setTituloTarefa('')
        getTarefas()
    }).catch(error => {
        console.log(error)
    })
}

function apagarTarefa(id: Number)
{
    api.delete(`/task/${id}`)
    .then(()=>{
        getTarefas()
    })
    .catch(error =>
    {
        console.log(error)
    }
    )
}

function alterarStatus(tarefa: Tarefa)
{
    tarefa.completed = !tarefa.completed
    api.put(`/task/${tarefa.id}`, tarefa)
    .then(()=>{
        getTarefas()
    })
    .catch(error=> console.log(error))
}

 return(
    <Container>
        <h1 color={'white'}>Tarefas</h1>
        <input type="text" value={tituloTarefa} onChange={(e)=>{setTituloTarefa(e.target.value)}}></input>
        <Button bg='green' onClick={adicionarTarefa} color={'white'} ml={4}>Adicionar</Button>
        <ul>
            {tarefas.map((tarefa)=>(
                <li key={tarefa.id}>
                    {tarefa.title}
                    <Button bg={tarefa.completed ? 'green':'orange'} size='xs' ml={4} onClick={()=>{alterarStatus(tarefa)}}> {tarefa.completed ? 'Realizda' : 'Pendente'}</Button>
                    <Button bg={'red'} size='xs' ml={4} onClick={()=>{apagarTarefa(tarefa.id)}}>Excluir</Button>
                </li>

            ))
        }
        </ul>
    </Container>
 )
}