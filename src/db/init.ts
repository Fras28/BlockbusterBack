import Blockbuster from "./models/Blockbuster";

const dbInit = () => Promise.all([Blockbuster.sync({ alter: true })]);

export default dbInit;
