import Shop from "@/models/shop";
import { connectToDB } from "@/utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB();
        console.log(params.storeid)
        const shopdetails = await Shop.findOne({ storeid: params.storeid }); // Corrected the find query
        if (!shopdetails) return new Response("Shop Not Found", { status: 404 });

        return new Response(JSON.stringify(shopdetails), { status: 200 });

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}
