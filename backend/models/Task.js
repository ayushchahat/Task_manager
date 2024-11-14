const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    dueDate: { type: Date },
    priority: { type: String, enum: ['High', 'Medium', 'Low'], default: 'Medium' },
    isCompleted: { type: Boolean, default: false }
});

module.exports = mongoose.model('Task', taskSchema);
