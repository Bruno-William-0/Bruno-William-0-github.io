import { Grid, GridItem } from "@chakra-ui/react";
import imagem1 from "../../img/How_to_improve_hardware_security.jpg"
import imagem2 from "../../img/10913908.jpg"


interface Props{
    children: React.ReactElement
}

export default function Body(props: Props){
const {children} = props


    return(
            <>
              <Grid
                templateRows="1fr" // Garante que as linhas ocupem todo o espaço
                templateColumns="1fr" // Garante que as colunas ocupem todo o espaço
                height="100vh" // Define o grid para ocupar toda a altura da viewport
                width="100vw" // Define o grid para ocupar toda a largura da viewport
              >
                <GridItem
                  backgroundColor="#1c1c1c" // Aplica a imagem de fundo
                  backgroundAttachment="fixed" // Torna a imagem fixa ao rolar
                  backgroundSize="cover" // Faz a imagem cobrir todo o espaço
                  backgroundPosition="center" // Centraliza a imagem
                  height="100vh" // Define o grid para ocupar toda a altura da viewport
                  width="100vw" // Define o grid para ocupar toda a largura da viewport
                >
                    {children}

                </GridItem>
                
              </Grid>
            </>
    )
}