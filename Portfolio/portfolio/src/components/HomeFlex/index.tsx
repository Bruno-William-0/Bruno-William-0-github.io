import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import png from '../../img/Fundador.jpeg'
import linkedin from '../../img/circle.ico'
import { Link } from "react-router-dom";
import { AiFillGithub, AiOutlineInstagram, AiOutlineBars, AiOutlineVideoCamera } from "react-icons/ai";


export default function HomeFlex()
{
    return(
        <Grid className="grid"
        templateColumns="1fr 2fr 3fr 2fr 1fr"
        templateRows="auto auto auto" gap={3} alignItems={'center'}>
        
        <GridItem colStart={2} colEnd={2}>  
    <Image src={png} order={0} w={'200vh'} m="3" rounded="xl" />
    </GridItem> 
        
        <GridItem colStart={3} colEnd={4}>
        <Box m={3}  rounded="xl" p="3" w={'100vh'}>
        <Link to="https://github.com/Bruno-William-0"><Box display={'flex'} flexDirection={'row'} alignItems={'center'} bg='#B4B4B4' rounded="1000px" m='2' borderWidth={'px'} borderColor='black'><AiFillGithub size={"100px"}></AiFillGithub><label>GitHub</label></Box></Link>
        <Link to="https://www.linkedin.com/in/bruno-william-colares-barbosa-399890197/"><Box display={'flex'} flexDirection={'row'} alignItems={'center'} bg='#B4B4B4' rounded="1000px" m='2'><Image src={linkedin} w='100px'></Image><label>Linkedin</label></Box></Link>
        <Link to="https://www.instagram.com/bruno_william0701/"> <Box display={'flex'} flexDirection={'row'} alignItems={'center'} bg='#B4B4B4' rounded="1000px" m='2'><AiOutlineInstagram size={"100px"}></AiOutlineInstagram><label>Instagram</label></Box></Link>
        </Box>
        </GridItem>
        <GridItem colStart={4} colEnd={4}>
        <Box m={3} rounded="xl" p="3">
        <Link to="/ToDoList"><Box display={'flex'} flexDirection={'row'} alignItems={'center'} bg='#B4B4B4' rounded="xl" m='2'><AiOutlineBars size={"100px"}></AiOutlineBars><label>To Do List</label></Box></Link>
        <Link to="/Live"> <Box display={'flex'} flexDirection={'row'} alignItems={'center'} bg='#B4B4B4' rounded="xl" m='2'><AiOutlineVideoCamera size={"100px"}></ AiOutlineVideoCamera><label>RTMP Player</label></Box></Link>
        </Box>
        </GridItem>
        
    </Grid>

      
    )
}