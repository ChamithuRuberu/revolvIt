import mongoose, { Schema, model, models } from 'mongoose';

const OrderItemSchema = new Schema({
    id: String,
    name: String,
    model: String,
    price: Number,
    quantity: Number,
    image: String,
});

const DeliveryInfoSchema = new Schema({
    fullName: String,
    phone: String,
    address: String,
    city: String,
    postalCode: String,
    deliveryOption: String,
});

const OrderSchema = new Schema({
    orderId: { type: String, required: true, unique: true },
    items: [OrderItemSchema],
    deliveryInfo: DeliveryInfoSchema,
    shippingCost: Number,
    subtotal: Number,
    totalAmount: Number,
    paymentStatus: { type: String, default: 'PENDING' }, // PENDING, SUCCESS, FAILED, CANCELLED
    paymentGateway: { type: String, default: 'directpay' },
    failureReason: String,
}, { timestamps: true });

const Order = models.Order || model('Order', OrderSchema);

export default Order;
