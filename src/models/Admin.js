import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		surname: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		phone: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			required: true,
		},
		permissions: {
			userManagement: {
				type: Boolean,
				required: true,
			},
			plansManagement: {
				type: Boolean,
				required: true,
			},
			queriesManagement: {
				type: Boolean,
				required: true,
			},
			reports: {
				type: Boolean,
				required: true,
			},
		},
		registratioDate: {
			type: Date,
			default: Date.now,
			required: true,
		},
	},
	{ timestamps: true }
);
AdminSchema.methods.encryptPassword = async (password) => {
	const salt = await bcrypt.genSalt(10);
	return await bcrypt.hash(password, salt);
};

AdminSchema.methods.encryptPassword = async (password) => {
	return await bcrypt.compare(password, this.password);
};
export default mongoose.model("Admin", AdminSchema);
