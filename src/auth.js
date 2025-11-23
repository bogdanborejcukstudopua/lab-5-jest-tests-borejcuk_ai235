function isPasswordValid(password) {
  
  if (typeof password !== 'string') {
    return false;
  }
    return password.length >= 8;
}


module.exports = isPasswordValid;