import Order from '../../models/orders';

export default {
    getOrders: () => Order.find({}).sort({ createdAt: -1 }),
    getOrder: (_, { _id }) => Order.findById(_id),
    createOrder: (_, args) => Order.create(args),
    updateOrder: (_, { _id, ...rest }) => Order.findByIdAndUpdate(_id, rest, { new: true }),
    deleteOrder: async (_, { _id }) => {
        try {
            await Order.findByIdAndRemove(_id);
            return {
                message: 'Order deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}