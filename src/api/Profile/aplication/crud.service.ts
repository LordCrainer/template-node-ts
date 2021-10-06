import { IProfileModel, TProfileService } from "../domain/interface";
import ProfileRepository from "../adapter/ProfilemongoRepository";

const create = async (body: IProfileModel) => {
  try {
    await ProfileRepository.create(body);
    return true;
  } catch (error) {
    throw new Error(error.message);
  }
};

const findAll = async () => {
  try {
    return await ProfileRepository.find({});
  } catch (error) {
    throw new Error(error.message);
  }
};

const findById = async (id: string) => {
  try {
    return await ProfileRepository.findOne(id);
  } catch (error) {
    throw new Error(error.message);
  }
};
const updateById = async (id: string, body: IProfileModel) => {
  try {
    await ProfileRepository.updateOne(id, body);
    return true;
  } catch (error) {
    throw new Error(error.message);
  }
};
const deleteById = async (id: string) => {
  try {
    await ProfileRepository.deleteOne(id);
    return true;
  } catch (error) {
    throw new Error(error.message);
  }
};

const ProfileService: TProfileService = {
  create: async (body) => await create(body),
  findAll: async () => await findAll(),
  findById: async (id) => await findById(id),
  updateById: async (id, body) => await updateById(id, body),
  deleteById: async (id) => await deleteById(id),
};

export default ProfileService;
