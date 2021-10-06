import * as Joi from "joi";
import Validation from "../../validation";
import { IProfileModel } from "../domain/interface";

/**
 * @export
 * @class ProfileValidation
 * @extends Validation
 */
class ProfileValidation extends Validation {
  /**
   * Creates an instance of ProfileValidation.
   * @memberof ProfileValidation
   */
  constructor() {
    super();
  }

  /**
   * @param {IProfileModel} params
   * @returns {Joi.ValidationResult}
   * @memberof ProfileValidation
   */
  createProfile(params: IProfileModel): Joi.ValidationResult {
    const schema: Joi.Schema = Joi.object().keys({
      name: Joi.string().required(),
      slug: Joi.string().required(),
      quality: Joi.string().required(),
    });

    return schema.validate(params);
  }

  /**
   * @param {{ id: string }} body
   * @returns {Joi.ValidationResult<{ id: string }>}
   * @memberof ProfileValidation
   */
  editProfile(id: string, body: IProfileModel): Joi.ValidationResult {
    const schema: Joi.Schema = Joi.object().keys({
      id: this.customJoi.objectId().required(),
    });

    return schema.validate(id);
  }
  /**
   * @param {{ id: string }} body
   * @returns {Joi.ValidationResult<{ id: string }>}
   * @memberof ProfileValidation
   */
  getProfile(body: { id: string }): Joi.ValidationResult {
    const schema: Joi.Schema = Joi.object().keys({
      id: this.customJoi.objectId().required(),
    });

    return schema.validate(body);
  }

  /**
   * @param {{ id: string }} body
   * @returns {Joi.ValidationResult<{ id: string }>}
   * @memberof ProfileValidation
   */
  removeProfile(body: { id: string }): Joi.ValidationResult {
    const schema: Joi.Schema = Joi.object().keys({
      id: this.customJoi.objectId().required(),
    });

    return schema.validate(body);
  }
}

export default new ProfileValidation();

/*       const validate: Joi.ValidationResult = ProfileValidation.editProfile(
        id,
        body
      );

      if (validate.error) throw new Error(validate.error.message);
 */
