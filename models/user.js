const mongoose=require("mongoose")

const userSchema = mongoose.Schema(
    { 
        firstname: {
            type:String,
            required: [true, "First Name is required"],
          },
          lastname: {
            type:String,
            required: [true, "Last Name is required"],
          },
      username: {
        type: String,
        unique: [true,"Username already taken"],
        required: [true, "Username is required"],
      },
      password: {
        type:String,
        required: [true, "Password is required"],
      },
    },
    {
      timestamps:true
    }
  );
module.exports = mongoose.model("User", userSchema);