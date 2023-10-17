// Import necessary modules
import { Shop, Product } from "@/models/shop.js";

export const POST = async (req) => {
    const { shopId, productName, productId, tag, Availability, price, description, category, images } = await req.json();

    try {
        await connectToDB();
        const product = new Product({
            productName,
            productId,
            tag,
            Availability,
            price,
            description,
            category,
            images,
        });

        await product.save();

        const shop = await Shop.findById(shopId).exec();
        if (shop) {
            shop.products.push(product);
            await shop.save();
            return new Response({ status: 201 });
        } else {
            return new Response({ message: "Could not add products"});
        }
    } catch (error) {
        return new Response({ error: 'Internal Server Error' });
    }
};
