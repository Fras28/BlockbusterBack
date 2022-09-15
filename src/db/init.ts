import Blockbuster from "./models/blockbuster.model";

const dbInit = () => Promise.all([Blockbuster.sync({ alter: true })]);

export default dbInit;
