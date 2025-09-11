import * as core from "@actions/core"


async function main() {


  const domain = core.getInput("domain", { required: true, trimWhitespace: true })
  const distFolder = core.getInput("dist-folder")


}

main()
