import { Router } from 'express';
import { 
    showAllGroceries, 
    showOneGrocery, 
    createNewGroceries, 
    updateGroceries, 
    deleteGroceries } from './groceries.handler';

export const router = Router();

router
    .route('/')
    .get(showAllGroceries)
    .post(createNewGroceries);

router
    .route('/:id')
    .get(showOneGrocery)
    .put(updateGroceries)
    .delete(deleteGroceries);

