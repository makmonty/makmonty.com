import { Object3D, Renderer, Camera } from 'three';

export class ThreeBehaviorObject {
  behaviors: ThreeBehavior[] = [];

  constructor(
    public object3d: Object3D,
    public renderer: Renderer,
    public mainCamera: Camera
  ) {}

  addBehavior(Behav: any) {
    const behavior = new Behav(this);
    this.behaviors.push(behavior);
    return behavior;
  }

  runBehaviorsUpdate() {
    this.behaviors.forEach(bh => bh.update());
  }
}

export class ThreeBehavior {
  get object3d() {
    return this.object.object3d;
  }

  get renderer() {
    return this.object.renderer;
  }

  get mainCamera() {
    return this.object.mainCamera;
  }

  constructor(public object: ThreeBehaviorObject) {}

  start() {}
  update() {}
  destroy() {}
}
