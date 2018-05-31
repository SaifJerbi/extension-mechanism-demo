import * as angularCore from '@angular/core';
import * as angularForms from '@angular/forms';

import * as angularCommon from '@angular/common';
import * as angularPlatformBrowser from '@angular/platform-browser';
import * as angularPlatformBrowserDynamic from '@angular/platform-browser-dynamic';
import * as browserAnimation from '@angular/platform-browser/animations';
import * as primeNgButton from 'primeng/button';

declare const SystemJS: any;

// set modules so that no HTTP request is made
SystemJS.set('@angular/core', SystemJS.newModule(angularCore));
SystemJS.set('@angular/common', SystemJS.newModule(angularCommon));
SystemJS.set('@angular/forms', SystemJS.newModule(angularForms));
SystemJS.set('primeng/button', SystemJS.newModule(primeNgButton));

SystemJS.set(
  '@angular/platform-browser',
  SystemJS.newModule(angularPlatformBrowser)
);
SystemJS.set(
  '@angular/platform-browser/animations',
  SystemJS.newModule(browserAnimation)
);
SystemJS.set(
  '@angular/platform-browser-dynamic',
  SystemJS.newModule(angularPlatformBrowserDynamic)
);
