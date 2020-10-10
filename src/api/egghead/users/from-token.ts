import axios from 'axios'
const EGGHEAD_AUTH_DOMAIN = process.env.NEXT_PUBLIC_AUTH_DOMAIN
import {Viewer} from 'interfaces/viewer'

export default async function fetchEggheadUser(
  token: string,
  minimal: boolean = false,
) {
  const current: Viewer = await axios
    .get(`${EGGHEAD_AUTH_DOMAIN}/api/v1/users/current?minimal=${minimal}`, {
      responseType: 'json',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(({data}) => data)

  return current
}
