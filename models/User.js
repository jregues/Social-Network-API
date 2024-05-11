const { Schema, Types } = require("mongoose");
const { Thoughts } = require("./thoughts");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: ["Please fill a valid email address"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    thoughts: [
        {
          type: Types.ObjectId,
          ref: 'thoughts'
        }
      ],
    friends: [
      {
        type: Types.ObjectId,
        ref: 'user'
      }
    ]
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  });
  

const User = model("user", userSchema);

module.exports = User;
