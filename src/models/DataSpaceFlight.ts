import  { connect, model, Schema } from 'mongoose';
import { Data, LaunchesModel, EventsModel } from '../@types/Data';

const launchesModel = new Schema<LaunchesModel>({
    id: { type: String, unique: true },
    provider: { type: String, required: true }
});

const eventsModel = new Schema<EventsModel>({
    id: { type: String, unique: true },
    provider: { type: String, required: true }
});

const schemasData = new Schema<Data>({
    id: { type: Number, unique: true },
    featured: { type: Boolean },
    title: { type: String, required: true },
    url: { type: String, required: true },
    imageUrl: { type: String, required: true },
    newsSite: { type: String, required: true },
    summary: { type: String, required: true },
    publishedAt: { type: String, required: true },
    launches: [launchesModel],
    events: [eventsModel]
});

export default model<Data>('BaseData', schemasData);

export async function run(): Promise<void> {

    await connect('mongodb+srv://banco:banco@banco.sooca.mongodb.net/dataSpaceFlight?retryWrites=true&w=majority');
}