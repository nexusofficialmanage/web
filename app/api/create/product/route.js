import { Shop } from "@/models/shop.js";
import { connectToDB } from "@/utils/database";
import mongoose from "mongoose";

export const POST = async (req) => {
    const { storeid, productName, productid, Availability, price, description, category, images, tags } = await req.json();

    try {
        await connectToDB();

        const shop = await Shop.findOne({ storeid: storeid });

        if (shop) {
            // Create a new product object
            const product = {
                productName,
                Availability,
                price,
                description,
                category,
                images,
                tags,
            };

            // Push the product into the shop's products array
            shop.products.push(product);

            // Save the shop with the new product
            await shop.save();
            console.log("product created and saved")

            return new Response(JSON.stringify(shop), { status: 201 });
        } else {
            return new Response({ message: "Could not add products" });
        }
    } catch (error) {
        console.log(error.message);
        return new Response({ error: 'Internal Server Error' });
    }
};
