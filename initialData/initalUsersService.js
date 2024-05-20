import { createUser, getUserByEmail } from "../model/dbAdapter.js";
import debug from "debug";
const log = debug("app:initialData");

const initialUsers = async () => {
	let users = [
		{
			name: {
				first: "nimrod",
				middle: "aaa",
				last: "sade",
			},
			phone: "0512345678",
			email: "sadenimrod@gmail.com",
			password: "$2a$10$j5/0TVj2qiTgZH2sDV7WzeJbNyKIcrVhs5ZEiKyAGE/JQdOxG4V9.",
			image: {
				url: "https://cdn.pixabay.com/photo/2018/05/11/08/11/dog-3389729_1280.jpg",
				alt: "profile picture",
			},
			address: {
				state: "aaa",
				country: "israel",
				city: "alon hagalil",
				street: "hahoresh",
				houseNumber: 151,
				zip: 12345,
			},
			isRegistered: true,
			isAdmin: true,
		},
		{
			name: {
				first: "bob",
				middle: "aaa",
				last: "the builder",
			},
			phone: "0512345678",
			email: "bobi@gmail.com",
			password: "$2a$10$RIWLjIU0eWHjLcE/R8ILneqAfpphBPdcJLVmGbXKLUjEC26lLBTvy",
			image: {
				url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCixBYBIv2XmZSq-h6TYiBa2IEr8EuYTuVFw&usqp=CAU",
				alt: "bob the builder",
			},
			address: {
				state: "aaa",
				country: "israel",
				city: "eilat",
				street: "hadolfin",
				houseNumber: 10,
				zip: 12345,
			},
			isRegistered: false,
			isAdmin: false,
		},
		{
			name: {
				first: "avi",
				middle: "aaa",
				last: "cohen",
			},
			phone: "0512345678",
			email: "avi@gmail.com",
			password: "$2a$10$8/n9czPPbE5ZKn4QCWWwxuFCYZkoQi8lOS0MgmZXsPX1kuSbTCEyK",
			image: {
				url: "https://cdn.pixabay.com/photo/2017/05/13/17/1",
				alt: "http://www.google.com",
			},
			address: {
				state: "aaa",
				country: "israel",
				city: "tel aviv",
				street: "hertzel",
				houseNumber: 10,
				zip: 12345,
			},
			isRegistered: true,
			isAdmin: false,
		},
	];
	try {
		let bizId = "";

		let checkEmail = await getUserByEmail(users[0].email);
		if (checkEmail && checkEmail.email === users[0].email) return;
		for (let user of users) {
			let userFromDb = await createUser(user);
			if (!user.isAdmin && user.isRegistered) {
				bizId = userFromDb._id;
			}
		}
		return bizId;
	} catch (err) {
		log(err);
		return "";
	}
};

export { initialUsers };
