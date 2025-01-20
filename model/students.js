import mongoose from "mongoose";

const studentsSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  rollNo: {
    type: Number,
    required: true,
  },
  address: String,
  semester: {
    type: String,
    enum: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"],
    required: true,
  },
});

const Student = new mongoose.model("Student", studentsSchema);
export { Student };
// The above code snippet defines a schema for the student model and exports the model. The schema defines the structure of the student document, including the fields fullName, rollNo, address, and semester. The Student model is created using the schema and exported for use in other parts of the application.