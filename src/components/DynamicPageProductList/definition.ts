import { DynamicPageElement, DynamicPageElementOptions } from '@inveasy/semstrap';
import component from './component';

export class DynamicPageProductList extends DynamicPageElement {
  constructor(options: DynamicPageElementOptions = {}) {
    super({
      ...options,
      type: 'productList',
      component,
      unique: true,
      wrapperAlignment: 'top',
      wrapperOverflow: 'auto',
      minHeight: 10,
      minWidth: 4,
      startHeight: 12
    });
  }

  public clone(): DynamicPageProductList {
    return new DynamicPageProductList(this.cloneOptions());
  }
}
