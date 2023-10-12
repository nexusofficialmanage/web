import Shop from "@models/shop";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
    try {
        await connectToDB();
        const shops = await Shop.find({});
        return shops;
    } catch (error) {
        console.error(error);
    }
}
