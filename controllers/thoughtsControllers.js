// const { Thoughts, User } = require('../models');

// module.exports = {
//     // Get all thoughts
//   async getThoughts(req, res) {
//     try {
//       const thoughts = await Thoughts.find().populate('thoughts');
//       res.json(thoughts);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },
 
//   async getSingleThought(req, res) {
//     try {
//       const thought = await Thoughts.findOne({ _id: req.params.thoughtsId })
//         .populate('Thoughts');

//       if (!thought) {
//         return res.status(404).json({ message: 'No thought with that ID' });
//       }

//       res.json(thought);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },
 
//   async createThought(req, res) {
//     try {
//       const thought = await Thoughts.create(req.body);
//       res.json(thought);
//     } catch (err) {
//       console.log(err);
//       return res.status(500).json(err);
//     }
//   },
//   // Delete a thought
//   async deleteThought(req, res) {
//     try {
//       const thought = await Thoughts.findOneAndDelete({ _id: req.params.thoughtsId });

//       if (!thought) {
//         res.status(404).json({ message: 'No thought with that ID' });
//       }

//       await User.deleteMany({ _id: { $in: thought.user } });
//       res.json({ message: 'thought and user deleted!' });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },
//   // Update a thought
//   async updateThought(req, res) {
//     try {
//       const thought = await Thoughts.findOneAndUpdate(
//         { _id: req.params.thoughtsId },
//         { $set: req.body },
//         { runValidators: true, new: true }
//       );

//       if (!thought) {
//         res.status(404).json({ message: 'No thought with this id!' });
//       }

//       res.json(thought);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },
// };


module.exports = {
  // Get all thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thoughts.find().populate('username');
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Get a single thought
  async getSingleThought(req, res) {
    try {
      const thought = await Thoughts.findOne({ _id: req.params.thoughtsId }).populate('username');
      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Create a thought
  async createThought(req, res) {
    try {
      const thought = await Thoughts.create(req.body);
      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Delete a thought
  async deleteThought(req, res) {
    try {
      const thought = await Thoughts.findOneAndDelete({ _id: req.params.thoughtsId });
      if (!thought) {
        res.status(404).json({ message: 'No thought with that ID' });
      }
      await User.deleteMany({ _id: { $in: thought.userId } });
      res.json({ message: 'Thought and user deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Update a thought
  async updateThought(req, res) {
    try {
      const thought = await Thoughts.findOneAndUpdate(
        { _id: req.params.thoughtsId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      if (!thought) {
        res.status(404).json({ message: 'No thought with this id!' });
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};