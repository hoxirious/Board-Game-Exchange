import { domain } from "@/lib/utils";
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
    location: string,
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

// if we want actions to run on server this must be http://host.docker.internal
const headers = new Headers({'Content-type': 'multipart/form-data'});

async function setBody(post : Post) {
    const body = new FormData();
    body.append("title", post.title);
    body.append("description", post.description);
    body.append("category", post.category);
    body.append("condition", post.condition);
    body.append("location", post.location);
    body.append("dateCreated", post.dateCreated);
    body.append("ownerUserID", post.ownerUserID);

    let i = 0;
    for(const picture of post.postsPictureUrl) {
        if(!picture.file) {
            body.append("postsPictureUrl[]", picture.url);
        }

        body.append("images", picture.file);
    }

    return body;
}

export async function update(postId : string, post : Post, currentUser : string) {
    // doesnt account for users with elevated permissions
    if(post.ownerUserID != currentUser) {
        throw Error('Current user not is not post owner.');
    }

    const body = await setBody(post);

    // send request to update post
    const response = fetch(`${domain}/posts/${postId}`, {
        mode: 'cors',
        method: 'PUT',
        body: body
    });

    return response;
}

export async function create(post : Post) {    
    const response = fetch(`${domain}/posts`, {
        mode: 'cors',
        method: 'POST',
        body: await setBody(post)
    });

    return response;
}

export async function destroy(post : string) {
    const response = fetch(`${domain}/posts/${post}`, {
        mode: 'cors',
        method: 'DELETE',
    });

    return response;
}

export async function sendMessage(message) {
    const response = fetch(`${domain}/messages`, {
        headers: new Headers({'Content-type': 'application/json'}),
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify({...message})
    });

    return response;
}