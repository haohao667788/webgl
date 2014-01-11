KISSY.config({
    debug: true,
    packages: {
        "lib": {
            tag: "20131126",
            base: "./library/",
            ignorePackageNameInUri: true
        }
    }
});

KISSY.use("lib/program", function(S, Program) {
    var gl = null,
        prg = null,
        c_width = 0,
        c_height = 0;

    var squareVertexBuffer = null,
        squareIndexBuffer = null;

    var indices = [],
        vertices = [];

    Program.load();
});