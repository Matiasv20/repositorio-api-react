import { Router } from 'express';
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from './Handlers/product';
import { body, param } from 'express-validator';
import { handleInputsErrors } from './middleware';
const router = Router();

router.get('/', getProducts);
router.get('/:id', 
    param('id').isInt().withMessage('El id debe ser un número entero'),
    handleInputsErrors,
    getProductById);
router.post('/', 
    body('name').notEmpty().withMessage('El nombre es obligatorio'), 
    body('price').notEmpty().withMessage('El precio es obligatorio'),
    body('available').isBoolean().withMessage('El disponible debe ser un valor booleano'),
    handleInputsErrors,

    createProduct
);
router.put('/:id', updateProduct);
router.delete('/:id',     
    param('id').isInt().withMessage('El id debe ser un número entero'),
    handleInputsErrors,
    deleteProduct
);
export default router;
