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
              sdf
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
$snes-color-dark: #999;
$groove-color: #888;
// 200mm x 72mm x 242mm
$real-snes-width: 200; // mm
$real-snes-height: 242; // mm
$snes-ratio: $real-snes-height / $real-snes-width;
$snes-width: 700px;
.snes {
  width: $snes-width;
  height: $snes-width * $snes-ratio;

  .snes-box {
    width: 100%;
    padding: 3%;
    height: 100%;
    background: $snes-color-light;
    border-radius: $snes-width * 0.08;

    .snes-bevel {
      width: 100%;
      height: 100%;
      border: 1px solid $groove-color;
    border-radius: $snes-width * 0.06;
      display: flex;
      flex-direction: column;
      align-items: center;

      .snes-plate {
        width: 70%;
        border: 1px solid $groove-color;
        border-top: none;
        border-bottom: none;
      }

      .snes-top-plate {
        height: 10%;
      }

      .snes-center-plate {
        width: 90%;
        height: 70%;
        background: $snes-color-dark;
        border: 1px solid $groove-color;
        border-radius: $snes-width * 0.05;

        .snes-icon-groove {
          position: relative;
          width: 10%;
          border-radius: 99999999px;
          box-shadow: inset -1px 1px 1px 0.5px rgba(1,1,1,0.5);

          &:before {
            content: "";
            display: block;
            padding-top: 100%;
            // background: blue;
          }

          .snes-icon {
            position: absolute;
            top: 0;
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
