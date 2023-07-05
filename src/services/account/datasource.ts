import Base from "../../Base.js";
import AccountRestService from "./service.js";
import { AccountLoginDto } from "./type.js";

class AccountDatasource extends Base {
  async UserLogin(formData: AccountLoginDto) {
    const response = await new AccountRestService().UserLogin(formData);

    return response;
  }

  async GetUserProfile() {
    const response = await new AccountRestService().GetUserProfile();

    // console.log("datasauce", response);

    return response;
  }
}

export default AccountDatasource;
