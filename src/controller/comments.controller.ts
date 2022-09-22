import { Request, Response, Router } from "express";
import Comments from "../db/models/Coments.model";
import { CommentService } from "../services/coments.service";
import { MoviesArr } from "../infoSec";

const commentsService = new CommentService(new Comments());

//MEDIANTE EL SERVICIO METE LAS PELICULAS EN BD
export const fullDBComments = async (req: Request, res: Response) => {
    try{
        const dbComments = await Comments.findAll()
        const commentFullData = req.body;
        if(dbComments.length === 0){
            await commentsService.newComment(commentFullData)
            const dbComments = await Comments.findAll();
            return res.status(200).send(dbComments)
        }
        return res.status(200).send(dbComments);
    }catch(e){
        return res.status(400).send('Comments not found in db!')
    }
}

export const putComments = async(req: Request, res:Response) =>{
    const {comment, id} = req.body
    try{
        const dbComment = await commentsService.editComment(comment, id);
        return res.status(200).send(dbComment);
    }catch(e){
        return res.status(400).send(e);
    }
}

export const deleteComments = async(req:Request, res:Response) =>{
    const {id} = req.body;
    try{
        const dbComment = await commentsService.deletComment(id);
        return res.status(200).send(dbComment);
    }catch(e){
        return res.status(400).send(e);
    }
}


