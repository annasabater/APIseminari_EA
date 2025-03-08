import mongoose from 'mongoose';
const { Schema } = mongoose;

const SubjectSchema = new Schema({
    name: { type: String, required: true },
    teacher: { type: String, required: true },
    alumni: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

export default mongoose.model('Subject', SubjectSchema);
