import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});

export const updateProfile = mutation({
  args: {
    userId: v.string(),
    profile: v.object({
      photo: v.any(),
      firstName: v.string(),
      lastName: v.string(),
      email: v.string(),
      // // All the below are needed to remove validator error
      // userId: v.optional(v.any()),
      // _id: v.optional(v.any()),
      // _creationTime: v.optional(v.any()),
    }),
  },
  handler: async (ctx, args) => {
    console.log(args.profile);
  },
});
