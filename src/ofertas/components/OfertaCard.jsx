import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Card, CardActions, CardContent, CardMedia, Chip, Button, Stack, Typography } from '@mui/material/';

export const OfertaCard = ({ id, titulo, descripcion, imagen, enlace, categoria, localizaciones, tags }) => {

  return (

    <Card
      raised
      sx={{
        maxWidth: 350,
        // height: 340,
        margin: "0 auto",
        padding: "0.1em",
      }}
    >
      <CardMedia
        component="img"
        height="250"
        image={imagen}
        title={titulo}
        alt={titulo}
        sx={{
          maxWidth: 300,
          minWidth: 150,
          padding: "1em 1em 0 1em",
          objectFit: "contain"
        }}
      />

      <CardContent sx={{ height: 99 }}>

        <Typography gutterBottom variant="h5" component="div">
          {titulo}
        </Typography>

        <Typography variant="body2" color="text.secondary" mb="2" gutterBottom>
          {descripcion}
        </Typography>

        <Typography variant="body2" color="text.secondary" gutterBottom>
          <strong> Categorías: </strong>
          {categoria?.id} - {categoria?.titulo}
        </Typography>

        <hr />

        <Typography variant="body2" noWrap gutterBottom sx={{ mt: "auto" }} component={"div"}>
          {
            tags.map((tag, i) =>
              <Chip key={i} size="small" label={`#${tag.titulo}`} variant="outlined" />)
          }
        </Typography>

        <Typography variant="body2" noWrap gutterBottom sx={{ mt: "auto", mb: "auto" }} component={"div"}>
          {
            localizaciones.map((localizacion, i) =>
              <Chip key={i} size="small" label={`#${localizacion?.titulo}`} variant="outlined" />)
          }
        </Typography>

      </CardContent>

      <CardActions sx={{ mt: 5 }}>
        <Button size="small" startIcon={<FileDownloadOutlinedIcon fontSize="small" />} />
      </CardActions>

    </Card>

  );
}