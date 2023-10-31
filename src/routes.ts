import { Router } from 'express';
import { getAll, addTodo } from '../src/to-do/controller';

const router: Router = Router();

router.get('/', getAll);
router.post('/', addTodo);

export default router;
