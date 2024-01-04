import { Field, ObjectType, ID } from "type-graphql";

@ObjectType()
export class User {
  // @Field((_type) => ID)
  // id: string;

  @Field((_type) => ID)
  _id: string;

  @Field()
  name: string;
}