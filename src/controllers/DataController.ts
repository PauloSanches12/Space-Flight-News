import BaseData from '../models/DataSpaceFlight';
import { Request, Response } from "express";
import { Data } from '../@types/Data';

export async function index(request: Request, response: Response) {
    return response.status(200).send("Back-end Challenge 2021 🏅 - Space Flight News")
}

export async function indexAll(request: Request, response: Response){
    const allArticle = await BaseData.find();

    return response.status(200).json(allArticle)
}

export async function store(request: Request, response: Response): Promise<Response> {
    const {
        id,
        featured,
        title,
        url,
        imageUrl,
        newsSite,
        summary,
        publishedAt,
        launches,
        events
    } = request.body as Data;

    const data = await BaseData.create({
        id,
        featured,
        title,
        url,
        imageUrl,
        newsSite,
        summary,
        publishedAt,
        launches,
        events
    });

    return response.status(201).json(data)
}

export async function show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    
    const idConvert = Number(id);
    
    const idArticle = await BaseData.find({ id: idConvert });

    if (idArticle.length === 0) {
        response.status(404).json({ message: "article not found!" });
    }

    return response.status(200).json(idArticle);
}

export async function update(request: Request, response: Response) {
    const { id } = request.params;

    const idConvert = Number(id);

    const { 
        featured,
        title,
        url,
        imageUrl,
        newsSite,
        summary,
        publishedAt,
        launches,
        events
     } = request.body;

     

    const idArticleUpdate = await BaseData.findOneAndUpdate({ id: idConvert }, {
        featured,
        title,
        url,
        imageUrl,
        newsSite,
        summary,
        publishedAt,
        // launches: [{launches}],
        // events: [{events}]
    });


    // if (idArticleUpdate) {
    //     response.status(404).json({ message: "article not found!" });
    // }

    return response.status(200).json(idArticleUpdate);
}

export async function remove(request: Request, response: Response) {
    const { id } = request.params;

    const idConvert = Number(id);

    const { deletedCount } = await BaseData.deleteOne({ id: idConvert });

    if (deletedCount === 0) {
        return response.status(404).json({ message: "article not found!" });
    }
    
    return response.status(200).json({ message: "article deleted!" });
}