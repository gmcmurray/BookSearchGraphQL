const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userDat = await User.findOne({ _id: context.user._id })
        .populate("savedBooks");
        return userDat
      }
      throw new AuthenticationError('You need to be logged in!');
    },

 },

  Mutation: {
    // Ready
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    // Ready
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    addBook: async (parent,  bookData , context) => {
      console.log(bookData)
      if (context.user) {
        const updateUser = await User.findOneAndUpdate(
          {_id: context.user._id},
          {$push: {savedBooks: bookData}},
          {new: true}
        )
          //Not sure this is needed
          console.log('updated',updateUser)
        return updateUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

 
    removeBook: async (parent,  bookId , context) => {
      if (context.user) {
       const bookrm= await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: {bookId} } },
          {new:true}
        );

        return bookrm;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
  
  };

module.exports = resolvers;
