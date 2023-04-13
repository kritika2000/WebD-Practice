/**
 * In HTML, we have ul, ol, table elemnts which accept li, li
 * and th-td items only. These container elments put some restrics on the items
 * and display them in a certain format.
 * In React, we have rendered elements/components as self closing elements/components only.
 * Eg:- <App/>
 * We can pass props to use them as reusable components. Eg:-  <Navbar backgroundColor="firebrick" />
 * Sometimes, we may want to create a component whose job is just to wrap some
 * other elements as generic box/container.
 * For eg:- you may want that the components look the same but should have
 * different elements in terms of content.
 * Always use props method when your components always includes same type of content.
 * Use props.children if you want to include something else as well.
 */
