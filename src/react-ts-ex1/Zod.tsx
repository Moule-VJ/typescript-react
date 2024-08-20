import { z } from "zod";

enum Hobbies {
  Programming = "Programming",
  WeightLifting = "WeightLifting",
  Guitar = "Guitar",
}

const arrHobbies = ["Programming", "Guitar", "Weight Lifting"] as const;

export const UserSchema = z.object({
  username: z.string().min(3),
  rollNo: z.number().gt(0),
  birthDate: z.date().optional(),
  isProgrammer: z.boolean().default(true),
  hobby: z.nativeEnum(Hobbies),
  arrHobby: z.enum(arrHobbies),
});

type User = z.infer<typeof UserSchema>;

const user: User = {
  username: "WSD",
  rollNo: 12,
  birthDate: new Date(),
  isProgrammer: true,
  hobby: Hobbies.Programming,
  arrHobby: "Weight Lifting",
};

console.log(UserSchema.parse(user));

// Safe Parse
console.log(UserSchema.safeParse(user).success);
