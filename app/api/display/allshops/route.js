import Shop from "@/models/shop.js";
import { connectToDB } from "@/utils/database";

export const GET = async (request) => {
    try {
        await connectToDB();
        const shops = await Shop.find().exec(); // You need to call the `.exec()` method to execute the query
        return new Response(JSON.stringify(shops), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        console.error(error);
        return new Response("An error occurred while fetching shops.", { status: 500 });
    }
}
