import Mongoose, { Document, Schema, model } from "mongoose";
import { IProfileModel } from "./interface";

const ProfileSchema: Schema = new Schema<IProfileModel>(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: false,
    },
    quality: {
      type: String,
      required: true,
      default: "HD",
    },
    workflowId: {
      type: String,
      ref: "Worflows",
    },
  },
  {
    timestamps: true,
  }
);

/* ProfileSchema.methods.joiValidate = function (obj) {
  const schema = {

  }
}; */
const ProfileModel = model<IProfileModel>("Profiles", ProfileSchema);

export { ProfileModel };
