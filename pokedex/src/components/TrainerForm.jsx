import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { create } from 'yup/lib/Reference';
import API from './../config/api'

const validationSchema = yup.object({
    nombre: yup
        .string('Enter your name')
        .required('Name is required'),
    password: yup
        .string('Enter your id_pokemon')
        .required('Id_pokemon is required'),
    });

export const TrainerForm = () => {

    const createTrainer = async (body) => {
        const currentBody = {
            ...body,
            nombre: body.name
        }
        return await API.post('/trainer', currentBody)
    }
    const formik = useFormik({
        initialValues: {
        name: '',
        id_pokemon: '',
        },
        TrainerForm: TrainerForm,
        onSubmit: (values) => {

            createTrainer(values)
        alert(JSON.stringify(values, null, 2));
        },
    });

    return (
    <div>
        <form onSubmit={formik.handleSubmit}>
        <TextField
            fullWidth
            id="name"
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.name)}
            helperText={formik.touched.email && formik.errors.name}
        />
        <TextField
          fullWidth
          id="id_pokemon"
          name="id_pokemon"
          label="IdPokemon"
          value={formik.values.id_pokemon}
          onChange={formik.handleChange}
          error={formik.touched.id_pokemon && Boolean(formik.errors.id_pokemon)}
          helperText={formik.touched.id_pokemon && formik.errors.id_pokemon}
        />
        <Button class='btn-login' color="primary" variant="contained" fullWidth type="submit">
          Crear
        </Button>
      </form>
    </div>
  );
};
