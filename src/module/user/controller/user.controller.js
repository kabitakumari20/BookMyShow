const { registerUser } = require("../business/user.business");
const { login } = require("../business/user.business");


exports.registerUser = async req => await registerUser(req.body)
exports.login = async req => await login(req.body)







