import mongoose from 'mongoose';
import Subject from './models/subject.model.js';
import User from './models/user.model.js';

const seedData = async () => {
  await mongoose.connect('mongodb://localhost:27017/schoolDB');

  const anna = await User.create({ name: 'Anna' });
  const jordi = await User.create({ name: 'Jordi' });
  const adria = await User.create({ name: 'Adrià' });

  await Subject.create({
    name: 'Enginyeria d’Aplicacions',
    teacher: 'Roc',
    alumni: [anna._id, jordi._id, adria._id],
  });

  console.log('Dades inicials creades');
  mongoose.connection.close();
};

seedData();
