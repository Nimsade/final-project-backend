const DEFAULT_STRING_VALIDATION = {
	type: String,
	maxLength: 256,
	trim: true,
	allow: "",
	required: false,
};
const DEFAULT_REQUIRED_STRING_VALIDATION = {
	...DEFAULT_STRING_VALIDATION,
	required: true,
};

export { DEFAULT_STRING_VALIDATION, DEFAULT_REQUIRED_STRING_VALIDATION };
