import express, { RouterOptions } from 'express'

import PointsController from './controller/PointsController';
import ItemsController from './controller/ItemsController';
import multer from 'multer'
import multerConfig from './config/multer'
import {celebrate,Joi} from 'celebrate'


const routes = express.Router();
const upload = multer(multerConfig);

const pointController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);
routes.get('/points', pointController.index);


routes.get('/points/:id' ,pointController.show )

routes.post('/points', 
    upload.single('image'), 
    celebrate({
        body:Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            whatsapp: Joi.string().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            city: Joi.string().required(),
            uf: Joi.string().required().max(2),
            items: Joi.string().required()
        })
    }),
    pointController.create )

export default routes;