import Joi from "joi";
import { Types } from "mongoose";
import { IProfileModel, TProfileRepository } from "../domain/interface";
import { ProfileModel } from "../domain/model";
import ProfileValidation from "../domain/validation";

/**
 * @returns {Promise < IProfileModel[] >}
 * @memberof ProfileRepository
 */
const find = async () => {
  try {
    return await ProfileModel.find();
  } catch (error) {
    throw new Error(error.message);
  }
};
/**
 * @returns {Promise < IProfileModel[] >}
 * @memberof ProfileRepository
 */
const findOne = async (id: string) => {
  try {
    return await ProfileModel.findOne({ _id: new Types.ObjectId(id) });
  } catch (error) {
    throw new Error(error.message);
  }
};

/**
 * @param {IProfileModel} profile
 * @returns {Promise < IProfileModel >}
 * @memberof ProfileRepository
 */
const updateOne = async (id: string, body: IProfileModel) => {
  try {
    const updatedProfile = await ProfileModel.updateOne(
      { _id: id },
      { $set: body }
    );
    return !!updatedProfile;
  } catch (error) {
    throw new Error(error.message);
  }
};
/**
 * @param {IProfileModel} profile
 * @returns {Promise < IProfileModel >}
 * @memberof ProfileRepository
 */
const create = async (body: IProfileModel) => {
  try {
    const profile: IProfileModel = await ProfileModel.create(body);
    return !!profile;
  } catch (error) {
    throw new Error(error.message);
  }
};

/**
 * @param {string} id
 * @returns {Promise < IProfileModel >}
 * @memberof ProfileRepository
 */
const deleteOne = async (id: string) => {
  try {
    const profile: IProfileModel = await ProfileModel.findOneAndRemove({
      _id: new Types.ObjectId(id),
    });
    return !!profile;
  } catch (error) {
    throw new Error(error.message);
  }
};

const ProfileRepository: TProfileRepository = {
  find: async () => await find(),
  findOne: async (id) => await findOne(id),
  updateOne: async (id, item) => await updateOne(id, item),
  create: async (item) => await create(item),
  deleteOne: async (id) => await deleteOne(id),
};
export default ProfileRepository;
