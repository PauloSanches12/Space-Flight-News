interface LaunchesModel {
    // id: string;
    provider: string;
}

interface EventsModel {
    // id: string;
    provider: string;
}

interface Data {
    id: number;
    featured: boolean;
    title: string;
    url: string;
    imageUrl: string;
    newsSite: string;
    summary: string;
    publishedAt: string;
    launches: LaunchesModel[];
    events: EventsModel[];
}

export { Data, EventsModel, LaunchesModel };