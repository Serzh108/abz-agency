export interface IToken {
  success: boolean;
  token: string;
}

export type A =
  | IToken
  | undefined;

export interface IUser {
  "id": string;
  "name": string;
  "email": string;
  "phone": string;
  "position": string;
  "position_id": string;
  "registration_timestamp": number;
  "photo": string;
}

export interface ILinks {
  "next_url": string;
  "prev_url": string | null;
}

export interface IUsers {
  "success": boolean;
  "page": number;
  "total_pages": number;
  "total_users": number;
  "count": number;
  "links": ILinks;
  "users": IUser[];
}