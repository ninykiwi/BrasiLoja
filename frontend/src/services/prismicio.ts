import { createClient } from "@/prismicio"

export const settingsCustomType = async () => {
  const client = createClient()
  const settings = await client.getSingle('settings')
  return (settings)
}