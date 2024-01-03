import { OfertaCard } from "../ofertas/components/OfertaCard"
import { ofertas } from "../ofertas/data/oferta"

import { Box, Grid } from "@mui/material";
// import Grid from '@mui/material/Grid';

export const PantallaOfertas = () => {

    return (

        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            
                {
                    ofertas.map(oferta => (
                        <OfertaCard
                            key={oferta.id}
                            {...oferta}
                        />
                    ))
                }
            </Grid>
        
        
    )

}
