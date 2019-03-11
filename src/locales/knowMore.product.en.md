## Introduction

This page represents a simple product with a few fields.
This page has two parts : the first half is a display of product's values, the second half is where you can edit product properties.

### Value display

Like in the product page, a few values are displayed without being actual parts of the product. For example, the underlying product object only contains its price without taxes.

The product price with taxes, for example, is computed using user-defined visual programming flows. You can view it by clicking the <strap-button frozen>Edit dynamic value</strap-button> button in the element's edit window.
For help with dynamic pages, click on the <strap-button frozen>Help</strap-button> button next to the button you clicked to open this window.

This shows the real power of dynamic pages : not only you can arrange things to your liking, but you can also arrange data to your liking, displaying values that are not initially available.

### Value editing

On the second half of the page are input fields where you can modify the product's informations.
Every change using these fields will be immediately reflected on computed values everywhere in the page.
Try to change the product price and see the price with VAT change accordingly !

## Technical side

Please refer to the [About](/about) page for more informations about dynamic pages.

At the core, this page only gives the user access to a product (through bindings). And, well, that's all !
This page is the main example of the usage of dynamic pages. They give the ability to the end-user to display data the way they want, without any developer intervention.

On the developer side, there is nothing to do, just give the bindings and the data to the page.

A big thing to note : the table displaying the sales containing this product is not a generic element. This element was made specifically for this page. This is important as it shows that a developer could create a special component for a particular situation if needed.