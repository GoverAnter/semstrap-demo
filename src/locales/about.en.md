## What is this ?

This demo is mainly a showcase of my personal, private vue UI framework named Semstrap.
Simply put, it is a spiritual mix (it is only MY code, did everything myself) between :
- the Javascript part of Bootstrap (which is awesome), letting you use components with 0 lines of JS on your side.
- the CSS part of Semantic UI, which is a bit opiniated, but not like Bootstrap. Semantic UI JS is aweful though !

The framework consists of Vue components (like button and link for example), and their associated SCSS (in a separate project). A lot of the framework is therefore usable without any Vue at all (using only the styling).

Styling is a bit opiniated, but everything is configurable using SCSS variables. The main advantage of this framework is that it has a Wordpress/whatever is using basic names (like "container") to style their page compatibility, by either using a separate class (like Semantic UI, here it is "strap"), or a class prefix.

So for example, if we don't have Wordpress compat enabled, a button will look like this :

```html
<button class="strap flat red button">My button</button>
```

If we enable Wordpress compat, our button will look like this :

```html
<button class="flat red strap-button">My button</button>
```

Everything is done automatically compile-time (SCSS), and is configurable using a few variables. You can even change the class/prefix if you want to !

Vue components are made to be used standalone, without adding html classes, only configured through Vue props. They also include a lot of smaller features like improved button and link reactiveness when clicked (no more infinite active state !).

## Why is this interesting ?

> "Well, ok, this is cool, but hey, what should be of interest to me ? Bootstrap and Semantic UI are not perfect, but how yours is better ?"

To be honest, i saw that question coming !

1. nothing is perfect, there is only things that matches. And so this framework matches me, i like how it is to be used, and what you can do with it.
2. it has some pretty neat features, see next.
3. no more CSS conflicts with Wordpress. You dreamed of it, i made it reality ! ;p
4. this one is less obvious, but i tried to optimize everything as much as i could, so that it is the best possible user experience i could provide. By no means it is perfect, but it is decent enough (and for most parts much better than similar Vue components libraries).

## Neat features

Soooo, here it is !

### Window (and window management)

Our first great feature in the list is the windows and its management part. It lets you declare window components, and then, completely independently, it lets you instantiate them. Windows persists through page changes (at least in Single Page Apps) and are managed through tabs (pretty much like how Windows works).

<strap-button v-on:click="openDemoWindow">Try it out !</strap-button>

Just to show how magic this is, this window's component only takes 13 lines (without counting its content) !

### Visual programming

Yup, you heard it right, i made a visual programmation component !
It is mainly to enhance the next component on the list, but hey, by itself, this is something really cool.

You can see it in action in this demo mainly in the [product](/products/764635af-5f8e-43e2-993d-0b05bcc12496) page.
To see them, enable the edit mode, and choose one of the statistics element (for example the one computing price with VAT, this is the most interesting).
Click on this icon to edit the element : <strap-icon icon="edit" secondary />

Then, a window will pop up, in this window will be a button <strap-button>Edit dynamic value</strap-button>, click it !
This will open the visual programming flow of the element.

There is only a few elements to add right now, but adding an element from code is really easy and takes just a few lines, the main part to write being the eval function.

If you go watch the [Dashboard page](/) and view the visual flow for one of the elements, you will see that values are already computed, and flows are just used to link a value to an element.
This is the second way to do something with it, you can pre-computed values (either client-side, or more importantly server-side) and give them to the user. User will then be able to either use the values directly, or add a small computation on them.

The page data step is generated dynamically to reflect page field changes.

### Dynamic pages

This is the main thing you see on product, sale and dashboard pages.

This lets you edit the page, by drag'n'droping elements, and resizing them, to fit what you need.
The main goal of this, well, sub-framework, is to enable users to create truly custom pages using generic components.

On the developper-oriented side, you declare the dynamic page (using `<strap-pooled-dynamic-page>` component), you give it (or not) a page template (or the user modified page), and finally, the most important, data and bindings.

