import { z } from "zod";

export const UserSchema = z.object({
  username: z.string().min(3),
  rollNo: z.number().gt(0),
  birthDate: z.date().optional(),
  isProgrammer: z.boolean().default(true),
});

type User = z.infer<typeof UserSchema>;

const user: User = {
  username: "WSD",
  rollNo: 12,
  birthDate: new Date(),
  isProgrammer: true,
};

console.log(UserSchema.parse(user));

// Safe Parse

console.log(UserSchema.safeParse(user).success);

// Validation
