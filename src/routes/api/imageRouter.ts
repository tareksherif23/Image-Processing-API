import {Router} from 'express';
import {validateQueryParams} from '../../middleware/validation';
import {resizeImage} from '../../controllers/imageController';

export const router = Router();

router.get('/', validateQueryParams, resizeImage);
