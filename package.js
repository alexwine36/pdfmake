Package.describe({
	name: "alexwine:pdfmake",
	summary: "Let's you generate PDF's on the client and provides handy features for Layout & Styling.",
	author: "Alex Wine <alexwine@awts.io>",
	version: "0.1.26_7",
	documentation: 'readme.md',
	git: "https://github.com/alexwine36/pdfmake.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');
	api.addAssets('build/pdfmake.min.js.map', 'client');
  api.addFiles(['build/pdfmake.min.js', 'build/vfs_fonts.js'], 'client');
});
