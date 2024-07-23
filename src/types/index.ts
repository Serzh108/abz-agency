export interface IToken {
  success: boolean;
  token: string;
}

export type A =
  | IToken
  | undefined;