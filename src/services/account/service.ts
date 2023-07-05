import FormData from "form-data";

import Base from "../../Base.js";
import { ErrorHandlers } from "../../helpers/ErrorHandlers.js";
import { AccountLoginDto } from "./type.js";

class AccountRestService extends Base {
  async UserLogin(data: AccountLoginDto) {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);

    const response = await this.marketPlaceApi().post(
      "/api/v1/auth/login",
      formData,
      {
        headers: { ...formData.getHeaders() },
      }
    );

    return response;
  }

  async GetUserProfile() {
    const response = await this.marketPlaceApi().get("/api/v1/user/profile");

    return response;
  }
}

export default AccountRestService;
