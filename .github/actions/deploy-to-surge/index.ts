import * as core from "@actions/core"
import * as exec from "@actions/exec"

// surge dist --token d2f81d98ab5f03e8da3fb6848c6a5f15 --login um_oom@hotmail. --domain gh-action-tanstack.surge.sh

async function main() {

  // get inputs values
  const domain = core.getInput("domain", { required: true, trimWhitespace: true })
  const distFolder = core.getInput("dist-folder")
  // const token = core.getInput("token", { required: true, trimWhitespace: true })
  // const email = core.getInput("email", { required: true, trimWhitespace: true })

  // const command = `npx surge ${distFolder} --token ${token} --login ${email} --domain ${domain}`
  const command = `npx surge ${distFolder} --domain ${domain}`

  // deploy to surge
  const exitCode = await exec.exec(command)
  core.setOutput("website-url", `https://${domain}`) // ::set-output

  return exitCode
}

main()



