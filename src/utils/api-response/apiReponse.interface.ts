export interface IOverrideRequest {
  code: number;
  message: string;
  positive: string;
  negative: string;
}

export interface ICookie {
  key: string;
  value: string;
}

export const API_MESSAGE = {
  profile: {
    created: "Profile created",
    edited: "Profile edited",
    deleted: "Profile deleted",
    not_found: "Profile not found",
  },
};
