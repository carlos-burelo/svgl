![banner](/static/banner.jpeg)

# V-Icons

V Icons is a library in a cdn that proposes icons in svg format as reusable web components that through an attribute the tag <v-icon> returns an icon (only if it is available)

### Installation

If you want to use V icons be sure to use the following script inside the `<head>` tag in your html file

```html
<script type="module" src="https://v-icons.vercel.app/dist/v-icons.es.js"></script>
```

### Basic usage

Once the script is added in the `<head>` tag it is as easy as adding the `<v-icon></v-icon>` tag where you need it

```html
<v-icon name="logo-typescript"></v-icon>
```

### Props

> name

The name of the icon you want to use.

```html
<v-icon name="logo-typescript"></v-icon>
```

> color

The color of the icon you want to use.

```html
<v-icon name="logo-typescript" color="web | default | hex | rgb | etc"></v-icon>

<!--Example-->
<v-icon name="logo-typescript" color="black"></v-icon>
<v-icon name="logo-typescript" color="#000"></v-icon>
<v-icon name="logo-typescript" color="rgb(0,0,0)"></v-icon>

<!--Original color of the icon-->
<v-icon name="logo-typescript" color="default"></v-icon>
```

> hvrColor

The color of the icon you want to use when the mouse is over it.

```html
<v-icon name="logo-typescript" hvrColor="web | default | hex | rgb | etc"></v-icon>

<!--Example-->
<v-icon name="logo-typescript" hvrColor="black"></v-icon>
<v-icon name="logo-typescript" hvrColor="#000"></v-icon>
<v-icon name="logo-typescript" hvrColor="rgb(0,0,0)"></v-icon>

<!--Original color of the icon-->
<v-icon name="logo-typescript" hvrColor="default"></v-icon>
```

> src

The custom path of the icon you want to use.

```html
<v-icon src=" absoluteUrl | relativeUrl"></v-icon>

<!-- Example -->
<v-icon src="https://cdn.jsdelivr.net/gh/qoatl/v-icons@master/icons/logo-typescript.svg"></v-icon>
<v-icon name="/icons/logo.svg"></v-icon>
```

### Editing...

Being a web component, it is as simple as editing it using css as if it were a source, like the following examples.

```css
v-icon {
	color: red;
	font-size: 20px;
	...;
}
```

You can also specify the icon via its `name` attribute. example:

```css
[name='logo-typescipt'] {
	color: blue;
	font-size: 20px;
	...;
}
```

```
Soon a documentation / home page will be published to preview the icons in a better way and facilitate the use of the library. :D
```

> Soon new functions are being incorporated to work with the icons and give them a bit of dynamism and style, in addition to adding more icons to the package to expand the library, currently the cnd is not available, but as soon as it considers that the project is stable it will be published the first version.
