
import Blockbuster from "./models/Blockbuster.model";
import Comments from "./models/Coments.model";
import User from "./models/Users.model";
import MoviesComents from "./models/MoviesComents.model";
import UsersMovies from "./models/UsersMovies.model"
import UsersComments from "./models/UsersComments.model"

const dbInit = () =>
Promise.all([
  Blockbuster.sync({ alter: true }),
  Comments.sync({ alter: true }),
  User.sync({ alter: true }),
])
  .then(dbInit2)
  
  const dbInit2=() => ([
    MoviesComents.sync({ alter: true }),
    UsersMovies.sync({alter: true}),
    UsersComments.sync({alter: true})
  ]);

export default dbInit;
