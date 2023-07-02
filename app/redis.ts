import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: "https://usw1-mint-bulldog-33614.upstash.io" as string,
  token:
    "AYNOASQgZDczODM2YjUtMGI1Ni00MDE1LThkZWEtYzcxNTUyNzA2MjkxYmJlNDdjZTFkNzAzNDBkZDljMzVjMWQ1ZTFjZTVmMmQ=",
});

export default redis;
