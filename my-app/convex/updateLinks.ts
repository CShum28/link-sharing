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
      })
    ),
  },
  handler: async (ctx, args) => {
    const links = args.links;

    const insertPromise = links.map((linkInfo) =>
      ctx.db.insert("links", {
        userId: args.userId,
        number: linkInfo.number,
        platform: linkInfo.platform,
        link: linkInfo.link,
        placeholder: linkInfo.placeholder,
      })
    );

    const insertLinks = await Promise.all(insertPromise);
    return insertLinks;
  },
});
