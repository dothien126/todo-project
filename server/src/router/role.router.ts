import express from 'express';
import RoleController from '../controllers/role.controller';
const { rightToAction } = require("../middlewares/decode-jwt-token");

const router = express.Router();

router.delete('/role/:id', rightToAction('delete-role'), RoleController.deleteRoleHandler);

router.put('/role/:id', rightToAction('update-role'), RoleController.updateRoleHandler);

router.post('/role', rightToAction('create-role'), RoleController.createRoleHandler);

router.get('/role', rightToAction('get-roles'), RoleController.getAllRolesHandler);

export default router;
