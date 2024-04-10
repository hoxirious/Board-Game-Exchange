import { SelectedPhoto } from "../posts/[post]/PhotosSelector";
import { z } from "zod"

export const formRules = {
    title : {
        min: 2,
        max: 128
    }, 
    description: {
        max: 512
    },
    postsPictureUrl: {
        max: 10
    }
};
export const formSchema = z.object({
    title: z.string()
        .min(1, { message: "Please enter a post title." })
        .min(formRules.title.min, { message: "Title must be at least 2 characters." })
        .max(formRules.title.max, { message: "Title cannot be more than 128 characters." }),
    description: z.string()
        .max(formRules.description.max, { message: "Description cannot be more than 512 characters." }),
    condition: z.string()
        .min(1, { message: "Please select a condition." }),
    location: z.string(),
    category: z.string()
        .min(1, { message: "Please select a category." }),
    // TODO: no limit on file size thooooo
    postsPictureUrl: z.array(z.any())
        .max(10, { message: "You can only have 10 images per post. Please remove some images." })
});

interface Post {
    postsPictureUrl: [],
    title: string,
    description: string,
    condition: string,
    category: string,
    ownerUserID: string,
    dateCreated: string
}

export const postDefaultValues = {
    title: "",
    description: "",
    // TODO: location: user's default location setting
    location: "",
    condition: "",
    category: "",
    postsPictureUrl: []
}

const domain = 'http://localhost:8080';
const headers = new Headers({'Content-type': 'application/json'});

async function processPostsPictureUrl(postsPictureUrl) {
    return postsPictureUrl.map((selectedPhoto : SelectedPhoto) => {
        if(!selectedPhoto.file) return selectedPhoto.url
        
        // if selected photo has a file, process it (i.e. upload and get url)
        // TODO
        return selectedPhoto.url
    });
}

export async function update(postId : string, post : Post, currentUser : string) {
    // doesnt account for users with elevated permissions
    if(post.ownerUserID != currentUser) {
        throw Error('Current user not is not post owner.');
    }

    // send request to upload photos to get their urls...
    // TODO!
    const processedPostsPictureUrl = await processPostsPictureUrl(post.postsPictureUrl);

    // send request to update post
    const response = fetch(`${domain}/posts/${postId}`, {
        headers,
        mode: 'cors',
        method: 'PUT',
        body: JSON.stringify({
            ...post,
            postsPictureUrl: processedPostsPictureUrl
        })
    });

    return response;
}

export async function create(post : Post, owner : string) {
    const processedPostsPictureUrl = await processPostsPictureUrl(post.postsPictureUrl);
    
    const response = fetch(`${domain}/posts`, {
        headers,
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify({
            ...post,
            ownerUserID: owner,
            postsPictureUrl: processedPostsPictureUrl,
            dateCreated: new Date(Date.now())
        })
    });

    return response;
}