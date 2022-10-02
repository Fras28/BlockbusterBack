import blockbuster from "./models/blockbuster.model";
import comments from "./models/coments.model";
import user from "./models/users.model";

const dbInit = () =>
Promise.all([
  blockbuster.sync({ alter: true }),
  comments.sync({ alter: false }),
  user.sync({ alter: false }),
])

export default dbInit;
