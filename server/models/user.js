import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            min: 3,
            max: 30,
        },
        email: {
            type: String,
            required: true,
            min: 5,
        },
        city: String,
        country: String,
        state: String,
        occupation: String,
        phoneNumber: String,
        transactions: Array,
        role: {
            type: String,
            emum: ["user", "admin", "superadmin"],
            default: "admin"
        },

},
{ timestamps: true }
);

const user = mongoose.model("User", UserSchema);

export default user;
