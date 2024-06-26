const { Schema, model, Types } = require("mongoose");

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
      validate: {
        validator: function (v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: "Please fill a valid email address",
      },
    },
    thoughts: [
        {
          type: Types.ObjectId,
          ref: 'Thought'
        }
      ],
    friends: [
      {
        type: Types.ObjectId,
        ref: 'User'
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
  

const User = model("User", userSchema);

module.exports = User;
