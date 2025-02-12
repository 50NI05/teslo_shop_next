'use server'

import { auth } from "@/auth.config"
import prisma from "@/lib/prisma"

export const getPaginatedUsers =  async() => {
  const session = await auth()

  if (session?.user.role !== 'admin') {

    console.log(session?.user.role);
    
    return {
      ok: false,
      message: 'Debe de ser un usuario administrador'
    }
  }

  const users = await prisma.user.findMany({
    orderBy: {
      name: 'desc'
    }
  })

  return {
    ok: true,
    users: users
  }
}