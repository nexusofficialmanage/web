import User from "@/models/user";
import { connectToDB } from "@/utils/database";

export const POST = async (request) => {
    const { userId, 
            email, 
            password,
            username,
            image,
        } = await request.json();

    try {
        await connectToDB();
        const newUser = new User({ 
            userId, 
            email, 
            password,
            username,
            image,
        });

        await newUser.save();
        return new Response(JSON.stringify(newUser), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}