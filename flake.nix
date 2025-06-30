{
  description = "ZerokNote dep";

  inputs.nixpkgs.url =
    "github:NixOS/nixpkgs/57afa2783caf7d6713f63c8e29fba6c52a3a5300";

  outputs = inputs@{ self, nixpkgs }:
    let
      system = "x86_64-linux";
      pkgs = import nixpkgs { inherit system; };
      pnpmBin = "${pkgs.pnpm_10}/bin/pnpm";
    in {
      devShells.${system}.default = pkgs.mkShell {
        env = {
          RUST_SRC_PATH = "${pkgs.rustPlatform.rustLibSrc}";
          p = pnpmBin;
        };

        nativeBuildInputs = with pkgs; [
          pkg-config
          gobject-introspection
          cargo
          cargo-tauri
          nodejs_24
        ];

            buildInputs = with pkgs; [
              wrapGAppsHook3
    glib-networking      at-spi2-atk
          atkmm
          cairo
          gdk-pixbuf
          glib
          gtk3
          harfbuzz
          librsvg
          libsoup_3
          pango
          webkitgtk_4_1
          openssl
          rustc
          pnpm_10
          xdg-utils
          libgtkflow3
glib-networking
        ];

        shellHook = ''
         export GDK_BACKEND=x11
  export WEBKIT_DISABLE_COMPOSITING_MODE=1
  export GTK_THEME=Adwaita:dark  # или :light
  export GDK_SCALE=1
  export GDK_DPI_SCALE=1
          echo "🧠 ZEROKNOTE: shell initialized"
          clear
        '';
      };
    };
}
