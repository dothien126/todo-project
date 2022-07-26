import { Request, Response } from 'express';

import RoleService from '../services/role.service';

class RoleController {
  async createRoleHandler(req: Request, res: Response) {
    try {
      const { roleId, roleType, permission } = req.body;
      if (!roleId || !roleType) {
        return res.status(400).json({
          success: false,
          message: 'Missing roleId or roleType',
        });
      }
      const role = await RoleService.createRole(roleId, roleType, permission);
      res.status(200).json(role);
    } catch (error) {
      return res.json({
        success: false,
        message: 'Creating role failed',
      });
    }
  }

  async getAllRolesHandler(req: Request, res: Response) {
    try {
      const roles = await RoleService.getAllRole();
      res.json(roles);
    } catch (error) {
      return res.json({
        success: false,
        message: 'Getting all roles failed',
      });
    }
  }

  async deleteRoleHandler(req: Request, res: Response) {
    try {
      const roleId = req.params.id;
      const deletedRole = await RoleService.deleteRole(roleId);
      res.json(deletedRole);
    } catch (error) {
      return res.json({
        success: false,
        message: 'Deleting this role failed',
      });
    }
  }

  async updateRoleHandler(req: Request, res: Response) {
    try {
      const roleId = req.params.id;
      const body = req.body;
      const updatedRole = await RoleService.updateRole(roleId, body);
      res.json(updatedRole);
    } catch (error) {
      return res.json({
        success: false,
        message: 'Updating role failed',
      });
    }
  }
}

export default new RoleController();
