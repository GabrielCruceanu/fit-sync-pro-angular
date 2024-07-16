import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FlowbiteService {
  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  // loadFlowbite() {
  //   if (isPlatformBrowser(this.platformId)) {
  //     import('flowbite').then((flowbite) => {
  //       callback(flowbite);
  //     });
  //   }
  // }
}
