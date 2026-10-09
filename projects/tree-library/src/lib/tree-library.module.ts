import { NgModule } from '@angular/core';
import * as C from './components';

/**
 * The components are standalone, so you can import them directly:
 *
 * ```ts
 * imports: [TlTreeComponent]
 * ```
 *
 * This module is kept so existing NgModule based apps keep working unchanged.
 */
@NgModule({
    imports: [C.TlTreeComponent, C.SetAttrsDirective],
    exports: [C.TlTreeComponent, C.SetAttrsDirective]
})
export class TlTreeModule {}
