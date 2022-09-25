import { Request, Response, Router } from "express";
import comments from "../db/models/coments.model";
import { CommentService } from "../services/coments.service";
import { Comment } from "../services/coments.service";

const commentsService = new CommentService(new comments());

//CREA COMENTARIOS EN BD
export const fullDBComments = async (req: Request, res: Response) => {
  try {
    let movieId = req.params;
    // let xParamId = parseInt(movieId);
    const commentFullData: Comment = req.body;
    // console.log(xParamId)
    // commentFullData.movieId = xParamId;
    const dbComments = await comments.findAll();
    if (dbComments.length === 0) {
      await commentsService.newComment(commentFullData);
      const dbComments = await comments.findAll();
      return res.status(200).send(dbComments);
    }
    return res.status(200).send(dbComments);
  } catch (e) {
    return res.status(400).send("Comments not found in db!");
  }
};

//EDITA COMENTARIOS
export const editComments = async (req: Request, res: Response) => {
  const { comment, id } = req.body;
  try {
    const dbComment = await commentsService.editComment(comment, id);
    return res.status(200).send(dbComment);
  } catch (e) {
    return res.status(400).send(e);
  }
};

//BORRAR COMENTARIOS
export const deleteComments = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    const dbComment = await commentsService.deletComment(id);
    return res.status(200).send(dbComment);
  } catch (e) {
    return res.status(400).send(e);
  }
};
