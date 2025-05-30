import {Box, Typography} from '@mui/material';
//Componente Footer 
const Footer = () => {
return (
    <Box sx={{backgroundColor: '#1976d2',color:'#fff',py:2, textAlign: 'center'}}>
      <Typography variant="body2" color="inherit">
        @ 2025 Hecho con ❤️ por Tu Nombre 
      </Typography>
        <Typography variant="body2" color="inherit">
            Tu Empresa. Todos los derechos reservados.
        </Typography>
        </Box>

  );
} 
export default Footer;
// Este componente Footer utiliza Material-UI para crear un pie de página estilizado.
   