import crypto from "crypto";
import jwt from "jsonwebtoken";
import { Document, FilterQuery, Model } from "mongoose";

import axiosInstance from "./helpers/axiosInstance.js";
import { ErrorHandlers } from "./helpers/ErrorHandlers.js";
import GeneralController from "./helpers/generalController.js";
import MongooseErrorUtils from "./helpers/mongoErrorHandling.js";

interface ApiKeys {
  publicKey: string;
  secretKey: string;
  testPublicKey: string;
  testSecretKey: string;
}

export default class Base extends GeneralController {
  public errorMessage = "Invalid response, something went wrong!";
  constructor() {
    super();
  }

  marketPlaceApi(id?: string, token?: string) {
    if (token) {
      axiosInstance.defaults.headers.common = {
        NETAPPS_AUTH_TOKEN: token,
      };
    } else if (token && id) {
      axiosInstance.defaults.headers.common = {
        NETAPPS_AUTH_TOKEN: token,
        NETAPPS_AUTH_ID: id,
      };
    } else {
      delete axiosInstance.defaults.headers.common.Authorization;
    }
    // console.log(axiosInstance.defaults.headers.common);

    return axiosInstance;
  }
}
