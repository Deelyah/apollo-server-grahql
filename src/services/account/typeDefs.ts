import gql from "graphql-tag";

const AccountTypeDefs = gql`
  type Mutation {
    UserLogin(data: LoginDTO): LoginResponse!
  }

  type Query {
    GetUserProfile: UserProfileResponse!
  }

  input LoginDTO {
    username: String!
    password: String!
  }

  type LoginResponse {
    msg: String!
    flag: Boolean!
    auth: Boolean!
    soln: String!
    data: LoginData!
    # AUTH_TOKEN: String!
  }

  type LoginData {
    userType: UserType!
    uid: Int!
    firstname: String!
    surname: String!
    phone: String!
    email: String!
    photo: String
    balance: String
    currency: String!
    hasPIN: Boolean!
  }

  enum UserType {
    ADMIN
    USER
  }

  type UserProfileResponse {
    msg: String!
    flag: Boolean!
    auth: Boolean!
    soln: String!
    data: UserData
  }

  type UserData {
    firstname: String!
    surname: String!
    phone: String!
    email: String!
    photo: String
    isMerchant: Int!
    country: String
    wallet: String!
    balance: String
    currency: String!
    refCode: String!
    lastIP: String!
    lastDevice: String!
    lastLogin: String
    id: Int!
    hasPIN: Int!
  }
`;

export default AccountTypeDefs;
