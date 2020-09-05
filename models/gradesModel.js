export default (mongoose) => {

  const schema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true, 
    },
    type: {
      type: String,
      required: true, 
    },
    value: {
      type: Number,
      required: true, 
      min: 0,
    },
    lastModified: {
      type: Date,
      required: true, 
      default: Date.now
    }
  })

  schema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    return {id: _id, ...object};
  });
  const gradesModel = mongoose.model('grades', schema, 'grades');
  return gradesModel;
};