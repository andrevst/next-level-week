import { Request, Response, NextFunction } from "express";
import { UsersRepositories } from "../repositories/usersRepositories";
import { getCustomRepository } from "typeorm";

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  // Verificar se usuario admin
  const { user_id } = request;

  const usersRepositories = getCustomRepository(UsersRepositories);

  const { admin } = await usersRepositories.findOne(user_id);

  if (admin) {
    return next();
  }

  return response.status(401).json({
    error: "Unauthorized",
  });
}