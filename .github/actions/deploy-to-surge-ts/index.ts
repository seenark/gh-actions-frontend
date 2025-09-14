import { $ } from "bun"
// surge dist --token d2f81d98ab5f03e8da3fb6848c6a5f15 --login um_oom@hotmail. --domain gh-action-tanstack.surge.sh

async function main() {

  // get inputs values
  const domain = Bun.env.INPUT_DOMAIN
  const distFolder = Bun.env["INPUT_DIST_FOLDER"]
  const token = Bun.env.INPUT_TOKEN
  const email = Bun.env.INPUT_EMAIL

  // const command = `npx surge ${distFolder} --domain ${domain}`
  console.log({ domain, distFolder, token, email })

  const exitCode = await $`surge ${distFolder} --token ${token} --login ${email} --domain ${domain}`
  const websiteUrl = `https://${domain}`
  console.log(`::set-output name=website-url::${websiteUrl}`)

  return exitCode
}

main()



// INPUT_DOMAIN="gh-action-tanstack.surge.sh" INPUT_DIST_FOLDER="dist" INPUT_TOKEN="d2f81d98ab5f03e8da3fb6848c6a5f15"  INPUT_EMAIL="um_oom@hotmail.com" bun index.ts
