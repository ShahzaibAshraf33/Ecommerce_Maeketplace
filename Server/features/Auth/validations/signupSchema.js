const { z } = require("zod");

const signupSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters"),

  email: z
    .string()
    .email("Invalid email"),

  phoneNumber: z
    .string()
    .min(11, "Phone number must be 11 digits")
    .max(11, "Phone number must be 11 digits")
    .regex(/^[0-9]+$/, "Phone number must contain only numbers"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /[A-Z]/,
      "Password must contain at least one uppercase letter"
    )
    .regex(
      /[a-z]/,
      "Password must contain at least one lowercase letter"
    )
    .regex(
      /[0-9]/,
      "Password must contain at least one number"
    )
    .regex(
      /[@$!%*?&]/,
      "Password must contain at least one special character"
    ),
});

module.exports = {
  signupSchema,
};