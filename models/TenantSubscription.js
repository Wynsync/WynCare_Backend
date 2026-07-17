import mongoose from "mongoose";

const tenantSubscriptionSchema = new mongoose.Schema(
    {},
    {
        collection: "tenant_subscriptions",
        strict: false
    }
);

export default mongoose.model(
    "TenantSubscription",
    tenantSubscriptionSchema
);