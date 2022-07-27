import mongoose, { Document, Schema, Types, model } from 'mongoose';

interface IRole extends Document {
  roleId: string;
  roleName: string;
  permission: Array<string>;
}

const RoleSchema = new Schema({
  roleId: {
    type: String,
  },
  roleName: {
    type: String,
    required: true,
  },
  permission: [
    {
      type: Schema.Types.ObjectId,
      ref: 'users',
    },
  ],
});

export const Role = model<IRole>('roles', RoleSchema);
