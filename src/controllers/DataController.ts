import BaseData from '../models/DataSpaceFlight';
import { Request, Response } from "express";
import { Data } from '../@types/Data';
import api from '../api/api';

export async function index(request: Request, response: Response) {
    api.get("/articles").then(() => {
        return response.status(200).send("Back-end Challenge 2021 🏅 - Space Flight News")
    })
}

export async function store(request: Request, response: Response): Promise<Response> {
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
    } = request.body as Data;

    const dates = await BaseData.create({
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

    return response.json(dates)
}