import { mutation } from "./_generated/server";
import { v } from "convex/values";

// Used to generate string for image uploaded, so it can be stored in db
export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});

export const updateProfile = mutation({
  args: {
    userId: v.string(),
    profile: v.object({
      photo: v.id("_storage"),
      firstName: v.string(),
      lastName: v.string(),
      email: v.string(),
    }),
  },
  handler: async (ctx, args) => {
    // this is to check if a profile currently exists or not
    const existingProfile = await ctx.db
      .query("profiles")
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .first();

    if (existingProfile) {
      // if profile already exists, just update it in db
      await ctx.db.patch(existingProfile._id, {
        photo: args.profile.photo,
        firstName: args.profile.firstName,
        lastName: args.profile.lastName,
        email: args.profile.email,
      });
      console.log("Profile updated");
    } else {
      // if profile does not exist, create a new profile in db
      await ctx.db.insert("profiles", {
        userId: args.userId,
        photo: args.profile.photo,
        firstName: args.profile.firstName,
        lastName: args.profile.lastName,
        email: args.profile.email,
      });
      console.log("Profile added");
    }
  },
});
