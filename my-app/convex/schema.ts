import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  profiles: defineTable({
    email: v.string(),
    firstName: v.string(),
    lastName: v.string(),
    photo: v.id("_storage"),
    userId: v.string(),
  }),
  links: defineTable({
    userId: v.string(),
    number: v.number(),
    platform: v.string(),
    link: v.string(),
    placeholder: v.string(),
  }),
});
