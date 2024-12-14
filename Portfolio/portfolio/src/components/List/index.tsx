import { Button, Card, Container, Flex, Input } from "@chakra-ui/react";
import { SetStateAction, useState } from "react";
import "../../css/index.css"



interface Tarefa
{
    id: number,
    nome: string,
    concluida: boolean
}


export default function List()
{

    const [tarefas, setTarefas] = useState<Tarefa[]>([])
    const [tituloTarefa, setTituloTarefa] = useState('')
    function adicionarTarefa()
    {
        if(tarefas.length > 0){
            const ultimoId = tarefas[tarefas.length - 1].id
            const novaTarefa = {
                id: ultimoId + 1,
                nome: tituloTarefa,
                concluida: false
            }
            setTarefas([...tarefas, novaTarefa])  
        }
        else
        {
            const ultimoId = 1
            const novaTarefa = {
                id: ultimoId + 1,
                nome: tituloTarefa,
                concluida: false
            }
            setTarefas([...tarefas, novaTarefa])  
        }
    }
    function apagarTarefa(id: number){
    const novasTarefas=tarefas.filter(tarefa=>tarefa.id !== id)
    setTarefas(novasTarefas)
    }

    function concluirTarefa(id: number) {
        setTarefas(prevTarefas =>
          prevTarefas.map(tarefa =>
            tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
          )
        );
      }

    return(
        <Container p="10" bg="#8c8c8c" justifyContent="center" alignItems="center" textAlign="center">
        <h1 className="font">Tarefas</h1>
        <Input type="text" bg="white" placeholder='Insira o nome da tarefa' value={tituloTarefa} onChange={(e: { target: { value: SetStateAction<string>; }; })=>{setTituloTarefa(e.target.value)}} w="90%" gap={5}></Input>
        <Button bg='#21de04' onClick={adicionarTarefa} size='xl' m="2" fontFamily="Bindlestiff NF W01 Regular" fontSize="2.2vh">Adicionar</Button>
        <Flex wrap="wrap" gap="10px" justifyContent="center" alignItems="center" textAlign="center">
        {tarefas.map((tarefa)=>(
        <Card.Root width="340px" m="0.5">
            <Card.Body>
                <Card.Title m="10" textAlign="center">{tarefa.nome}</Card.Title>
                <Card.Footer justifyContent="flex-begin" m="2">
                <Button bg={tarefa.concluida?'green':'orange'} size='md' ml={4} gap={3} onClick={()=>{concluirTarefa(tarefa.id)}}>
                    {tarefa.concluida?'Realizada':'Pendente'}
                </Button>
                <Button bg='red' size='md' ml={4} onClick={() => {apagarTarefa(tarefa.id)}} gap={5}>Excluir</Button>
                </Card.Footer>
        </Card.Body>
        </Card.Root>
        ))}
        </Flex>
        </Container>
    )
}