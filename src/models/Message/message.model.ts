import { randomUUID } from "node:crypto";
import mongoose, { Schema } from "mongoose";

interface MessageDB {
  id: string;
  author: string;
  text: string;
}

const messageSchema = new Schema<MessageDB>({
  id: String,
  author: String,
  text: String,
});

const messageDB = mongoose.model("Message", messageSchema);



// async function insertManyMessages() {
//   try {
//     await items.reduce(async (previousPromise, item) => {
//       await previousPromise;
//       const data = {
//         id: randomUUID(),
//         author: item.autor,
//         text: item.texto,
//       };

//       console.log(data);
//       const message = new messageDB(data);
//       return message.save();
//     }, Promise.resolve());

//     console.log("Dados adicionados com sucesso");
//   } catch (error) {
//     console.log(error);
//   }
// }

// insertManyMessages();

// async function addMessage() {
//   try {
//     const message = new messageDB({
//       id: "345",
//       author: "Jesus Cristo",
//       text: "dfgdgf",
//     });

//     await message.save();
//     console.log("Data added successfully");
//   } catch (error) {
//     console.log(error);
//   }
// }

// addMessage();

export default messageDB;
