import { Grid, GridItem } from "@chakra-ui/react";
import png from "../../img/BWInfo Logo 2D.png"

interface Props{
    children: React.ReactNode
}

export default function Header(props: Props)
{
    const { children } = props
    return(
        <>
        <Grid className="grid" templateColumns='1fr 1fr 1fr' templateRows='auto' gap={3} backgroundColor={"#323332"}>
            <GridItem colStart={1} colEnd={1}>
            </GridItem>
        <GridItem colStart={2} colEnd={2} display="flex" justifyContent="center" alignItems="center">
            <img src={png} width="25%" height="25%"></img>
        </GridItem>
        <GridItem colStart={3} colEnd={3}>
        {children}
        </GridItem>
        </Grid>
        </>
    )
}