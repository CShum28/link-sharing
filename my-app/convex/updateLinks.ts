import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const updateLinks = mutation({
  args: {
    userId: v.string(),
    links: v.array(
      v.object({
        number: v.number(),
        platform: v.string(),
        link: v.string(),
        placeholder: v.string(),
        // All the below are needed to remove validator error
        userId: v.optional(v.any()),
        _id: v.optional(v.any()),
        _creationTime: v.optional(v.any()),
      })
    ),
  },
  handler: async (ctx, args) => {
    // Get array of existing links
    const existingLinks = await ctx.db
      .query("links")
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .collect();

    // Loop over array of existing links and delete them all
    for (const link of existingLinks) {
      await ctx.db.delete(link._id);
    }

    const links = args.links;

    // // // Array of new links
    const insertPromise = links.map((linkInfo) =>
      ctx.db.insert("links", {
        userId: args.userId,
        number: linkInfo.number,
        platform: linkInfo.platform,
        link: linkInfo.link,
        placeholder: linkInfo.placeholder,
      })
    );

    // // // Promise that returns all of the new links
    const insertLinks = await Promise.all(insertPromise);
    return insertLinks;
  },
});
