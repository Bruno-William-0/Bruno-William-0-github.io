import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

interface LayoutProps {
  children: React.ReactNode; // Aceita qualquer número de children
}

export default function Layout(props: LayoutProps) {
  const {children} = props; // Divide os children em seções (se necessário)

  return (
    <Grid
      className="grid"
      templateColumns="1fr 1fr 1fr 1fr 1fr"
      m="5%"
      minW={'100vh'}
      minH={'100vh'}
      bg="#5E5E5E"
    >
     
      <GridItem colSpan={5} rowSpan={1} colStart={2} colEnd={5}>
        {children}
      </GridItem>

   
   
    </Grid>
  );
}
