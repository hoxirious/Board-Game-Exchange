export interface Post {
    _id: string,
    postsPictureUrl: string[],
    title: string,
    description: string,
    location: string,
    condition: string,
    category: string,
    ownerUserID: string,
    dateCreated: string
}