import blockbuster from "./models/blockbuster.model";
import comments from "./models/coments.model";
import user from "./models/users.model";


const dbInit = () =>
Promise.all([
  blockbuster.sync({ alter: true }),
  comments.sync({ alter: true }),
  user.sync({ alter: true }),
])


export default dbInit;
