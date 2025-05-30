import express from 'express';
import {
    obtenerSuperheroePorIdController,
    obtenerTodosLosSuperheroesController,
    buscarSuperheroesPorAtributoController,
    obtenerSuperheroesMayoresDe30Controller,
    crearSuperheroeController,
    actualizarSuperheroeController,
    borrarPorIdController,
    borrarPorNombreSuperheroeController
} from '../controllers/superheroesController.mjs';

const router = express.Router();

router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/heroes/:id', obtenerSuperheroePorIdController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
router.get('/mayores-30', obtenerSuperheroesMayoresDe30Controller);
router.post('/crearSuperheroe' , crearSuperheroeController);
router.put('/actualizarSuperheroe/:id',actualizarSuperheroeController);
router.delete('/borrarPorId/:id',borrarPorIdController);
router.delete('/borrarPorNombreSuperheroe/:nombre',borrarPorNombreSuperheroeController);
export default router;

