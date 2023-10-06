import Shop from "@models/shop";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { userId, 
            email, 
            username,
            image,
        } = await request.json();

    try {
        await connectToDB();
        const newShop = new Shop({ 
            userId, 
            email, 
            username,
            image,
        });

        await newShop.save();
        return new Response(JSON.stringify(newShop), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}