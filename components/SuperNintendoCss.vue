<template>
  <div class="snes">
    <div class="snes-box">
      <div class="snes-bevel">
        <div class="snes-top-plate snes-plate" />
        <div class="snes-center-plate">
          <div class="snes-icon-groove">
            <div class="snes-icon">
              <div class="snes-icon-top" />
              <div class="snes-icon-left" />
              <div class="snes-icon-right" />
              <div class="snes-icon-bottom" />
            </div>
          </div>
          <div class="snes-slot" />
          <div class="snes-buttons">
            <div class="snes-power-button snes-button snes-border-button">
              <div class="snes-power-switch">
                <div class="snes-power-switch-handle" />
                <span>Power</span>
              </div>
            </div>
            <div class="snes-eject-button snes-button">
              <span>Eject</span>
            </div>
            <div class="snes-reset-button snes-button snes-border-button">
              <span>Reset</span>
            </div>
          </div>
        </div>
        <div class="snes-bottom-plate snes-plate" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$snes-color-light: #ccc;
$snes-color-grey: #909090;
$snes-color-dark: #606060;
$groove-color: #aaa;
// 200mm x 72mm x 242mm
$real-snes-width: 200; // mm
$real-snes-height: 242; // mm
$snes-ratio: $real-snes-height / $real-snes-width;
$snes-width: 500em;
$border-groove: 2px groove $groove-color;

.snes {
  font-size: 1px;
  width: $snes-width;
  height: $snes-width * $snes-ratio;

  .snes-box {
    width: 100%;
    padding: 2.5%;
    height: 100%;
    background: $snes-color-light;
    background: linear-gradient(
      180deg,
      $snes-color-light 60%,
      darken($snes-color-light, 10%) 80%
    );
    border-radius: $snes-width * 0.08;
    box-shadow:
      inset -4em -4em 4em rgba(0,0,0,0.15),
      inset 4em 4em 4em rgba(255,255,255,0.3);

    .snes-bevel {
      width: 100%;
      height: 100%;
      border: $border-groove;
      border-radius: $snes-width * 0.06;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow:
        inset -4em -4em 4em rgba(0,0,0,0.15),
        inset 4em 4em 4em rgba(255,255,255,0.3);

      .snes-plate {
        width: 70%;
        border: $border-groove;
        border-top: none;
        border-bottom: none;
      }

      .snes-top-plate {
        height: 10%;
      }

      .snes-center-plate {
        width: 90%;
        height: 70%;
        background: $snes-color-grey;
        border: $border-groove;
        border-radius: $snes-width * 0.05;
        padding: 5%;

        .snes-icon-groove {
          position: relative;
          width: 13%;
          border-radius: 50%;
          border: 0.2em inset #aaa;

          &:before {
            content: "";
            display: block;
            padding-top: 100%;
          }

          .snes-icon {
            position: absolute;
            top: 0;
          }
        }

        .snes-slot {
          margin-top: 15%;
          background: $snes-color-dark;
          background-clip: content-box;
          height: 20%;
          border: 12em inset rgba(200, 200, 200, 0.5);
          border-radius: 20em 20em 40% 40% / 20em 20em 30em 30em;
          // box-shadow:
          //   inset -12em -12em 2em rgba(255, 255, 255, 0.1),
          //   inset 12em 12em 2em rgba(255, 255, 255, 0.1),;
        }

        .snes-buttons {
          margin: 25% 3%;
          margin-bottom: 0;
          height: 22%;
          display: flex;
          justify-content: space-between;

          .snes-button {
            border-radius: 10em;
            border-width: 6em;
            display:flex;
            text-align: center;
            color: $snes-color-light;

            span {
              font-size: 14em;
            }
          }

          .snes-border-button {
            width: 70em;
            border-style: solid;
            border-color: $snes-color-light;
            background: $snes-color-dark;
          }

          .snes-eject-button {
            width: 160em;
            background-clip: content-box;
            border-style: inset;
            border-color: rgba(200, 200, 200, 0.5);
          }

          .snes-power-button {
            overflow-y: hidden;
            background: $snes-color-dark;
            box-shadow: inset 2em 2em 4em rgba(0,0,0,0.5);
            display: flex;
            align-items: flex-end;

            .snes-power-switch {
              width: 100%;
              border-radius: 4em;
              height: 80%;
              box-shadow:
                0em 2em 2em rgba(0,0,0,0.5),
                inset 0.6em 0.6em 0.5em rgba(255,255,255,0.3),
                inset -0.6em -0.6em 0.5em rgba(0,0,0,0.3);
              background: $snes-color-dark;

              .snes-power-switch-handle {
                border-radius: 1em;
                margin-top: 25%;
                height: 10em;
                box-shadow:
                  4em 4em 4em rgba(0,0,0,0.5);
                background: linear-gradient(
                  180deg,
                  rgba(255,255,255, 0.3) 0,
                  rgba(255,255,255,0) 50%,
                  rgba(0,0,0,0) 50%,
                  rgba(0,0,0,0.3) 100%
                );
              }
            }
          }
        }
      }

      .snes-bottom-plate {
        height: 20%;
      }
    }
  }
}
</style>
