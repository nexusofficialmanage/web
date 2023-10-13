import Shop from "@/models/shop.js";
import { connectToDB } from "@/utils/database";

export const POST = async (request) => {
    const {
        userid,
        shopName,
        storeid,
        shopTagline,
        description,
        addressLine,
        pincode,
        city,
        state,
        country,
        phoneNumbers,
        emailIds,
        facebookLink,
        twitterLink,
        instagramLink,
        openDays,
        openingTime,
        closingTime,
        refundPolicy,
        returnPolicy,
        tags,
        images,
        category,
    } = await request.json();

    try {
        await connectToDB();
        const newShop = new Shop({
            userid,
            shopName,
            storeid,
            shopTagline,
            description,
            addressLine,
            pincode,
            city,
            state,
            country,
            phoneNumbers,
            emailIds,
            facebookLink,
            twitterLink,
            instagramLink,
            openDays,
            openingTime,
            closingTime,
            refundPolicy,
            returnPolicy,
            tags,
            images,
            category,
        });

        await newShop.save();
        return new Response(JSON.stringify(newShop), { status: 201 });
    } catch (error) {
        return new Response("Failed to create a new shop", { status: 500 });
    }
}
