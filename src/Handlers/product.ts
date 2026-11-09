import {Request, Response} from 'express'
import {check, validationResult} from 'express-validator'
import { Product } from '../models/Product.model';
export const getProducts= async (req: Request, res: Response) => {
    try{
        const products= await Product.findAll({
            order:[['id', 'DESC']], limit:2
        });
        res.json({ data: products });

    }catch(error){
        console.log(error)
    }
}
export const getProductById= async (req: Request, res: Response) => {
    try{
        const {id} = req.params
        const product= await Product.findByPk(id);
        if(!product){
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json({ data: product });
    }catch(error){
        console.log(error)
    }
}
export const createProduct= async(req: Request, res: Response) => {
    //validar
    try {
        const product = await Product.create(req.body);
        res.json({ data: product });

    } catch (error) {
        console.log(error)
    }


}
export const updateProduct= async(req: Request, res: Response) => {
        const {id} = req.params
        const product= await Product.findByPk(id);
        if(!product){
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        //Actualizar    

        await product.update(req.body);
        product.save();
        res.json({ data: product });
}
export const deleteProduct= async(req: Request, res: Response) => {
        const {id} = req.params
        const product= await Product.findByPk(id);
        if(!product){
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        //Eliminar
        await product.destroy();
        res.json({ data: 'Producto eliminado' });
        }