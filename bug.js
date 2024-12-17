```javascript
<div class="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg">
  <!-- Content here -->
</div>
```
This code uses Tailwind's `bg-gradient-to-r` utility class, but the gradient might not be displayed correctly, or might appear as a solid color, particularly in older browsers or if the `from` and `to` colors are very similar.

Another uncommon issue is related to using Tailwind's `@apply` directive within custom styles. If the applied styles conflict or aren't properly scoped, unexpected behavior can occur, such as styles not applying or conflicting with other styles in unexpected ways.

```javascript
@layer components {
  .my-custom-class {
    @apply bg-gray-200 p-4 rounded;
    /* ... other styles ... */
  }
}

<div class="my-custom-class">
  <!-- Content here -->
</div>
```
Incorrect usage of `@apply` can lead to unexpected outcomes, especially in complex projects.