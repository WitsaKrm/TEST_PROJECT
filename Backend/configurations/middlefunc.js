const md5 = require("md5");
const bcrypt = require("bcrypt");
// Custom middleware
const hashmd5 = (data) => {
  gen_hash = md5(data);
  return gen_hash;
};

const hash = async (inputPwd) => {
  try {
    const saltRounds = 5;
    const hashedPassword = await bcrypt.hash(inputPwd, saltRounds);
    console.log("Hashed Password: ", hashedPassword);
    return hashedPassword;
  } catch (error) {
    console.error("Hashing Error:", error);
    throw error;
  }
};

const pwdCompare = async (storedPwd, inputPwd) => {
  try {
    const result = await bcrypt.compare(inputPwd, storedPwd);
    console.log("Password Comparison Result: ", result);
    return result;
  } catch (error) {
    console.error("Comparison Error:", error);
    throw error;
  }
};

module.exports = { hashmd5, hash, pwdCompare };
