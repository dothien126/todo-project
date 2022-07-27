import express from 'express';
import RoleController from '../controllers/role.controller';
const router = express.Router();

router.delete('/role/:id', RoleController.deleteRoleHandler);

router.put('/role/:id', RoleController.updateRoleHandler);

router.post('/role', RoleController.createRoleHandler);

router.get('/role', RoleController.getAllRolesHandler);

export default router;
