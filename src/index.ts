import "reflect-metadata";
import path from "node:path";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server";
import { UserResolver } from "./resolvers/UserResolver";
import { MessageResolver } from "./resolvers/MessageResolver";


async function main() {
  const schema = await buildSchema({
    resolvers: [UserResolver, MessageResolver],
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen();

  console.log(`🚀 Server running on ${url}`);
}

main();
