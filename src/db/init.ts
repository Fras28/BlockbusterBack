import Blockbuster from "./models/Blockbuster";
import Coments from "./models/Coments.model";
import User from "./models/Users.model";
import MoviesComents from "./models/MoviesComents.model";

const dbInit = () => Promise.all([Blockbuster.sync({ alter: true }), Coments.sync({ alter: true }), User.sync({alter:true})]);

export default dbInit;
