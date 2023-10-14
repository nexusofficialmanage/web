import { Schema, model, models } from 'mongoose';

const ShopSchema = new Schema({
    userid: {
        type: String,
        required: true,
    },
    shopName: {
        type: String,
        required: true,
    },
    storeid: {
        type: String,
        unique: true,
    },
    shopTagline: String,
    description: String,
    addressLine: {
        type: String,
        required: true,
    },
    pincode: String,
    city: String,
    state: String,
    country: String,
    phoneNumbers: [String],
    emailIds: [String],
    facebookLink: String,
    twitterLink: String,
    instagramLink: String,
    openDays: {
        sunday: Boolean,
        monday: Boolean,
        tuesday: Boolean,
        wednesday: Boolean,
        thursday: Boolean,
        friday: Boolean,
        saturday: Boolean,
    },
    openingTime: String,
    closingTime: String,
    refundPolicy: String,
    returnPolicy: String,
    tags: [String],
    images: [String],
    category: String,
    rating: String,
    reviews: [String],
});

const Shop = models.Shop || model('Shop', ShopSchema);

export default Shop;
