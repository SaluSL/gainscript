import { jwtVerify, createRemoteJWKSet } from "jose";
import { User } from "./user";

const ISSUER = process.env.KINDE_DOMAIN;
const AUDIENCE = process.env.KINDE_AUDIENCE;
const JWKS = createRemoteJWKSet(new URL(`${ISSUER}/.well-known/jwks.json`));

export async function verifyJwtToken(token: string) {
  const { payload } = await jwtVerify(token, JWKS, {
    issuer: ISSUER,
    audience: AUDIENCE,
  });
  return payload;
}

export async function getUserFromAuthHeader(authHeader: string | undefined) {
  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];
    try {
      const payload = await verifyJwtToken(token);
      if (payload && payload.sub) {
        return new User(payload.sub);
      }
    } catch (error) {
      console.error("Error verifying JWT token:", error);
      return null;
    }
  }
  return null;
}
