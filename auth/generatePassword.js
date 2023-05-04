//import dependecies
import bcrypt from 'bcrypt';

(async()=> {
  //hash the password
  const salt = await bcrypt.genSalt(15);
  console.log(await bcrypt.hash("123", salt))
})();