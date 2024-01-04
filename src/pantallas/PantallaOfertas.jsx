import { OfertaCard } from "../ofertas/components/OfertaCard"
import { SelectLocalizaciones } from "../ofertas/components/SelectLocalizaciones";
import { ofertas } from "../ofertas/data/oferta"

import { Box } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';

export const PantallaOfertas = () => {

    return (
        <div>
            <SelectLocalizaciones />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>

                    {
                        ofertas.map(oferta => (

                            <Grid xs={4}
                                key={oferta.id}
                            >

                                <OfertaCard
                                    key={oferta.id}
                                    {...oferta}
                                />

                            </Grid>
                        ))
                    }

                </Grid>
            </Box>
        </div>
    )
}
