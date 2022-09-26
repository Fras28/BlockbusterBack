import Comments from "../db/models/coments.model";

export type Comment = {
  id?: number;
  movieId: number;
  idUser: string;
  name: string;
  coment: string;
  picture: string;
  status: boolean;
};

export class CommentService {
  constructor(private commentModel: Comments) {}

  //CREATE
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

  async byIdMovie(movieId: number) {
    const coments = await Comments.findAll({
      where: {
        movieId,
      },
    });
    return coments;
  }

  async byIdUser(idUser: number) {
    const coments = await Comments.findAll({
      where: {
        idUser,
      },
    });
    return coments;
  }
}
