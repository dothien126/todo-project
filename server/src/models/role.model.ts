import mongoose, { Document, Schema, Types, model } from 'mongoose';

interface IRole extends Document {
  roleId: string;
  roleType: string;
  permission: Array<string>;
}

const RoleSchema = new Schema({
  roleId: {
    type: String,
  },
  roleType: {
    type: String,
    required: true,
  },
  permission: [
    {
      type: String,
    },
  ],
});

export const Role = model<IRole>('roles', RoleSchema);
