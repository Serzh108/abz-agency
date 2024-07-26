export const BASE_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/';

export type postRequestForm = {
  name: string;
  email: string;
  phone: string;
  position_id: string;
  // position_id: number;
  photo?: string;
  // photo: File;
};