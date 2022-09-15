import Blockbuster from "../db/models/blockbuster.model";

export class BlockbusterService {
  constructor(private blockbusterModel: Blockbuster) {}

  async getAll() {
    const blockbusterRows = await Blockbuster.findAll();
    if (blockbusterRows.length === 0) {
      throw new Error("No movie found");
    }
    return blockbusterRows;
  }
}
