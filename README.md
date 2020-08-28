# Just testing some combinations

## Output

This is the docgenInfo part of the output. Notice that the color has a default value of orange when specified as a default function parameter.

```js
try {
  foo.displayName = "foo";
  foo.__docgenInfo = {
    description: "Some function component",
    displayName: "foo",
    props: {
      "\"color\"": {
        "defaultValue": {
          "value": "orange"
        },
        "description": "some color prop",
        "name": "color",
        "required": false,
        "type": {
          "name": "string",
          "raw": null,
          "value": null
        }
      },
      "\"children\"": {
        "defaultValue": null,
        "description": "The content of the mighty Foo",
        "name": "children",
        "required": true,
        "type": {
          "name": "ReactNode",
          "raw": null,
          "value": null
        }
      }
    }
  };
} catch (e) {}

```
