{
  description = "ZerokNote dep";

  inputs = {
    nixpkgs.url =
      "github:NixOS/nixpkgs/57afa2783caf7d6713f63c8e29fba6c52a3a5300";
    rust-overlay.url = "github:oxalica/rust-overlay";
  };

  outputs = inputs@{ self, nixpkgs, rust-overlay, ... }:
    let
      system = "x86_64-linux";
      overlays = [ (import rust-overlay) ];
      pkgs = import nixpkgs { inherit system overlays; };
      rust = pkgs.rust-bin.stable.latest.complete;
    in {
      devShells.${system}.default = pkgs.mkShell {
        packages = with pkgs; [
          rust
          cargo
          cargo-tauri
          pkgs.rust-bin.stable.latest.rust-src
          bun
          pkg-config
          gobject-introspection
          nodejs_24
          wrapGAppsHook3
          glib-networking
          at-spi2-atk
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
          pnpm_10
          xdg-utils
          libgtkflow3
        ];

        shellHook = ''
          export GDK_BACKEND=x11
          export WEBKIT_DISABLE_COMPOSITING_MODE=1
          export GDK_SCALE=1
          export GDK_DPI_SCALE=1
          alias p=pnpm
          echo "🧠 ZEROKNOTE: shell initialized"
          clear
        '';
      };
    };
}
