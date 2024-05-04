import { query } from "./_generated/server";
import { v } from "convex/values";

// export const getProfiles = query({
//   // UserId to query for links
//   args: { userId: v.string() },
//   handler: async (ctx, args) => {
//     const profile = await ctx.db
//       .query("profiles")
//       .filter((q) => q.eq(q.field("userId"), args.userId))
//       .collect();
//     return profile;
//   },
// });

export const getProfiles = query({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    const profiles = await ctx.db
      .query("profiles")
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .collect();

    return Promise.all(
      profiles.map(async (profile) => {
        console.log(profile);

        let imageUrl = await ctx.storage.getUrl(profile.photo);

        return {
          ...profile,
          // imageUrl,
        };
      })
    );
  },
});
