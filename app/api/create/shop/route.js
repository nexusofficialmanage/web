import Shop from "@models/shop";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { userId, 
            shopId, 
            shopName, 
            addressLine, 
            description, 
            phoneNumbers, 
            emailId, 
            shopType,
            shopTiming,
            pictures,
            openOnDays,
            productCategories,
            productListings,
            paymentMethods,
            shippingInfo,
            returnPolicy,
            refundPolicy,
            shopLogo,
            socialMediaLinks,
            termsAndConditions,
            privacyPolicy 
        } = await request.json();

    try {
        await connectToDB();
        const newShop = new Shop({ 
            owner: userId,
            shopId, 
            shopName, 
            addressLine, 
            description, 
            phoneNumbers, 
            emailId, 
            shopType,
            shopTiming,
            pictures,
            openOnDays,
            productCategories,
            productListings,
            paymentMethods,
            shippingInfo,
            returnPolicy,
            refundPolicy,
            shopLogo,
            socialMediaLinks,
            termsAndConditions,
            privacyPolicy 
        });

        await newShop.save();
        return new Response(JSON.stringify(newShop), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}