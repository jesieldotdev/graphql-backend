import mongoose, { Schema } from "mongoose";

interface UserDB{
    id: string
    name: string
}

const userSchema = new Schema<UserDB>({
    id: String,
    name: String
})

const UserDB = mongoose.model("User", userSchema)

// async function addUser(){
//     try{
//         const user = new UserDB({
//             id: "123",
//             name: "MongoDB",
//         })

//         await user.save()
//         console.log("Data added successfully")
//     } catch(error){
//         console.log(error)
//     }
// }

// addUser()

export default UserDB