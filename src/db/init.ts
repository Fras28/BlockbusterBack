import Blockbuster from "./models/Blockbuster.model";
import Comments from "./models/Coments.model";
import User from "./models/Users.model";
import MoviesComents from "./models/MoviesComents.model";

const dbInit = () =>
  Promise.all([
    Blockbuster.sync({ alter: true }),
    Comments.sync({ alter: true }),
    User.sync({ alter: true }),
    MoviesComents.sync({ alter: true }),
  ]);

export default dbInit;
