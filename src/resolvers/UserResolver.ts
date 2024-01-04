import { randomUUID } from "node:crypto";
import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { User } from "../models/User/User";
import db from "../config/mongodb";
import UserDB from "../models/User/userdb.model";
import { serveDataAsRest } from "../rest";

async function data() {
  return await db();
}

data();

@Resolver()
export class UserResolver {
  private data: User[] = [];

  @Query(() => [User])
  async users() {
    try {
      const usersDB = await UserDB.find({});
      return usersDB;
    } catch (error) {
      console.log(error);
    }
  }

  @Mutation(() => User)
  async createUser(@Arg("name") name: string) {
    const data = {
      name: name,
    };

    const user = new UserDB(data);

    try {
      user.save();
    } catch (error) {
      console.log(error);
    }
    return user;
  }

  @Mutation(() => User)
  async updateUser(
    @Arg("userId") userId: string,
    @Arg("userName") userName: string
  ) {
    const data = {
      name: userName,
    };

    const user = await UserDB.findByIdAndUpdate(userId, data, { new: true });

    try {
    } catch (error) {
      console.log(error);
    }
    return user;
  }

  @Mutation(() => User)
  async deleteUser(@Arg("userId") userId: string) {
    const user = await UserDB.findByIdAndDelete(userId);

    try {
    } catch (error) {
      console.log(error);
    }
    return user;
  }

  @Query(() => User)
  async getUserById(@Arg("userId") userId: string) {
    const user = await UserDB.findById(userId);

    try {
    } catch (error) {
      console.log(error);
    }
    return user;
  }
}
