import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated( request: Request, response: Response, next: NextFunction ) {
    
  // Receive token
  const authToken = request.headers.authorization;

  // Check token
  if (!authToken) {
    return response.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    // Validate token
    const { sub } = verify(
      token,
      "4f93ac9d10cb751b8c9c646bc9dbccb9"
    ) as IPayload;

    // Retrieve user info
    request.user_id = sub;

    return next();
  } catch (err) {
    return response.status(401).end();
  }
}