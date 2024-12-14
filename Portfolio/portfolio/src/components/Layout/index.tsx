import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

interface LayoutProps {
  children: React.ReactNode; // Aceita qualquer número de children
}

export default function Layout({ children }: LayoutProps) {
  const [header, content] = React.Children.toArray(children); // Divide os children em seções (se necessário)

  return (
    <Grid
      className="grid"
      templateColumns="1fr 1fr 1fr 1fr 1fr"
      templateRows="auto auto auto"
      gap={3}
      minW={'190vh'}
      minH={'100vh'}
      bg="#5E5E5E"
    >
      
      <GridItem colSpan={5} rowSpan={1} rowStart={1} rowEnd={1}>
        {header}
      </GridItem>

     
      <GridItem colSpan={5} rowSpan={1}>
        {content}
      </GridItem>

   
      <GridItem />
    </Grid>
  );
}
