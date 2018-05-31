import {
  Compiler,
  Component,
  Injector,
  SkipSelf,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

declare const SystemJS;

@Component({
  selector: 'myapp',
  template: `
        I am App Component
        <div>
            <ng-container #vc></ng-container>
        </div>
        <p-button label="Click" ></p-button>
    `
})
export class CaAppComponent {
  @ViewChild('vc', { read: ViewContainerRef })
  vc;

  constructor(
    private compiler: Compiler,
    @SkipSelf() private injector: Injector
  ) {}

  ngOnInit() {
    SystemJS.import('a.module.js').then(module => {
      // this.compiler
      //   .compileModuleAndAllComponentsAsync(module.default)
      //   .then(compiled => {
      //     const m = compiled.ngModuleFactory.create(this.injector);
      //     const factory = compiled.componentFactories[0];
      //     const cmp = factory.create(this.injector, [], null, m);
      //     console.log('foo');
      //   });
      const moduleFactory = this.compiler.compileModuleSync(module.default);
      const moduleRef = moduleFactory.create(this.injector);
 
      const widgets = moduleRef.injector.get('widgets');
      const resolver = moduleRef.componentFactoryResolver;
      const componentFactory = resolver.resolveComponentFactory(
        widgets[0][0].component
      );
      const cmp = componentFactory.create(this.injector, [], null, moduleRef);
      // this.vc.createComponent(componentFactory, this.injector, moduleRef);
      console.log('foo');
      // this.vc.createComponent(componentFactory);
    });
  }
}
