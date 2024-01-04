import { randomUUID } from "node:crypto";
import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { User } from "../models/User/User";
import db from "../config/mongodb";
import UserDB from "../models/User/userdb.model";
import { Message } from "../models/Message/Message";
import messageDB from "../models/Message/message.model";

async function data() {
  return await db();
}

data();

@Resolver()
export class MessageResolver {
  private data: User[] = [];

  @Query(() => [Message])
  async messages() {
    try {
      const messagesDB = await messageDB.find({});
      return messagesDB;
    } catch (error) {
      console.log(error);
    }
  }

  @Mutation(() => Message)
  async createMessage(@Arg("text") text: string, @Arg("author") author: string) {
    const data = {
      id: randomUUID(),
      text: text,
      author: author
    };

    const message = new messageDB(data);

    try {
      message.save();
    } catch (error) {
      console.log(error);
    }
    return message;
  }

}
