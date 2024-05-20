import {
	getAllUsers,
	getUserByEmail,
	createUser,
	updateUser,
	deleteUser,
	patchStatus,
	getUserById,
} from "../model/dbAdapter.js";
import handleError from "../service/handleError.js";
import { generateHash, cmpHash } from "../service/bcrypt.js";
import { generateToken } from "../token/jwt.js";
import passwordRegex from "../service/passwordRegex.js";

const getAllUsersController = async (req, res) => {
	try {
		let users = await getAllUsers();
		return res.json(users);
	} catch (err) {
		handleError(res, 400, error.message);
	}
};

const getUserByIdController = async (req, res) => {
	try {
		let userFromDb = await getUserById(req.params.id);
		return res.json(userFromDb);
	} catch (error) {
		handleError(res, 400, error.message);
	}
};

const registerController = async (req, res) => {
	try {
		let userFromDb = await getUserByEmail(req.body.email);
		if (userFromDb) throw new Error("user already exists");
		let passwordHash = await generateHash(req.body.password);
		req.body.password = passwordHash;
		let newUser = await createUser(req.body);
		newUser.password = undefined;
		res.json(newUser);
	} catch (err) {
		handleError(res, 400, err.message);
	}
};

const loginController = async (req, res) => {
	try {
		let userFromDb = await getUserByEmail(req.body.email);
		if (!userFromDb) throw new Error("invalid email or password");
		let passwordMatch = await cmpHash(req.body.password, userFromDb.password);
		if (!passwordMatch) throw new Error("invalid email or password");
		let token = await generateToken({
			_id: userFromDb._id,
			isAdmin: userFromDb.isAdmin,
			isRegistered: userFromDb.isRegistered,
		});
		return res.json(token);
	} catch (error) {
		handleError(res, 400, error.message);
	}
};

const updateUserController = async (req, res) => {
	try {
		let userFromDb = await updateUser(req.params.id, req.body);
		userFromDb.password = undefined;
		res.json(userFromDb);
	} catch (err) {
		handleError(res, 400, err.message);
	}
};

const patchStatusController = async (req, res) => {
	try {
		let userFromDb = await patchStatus(req.params.id, req.body.isRegistered);
		userFromDb.password = undefined;
		res.json(userFromDb);
	} catch (err) {
		handleError(res, 400, err.message);
	}
};

const deleteUserController = async (req, res) => {
	try {
		let userFromDb = await deleteUser(req.params.id);
		userFromDb.password = undefined;
		res.json(userFromDb);
	} catch (err) {
		handleError(res, 400, err.message);
	}
};

export {
	getAllUsersController,
	loginController,
	registerController,
	updateUserController,
	deleteUserController,
	patchStatusController,
	getUserByIdController,
};
