import { query } from "./_generated/server";
import { v } from "convex/values";

export const getLinks = query({
  // UserId to query for links
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    const links = await ctx.db
      .query("links")
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .collect();
    return links;
  },
});
