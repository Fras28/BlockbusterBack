import { Request, Response, Router } from "express";
import comments from "../db/models/coments.model";
import { CommentService } from "../services/coments.service";
import { Comment } from "../services/coments.service";

const commentsService = new CommentService(new comments());

//GET COMENTARIOS EN BD
export const fullDBComments = async (req: Request, res: Response) => {
  try {
    let { id }= req.params;
    let xParamId = +id;
    const commentFullData: Comment = req.body;
    console.log(xParamId,"acaa")
    commentFullData.movieId = xParamId;
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


//CREATE COMMENT
export const addComment = async  (req: Request, res: Response) =>{
try{ 

  let { id }= req.params;
  let xParamId = +id;
  const commentFullData: Comment = req.body;
  commentFullData.movieId = xParamId;
  await commentsService.newComment(commentFullData);
  
  return res.status(200).send("Comment succses!");

} catch(e) {

  return res.status(400).send("Something went with your comment!");
}
}


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


//GET COMMENT BY ID

