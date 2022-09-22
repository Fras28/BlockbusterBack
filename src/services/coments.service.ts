import Comments from "../db/models/Coments.model";

type Comment = {
  id: number;
  name: string;
  nickname: string;
  coment: string;
  picture: string;
  status: boolean;
};

export class CommentService {
  constructor(private commentModel: Comments) {}

  async newComment(comment: Comment) {
    const inserComment = await Comments.create(comment, { validate: true });
    return inserComment;
  }
  async editComment(coment: string, id: number) {
    Comments.update({ coment }, { where: { id } });
    return coment;
  }
  async deletComment(id: number): Promise<boolean> {
    const comentD = await Comments.destroy({ where: { id } });
    return !!comentD;
  }
}
