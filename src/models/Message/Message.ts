import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Message {
  @Field((_type) => ID)
  id: string;
 
  @Field((_type) => ID)
  _id: string;

  @Field()
  author: string;

  @Field()
  text: string;
}
