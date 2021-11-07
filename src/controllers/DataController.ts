import BaseData from '../models/DataSpaceFlight';
import { Request, Response } from "express";
import { Data } from '../@types/Data';
import api from '../api/api';

export async function index(request: Request, response: Response) {
    return response.status(200).send("Back-end Challenge 2021 🏅 - Space Flight News")
}

export function indexAll(request: Request, response: Response){
    api.get("/articles").then(resp => {
        return response.status(200).json(resp.data)
    })
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

export async function showByUser(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    
    const idConvert = Number(id);
    
    const idArticle = await BaseData.find({ id: idConvert });

    if (idArticle.length === 0) {
        response.status(404).json({ message: "article not found!" });
    }

    return response.status(200).json(idArticle);
}