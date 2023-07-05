import { AccountLoginDto } from "./type.js";
import AccountDatasource from "./datasource.js";
import { AccountValidation } from "./validation.js";
import { Request, Response } from "express";

export const AccountMutation = {
  async UserLogin(
    _: unknown,
    { data }: { data: AccountLoginDto },
    context: { req: Request; res: Response }
  ) {
    await new AccountValidation().userLogin(data);
    const response = await new AccountDatasource().UserLogin(data);
    context.res.cookie("NETAPPS_AUTH_TOKEN", response.headers["auth_token"], {
      httpOnly: true,
      secure: false,
    });
    context.res.cookie("NETAPPS_AUTH_ID", response.data.data.uid, {
      httpOnly: true,
      secure: false,
    });

    return response.data;
  },
};

export const AccountQuery = {
  async GetUserProfile(
    _: unknown,
    _args: unknown,
    context: { req: Request; res: Response }
  ) {
    const response = await new AccountDatasource().GetUserProfile();

    return response.data;
  },
};
