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

// const items =  [
//     {
//         "autor": "\nBenjamin Franklin\n",
//         "texto": "A preguiça anda tão devagar que a pobreza facilmente a alcança."
//     },
//     {
//         "autor": "\nBenjamin Franklin\n",
//         "texto": "Um irmão pode não ser um amigo, mas um amigo será sempre um irmão."
//     },
//     {
//         "autor": "\nBenjamin Franklin\n",
//         "texto": "Achar que o mundo não tem um criador é o mesmo que afirmar que um dicionário é o resultado de uma explosão numa tipografia."
//     },
//     {
//         "autor": "\nBenjamin Franklin\n",
//         "texto": "As três coisas mais difíceis do mundo são: guardar um segredo, perdoar uma ofensa e aproveitar o tempo."
//     },
//     {
//         "autor": "\nBenjamin Franklin\n",
//         "texto": "Viver é enfrentar um problema atrás do outro. O modo como você o encara é que faz a diferença."
//     },
//     {
//         "autor": "\nBenjamin Franklin\n",
//         "texto": "Seja cortês com todos, sociável com muitos, íntimo de poucos, amigo de um e inimigo de nenhum."
//     },
//     {
//         "autor": "\nBenjamin Franklin\n",
//         "texto": "Se você pretende ser rico, pense em economizar tanto quanto em ganhar."
//     },
//     {
//         "autor": "\nBenjamin Franklin\n",
//         "texto": "Toma conselhos com o vinho, mas toma decisões com a água."
//     },
//     {
//         "autor": "\nBenjamin Franklin\n",
//         "texto": "Três pessoas são capazes de guardar um segredo, se duas delas estiverem mortas."
//     },
//     {
//         "autor": "\nBenjamin Franklin\n",
//         "texto": "O fracasso quebra as almas pequenas e engrandece as grandes, assim como o vento apaga a vela e atiça o fogo da floresta."
//     }
// ]

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

// async function addMessage(){
//     try{
//         const message = new messageDB({
//             id: "345",
//             author: 'Jesus Cristo',
//             text: "dfgdgf",
//         })

//         await message.save()
//         console.log("Data added successfully")
//     } catch(error){
//         console.log(error)
//     }
// }

// addMessage()

export default messageDB;
