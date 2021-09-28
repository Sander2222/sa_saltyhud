resource_manifest_version '77731fab-63ca-442c-a67b-abc70f28dfa5'

author 'Sander#2211'

ui_page "html/html.html"
files {
	"html/html.html",
	"html/*.js",
	"html/*.svg",
	"html/*.ttf",
	"html/*.png",
	"html/*.css"
}

client_scripts {
	"client.lua",
}
server_scripts {
	"server.lua",
}