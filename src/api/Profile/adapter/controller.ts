import { NextFunction, Request, Response } from "express";
import * as http from "http";
import HttpError from "./../../../config/error";
import apiResponse from "../../../utils/api-response/apiResponse";
import ProfileService from "../aplication/crud.service";
const readingProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const profileData = await ProfileService.findById(req.params.id);
    apiResponse.result(res, 200, "found-profile", profileData);
  } catch (error) {
    apiResponse.error(res, error.message.status, error);
    //next(new HttpError(error.message.status, error.message));
  }
};
const readingAllProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const profileData = await ProfileService.findAll();
    apiResponse.result(res, 200, "found-profiles", profileData);
  } catch (error) {
    apiResponse.error(res, error.message.status, error);
  }
};

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
const creatingProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const profileData = await ProfileService.create(req.body);
    apiResponse.result(res, 200, "created-profile", profileData);
  } catch (error) {
    apiResponse.error(res, error.message.status, error);
  }
};
const editingProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const isUpdated = await ProfileService.updateById(req.params.id, req.body);
    apiResponse.result(res, 200, "updated-profile", isUpdated);
  } catch (error) {
    apiResponse.error(res, error.message.status, error);
  }
};
const deletingProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const profileData = await ProfileService.deleteById(req.params.id);
    apiResponse.result(res, 200, "deleted-profile", profileData);
  } catch (error) {
    apiResponse.error(res, error.message.status, error);
  }
};

export {
  readingAllProfile,
  readingProfile,
  creatingProfile,
  editingProfile,
  deletingProfile,
};
