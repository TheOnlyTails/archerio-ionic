import { CapacitorConfig } from "@capacitor/cli"

const appId = "archerioionic.theonlytails.com"
const appName = "archerio-ionic"
const server = process.argv.includes("-hmr")
	? {
			url: "10.0.0.15:5173",
			cleartext: true,
	  }
	: {}
const webDir = "build"

const config: CapacitorConfig = {
	appId,
	appName,
	webDir,
	server,
}

if (process.argv.includes("-hmr"))
	console.log("WARNING: running capacitor with livereload config", config)

export default config
