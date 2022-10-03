import blockbuster from "./models/blockbuster.model";
import comments from "./models/coments.model";
import fav from "./models/favMovie.model";
import users from "./models/users.model";

const dbInit = () =>
Promise.all([
  blockbuster.sync({ alter: true }),
  comments.sync({ alter: true }),
  users.sync({ alter: true }),
  fav.sync({ alter: true }),
])

export default dbInit;