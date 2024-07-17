import { IPInfoAPIResponse } from "../types"

export const fecthCityUser = async () => {
  const url = `https://ipinfo.io?token=${import.meta.env.VITE_IP_INFO_API_KEY}`
  const res = await fetch(url)
  const json = await res.json() as IPInfoAPIResponse

  return json
}