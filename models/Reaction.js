const { Schema, model } = require('mongoose');


// Schema to create Student model
const reactionSchema = new Schema(
  {
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      max_length: 280,
    },
    username: {
      type: String,
      required: true,
      
    },
    createdAt: {
        type: Date,
        value: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;
