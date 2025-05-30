import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Form } from "react-router-dom";

const API_URL_PRODUCT = 'https://www.clinicatecnologica.cl/ipss/antiguedadesSthandier/api/v1/products-services/';

function Formulario() {
  const [dataProduct, setDataProduct] = useState([]); // Inicializa con array vacío
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState('');
  const [formData, setFormData] = useState({ 
    nombre: '', 
    correo: '', 
    mensaje: '' 
  });

useEffect(() => {
    const traerDatos = async () => {
        try {
            const responseAbout = await fetch(API_URL_PRODUCT);
            if (!responseAbout.ok) { 
                throw new Error("Error al conseguir los datos. Servicio no funcionando :(");
            }
            const dataAbout = await responseAbout.json();
            console.log(dataAbout);
            setDataProduct(dataAbout.data?.productos || []); // Asegura que sea un array
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };
    traerDatos();
}, []);