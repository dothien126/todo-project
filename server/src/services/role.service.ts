import { Role } from '../models/role.model';

class RoleService {
  async createRole(roleId: string, roleName: string, permission: string[]) {
    try {
      const role = new Role();
      role.roleId = roleId;
      role.roleName = roleName;
      role.permission = permission;
      await role.save();

      return {
        success: true,
        data: role,
        message: 'Role created successfully.',
      };
    } catch (error) {
      return {
        success: false,
        message: 'Oop. Do not create role!',
      };
    }
  }

  async getAllRole() {
    try {
      const roles = await Role.find({});

      return {
        success: true,
        data: roles,
        message: 'It is all roles.',
      };
    } catch (error) {
      return {
        success: false,
        message: 'Oop. Error when get role!',
      };
    }
  }

  async updateRole(id: string, body: any) {
    try {
      const role = await Role.findByIdAndUpdate(id, { $set: body }, { new: true });

      return {
        success: true,
        data: role,
        message: 'Update role successfully.',
      };
    } catch (error) {
      return {
        success: false,
        message: 'Oop. Error when update role!',
      };
    }
  }

  async deleteRole(id: string) {
    try {
      const deletedUser = await Role.findByIdAndDelete(id);

      return {
        success: true,
        data: deletedUser,
        message: 'Deleted role successfully.',
      };
    } catch (error) {
      return {
        success: false,
        message: 'Oop. Error while deleting this role!',
      };
    }
  }
}

export default new RoleService();
