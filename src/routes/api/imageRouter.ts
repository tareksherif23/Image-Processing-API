import {Router} from 'express';
import {validateQueryParams} from '../../middleware/validation';
import {findImage} from '../../controllers/imageController';
import {resizeImage} from '../../services/imageProcessing';

export const router = Router();

router.get('/', validateQueryParams, findImage, resizeImage);
