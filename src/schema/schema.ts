import { Schema, model } from "mongoose";

interface IUser {
  name: string;
  email: string;
  country: string;
}

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

const User = model<IUser>("User", userSchema);

export { User };