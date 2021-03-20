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
        </div>
        <div class="snes-bottom-plate snes-plate" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$snes-color-light: #ddd;
$snes-color-grey: #939393;
$snes-color-dark: #606060;
$groove-color: #aaa;
// 200mm x 72mm x 242mm
$real-snes-width: 200; // mm
$real-snes-height: 242; // mm
$snes-ratio: $real-snes-height / $real-snes-width;
$snes-width: 500px;
$border-groove: 2px groove $groove-color;

.snes {
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
      darken($snes-color-light, 13%) 80%
    );
    border-radius: $snes-width * 0.08;
    box-shadow:
      inset -4px -4px 4px rgba(0,0,0,0.15),
      inset 4px 4px 4px rgba(255,255,255,0.2);

    .snes-bevel {
      width: 100%;
      height: 100%;
      border: $border-groove;
      border-radius: $snes-width * 0.06;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow:
        inset -4px -4px 4px rgba(0,0,0,0.15),
        inset 4px 4px 4px rgba(255,255,255,0.2);

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
          border: 0.2px inset #aaa;

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
          margin-top: 10%;
          background: $snes-color-dark;
          background-clip: content-box;
          height: 17%;
          border: 12px inset rgba(200, 200, 200, 0.5);
          border-radius: 20px 20px 50% 50% / 20px 20px 30px 30px;
          // box-shadow:
          //   inset -12px -12px 2px rgba(255, 255, 255, 0.1),
          //   inset 12px 12px 2px rgba(255, 255, 255, 0.1),;
        }
      }

      .snes-bottom-plate {
        height: 20%;
      }
    }
  }
}
</style>
