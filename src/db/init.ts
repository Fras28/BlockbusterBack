
import blockbuster from "./models/Blockbuster.model";
import comments from "./models/Coments.model";
import user from "./models/Users.model";
import moviesComents from "./models/MoviesComents.model";
import usersMovies from "./models/UsersMovies.model"
import usersComments from "./models/UsersComments.model"

const dbInit = () =>
Promise.all([
  blockbuster.sync({ alter: true }),
  comments.sync({ alter: true }),
  user.sync({ alter: true }),
])
  .then(dbInit2)
  
  const dbInit2=() => ([
    moviesComents.sync({ alter: true }),
    usersMovies.sync({alter: true}),
    usersComments.sync({alter: true})
  ]);

export default dbInit;
