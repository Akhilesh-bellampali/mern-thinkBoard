import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit("my-rate-limit");

    if (!success) {
      return res.status(429).json({
        message: "too many request",
      });
    }
    next();
  } catch (error) {
    console.log("rate limit error", error);
    next();
  }
};

export default rateLimiter;
