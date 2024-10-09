import mongoose from "mongoose";

const ActivitySchema = new mongoose.Schema(
{
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    ubication: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    maxCapacity: {
        type: Number,
        required: true,
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }

},
    {
        timestamps: true,
    }
);

export default mongoose.model("Activity", ActivitySchema);