Dynamic pages are based on a simple principle : you have an object (like a product representation, the *data*). This object has fields (like the product's price).
By creating a binding object, you tell the dyn page component how to read this object, and how user can interact with it.

Remember the page data step mentioned above ? Well, it is generated using bindings, which means user can access what was before that developper-only stuff.
Before, you needed a developper to create an element and bind data to it, possibly computing some values.
Now, thanks to dynamic page and visual flows, a lambda john doe can do it without knowloedge of how things work under the hood.

Wanna have specific components ? Well, you can !

If you go to a product page, you will see the table displaying last sales of this product. This component was custom made for the demo.
As mentioned above, one could pre-compute values and, by using bindings, a user could access them and bind them to field. That way, developper could create specific or otherwise impossible-to-do-with-flows computations, but end-user will still be able to do things (like recalculations) on its side.

## The Future (or the Promise for the JS dev !)

1. Replace needed dependencies (listed below).
2. Finish unfinished (no joke !) components (like the date/time/datetime picker, and the WYSIWYG editor).
3. Improve dynamic lists (notice how it is NOT in the big features list).
4. Well, a back-end maybe ?
5. A query language. Why ? Because working with arrays cannot be efficient with flows, as flows are computed independently from each other. So having mulitple flows looping a same array is the most inefficient thing to do. To solve that, i will add a query language. All computations of queries will be done in the same array loop. Second main motivation for a query language is to enable user to ask the back-end for pre-computed data, or otherwise impossible to get data (like an aggregation) (remember the dashboard page ? Well, normally this kind of computation should be done server-side, and cached).


With this functionnalities added, i will consider the Semstrap framework large feature complete.
Don't worry, there will always be things to improve !!

## Dependencies

You will be surprised !!

Vue dependencies (mandatory) :
- Vue
- Vuex -> Store pattern for vue apps, used by window management, visual flows, notifications and context menus
- Vue i18n -> i18n management, used by every bit of the framework
- (optional) Vue router -> only for compatibility with `<strap-link>` component, only used as a hard dependency in the demo
- (Will be removed) Portal vue -> used in visual flows to make modals work correctly, will find a better long-term solution

Used by @inveasy/strong-type dependency (of which i am the author) :
- Decimal.js -> used in number management, because floating point operations are, well, you know what i mean...
- Luxon -> Datetime management

Main framework dependencies :
- v-tooltip -> just a wrapper for a good js lib, i won't do better and it is light, so i used it
- (Will be removed) imask (and its vue wrapper vue-imask) -> input mask management, i will do it myself (as it is a not-so-complicated thing to do, and imask is pretty bad when it comes to dynamic updates, which i need to improve dynamic page inputs)
- (Not used right now, don't know if i will keep it) vuedraggable -> (not) used in dynamic tables

Everything else is done by me, see stats below, pretty impressive !

## Project stats

Remember that i'm alone working on it !

Here is the latest Sonarqube stats for the framework :

- 8835 lines, including 6736 lines of code
- 5660 TypeScript lines, 635 HTML lines, 441 JavaScript lines
- 3.2% duplication (283 lines exactly) (default gate in sonarqube is 3%)
- As reported by Sonarqube : no bugs, no vulnerabilities, no major code smells
- 63 classes, 31 interfaces
- 194 files, including 130 TypeScript files

Sonarqube stats for the SCSS framework part :

- 3666 lines, including 3176 lines of code
- Only SCSS in this project
- no duplication, no bugs, no vulnerabilities, no code smells (at all)
- 45 files

Sonarqube stats for this demo (keep in mind that this demo contains the products and sales data, and visual flows and dynamic pages definitions, which are not actual part of the application, but rather generated data for this demo) :

- 2350 lines, 2065 lines of code
- 1957 TypeScript lines, 89 HTML lines, 12 CSS lines, 7 JavaScript lines
- 32.7% duplication (because page definitions and flow definitions are big chunks of duplicated stuff)
- no bugs, no vulnerabilities, no code smells (again, at all)
- 13 classes, 9 interfaces
- 45 files, including 30 TypeScript files