import mongoose from 'mongoose'
const URL="mongodb+srv://MERNDB:merndb7300@cluster0.ysqqg.mongodb.net/self-learn"
export const connectToDB = async () => {
  try {
    await mongoose.connect(URL);

    console.log('Connected to MongoDB!😎');
  } catch (error) {
    console.error(`Error while connecting to MongoDB: `, error.message);
  }
};


