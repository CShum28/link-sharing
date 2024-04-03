import { mutation } from "./_generated/server";
import { v } from "convex/values";
// import bcrypt from "bcrypt";

// const saltRounds = 10;
// Create a new task with the given text
export const createUser = mutation({
  args: {
    email: v.string(),
    password: v.string(),
  },
  handler: async (ctx, args) => {
    // const hash = bcrypt.hashSync(args.password, saltRounds);

    // console.log(hash);

    const newUser = await ctx.db.insert("users", {
      email: args.email,
      password: args.password,
    });
    return newUser;
  },
});
