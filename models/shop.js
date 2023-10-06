import { Schema, model, models } from 'mongoose';

const ShopSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    shopId: {
        type: String,
        unique: [true, "id already exists"],
    },
    shopName: {
        type: String,
        required: [true, 'Shop name is required'],
    },
    addressLine: {
        type: String,
        required: [true, 'Address line is required'],
    },
    description: String,
    phoneNumbers: {
        type: [String],
        required: [true, 'Phone number is required'],
    },
    emailId: {
        type: String,
        required: [true, 'Email ID is required'],
    },
    shopType: String,
    shopTiming: String,
    pictures: [String],
    openOnDays: [String],
    productCategories: [String],
    productListings: [String],
    paymentMethods: [String],
    shippingInfo: String,
    returnPolicy: String,
    refundPolicy: String,
    shopLogo: String,
    socialMediaLinks: [String],
    termsAndConditions: String,
    privacyPolicy: String,
});

const Shop = models.Shop || model('Shop', ShopSchema);

export default Shop;
