import { Shop } from "@/models/shop.js";
import { connectToDB } from "@/utils/database";
import mongoose from "mongoose";

export const POST = async (req) => {
    const { storeid, productName, tags, availability, price, description, category, rating, images } = await req.json();

    try {
        await connectToDB();

        const shop = await Shop.findOne({ storeid: storeid });

        if (shop) {
            // Create a new product object
            const product = {
                productName,
                tags, 
                availability, 
                price, 
                description, 
                category, 
                rating, 
                images
            };

            // Push the product into the shop's products array
            shop.products.push(product);

            // Save the shop with the new product
            await shop.save();
            console.log("product created and saved")

            return new Response(JSON.stringify(shop), { status: 200 });
        } else {
            return new Response({ message: "Could not add products" });
        }
    } catch (error) {
        console.log(error.message);
        return new Response({ error: 'Internal Server Error' });
    }
};
