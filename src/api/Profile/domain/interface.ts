import { Schema } from "mongoose";

import * as Joi from "@hapi/joi";
import "joi-extract-type";
import {
  BaseRepository,
  DefineType,
} from "../../shared/api-template/Repository";

export const ProfileSchema = Joi.object().keys({
  name: Joi.string().required(),
  description: Joi.string(),
  quality: Joi.string().required(),
  workflowId: Joi.string().meta({
    _mongoose: { type: "ObjectId", ref: "Worflows" },
  }),
});

export type IProfile = Joi.extractType<typeof ProfileSchema>;

/**
 * @export
 * @interface IProfileModel
 * @extends {Document}
 */
export interface IProfileModel extends Document, IProfile {
  name: string;
  slug: string;
  description?: string;
  quality: QualityMedia;
  workflowId: string;
}

type QualityMedia = "HD" | "SD";

interface IProfileRepository extends BaseRepository<IProfileModel> {}

export type TProfileRepository = DefineType<IProfileRepository>;

/**
 * @export
 * @interface IProfileRepository
 */
export interface IIProfileRepository {
  /**
   * @returns {Promise<IProfileModel[]>}
   * @memberof IUserService
   */
  find(): Promise<IProfileModel[]>;

  /**
   * @param {string} id
   * @returns {Promise<IProfileModel>}
   * @memberof IUserService
   */
  findOne(id: string): Promise<IProfileModel>;

  /**
   * @param {IProfileModel} IProfileModel
   * @returns {Promise<IProfileModel>}
   * @memberof IUserService
   */
  create(IProfileModel: IProfileModel): Promise<IProfileModel>;

  /**
   * @param {string} id
   * @returns {Promise<IProfileModel>}
   * @memberof IUserService
   */
  updateOne(id: string, IProfileModel: IProfileModel): Promise<Object>;

  /**
   * @param {string} id
   * @returns {Promise<IProfileModel>}
   * @memberof IUserService
   */
  deleteOne(id: string): Promise<IProfileModel>;
}

interface IProfileService {
  create(body: IProfileModel): Promise<boolean>;
  findById(id: string): Promise<IProfileModel>;
  findAll(): Promise<IProfileModel[]>;
  updateById(id: string, body: IProfileModel): Promise<boolean>;
  deleteById(id: string): Promise<boolean>;
}

export type TProfileService = DefineType<IProfileService>