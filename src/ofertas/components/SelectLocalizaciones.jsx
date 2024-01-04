import { ofertas } from '../data/oferta';

import { TextField, Autocomplete, Chip, Stack } from '@mui/material/';


export const SelectLocalizaciones = () => {

    return (
        <Stack spacing={3} sx={{ width: 500 }}>

            <Autocomplete
                multiple
                id="tags-outlined"
                options={ofertas}
                getOptionLabel={(localizacion) => localizacion.titulo}
                defaultValue={[ofertas[1]]}
                filterSelectedOptions
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Localizaciones"
                        placeholder="Favoritas"
                    />
                )}
            />
            <Autocomplete
                multiple
                id="tags-filled"
                options={ofertas.map((localizacion) => localizacion.titulo)}
                defaultValue={[ofertas[1].localizaciones.titulo]}
                freeSolo
                renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                        <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                    ))
                }
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="filled"
                        label="Localizaciones"
                        placeholder="Favoritas"
                    />
                )}
            />
            
        </Stack>
    );
}
