// directives
// v-on - shorthand: @ --> i.e: @click=""

// conditional rendering
// v-if, v-else  --> the element is removed from the DOM completely - more time consuming and expensive in terms of performance
// v-show - CSS based --> hides the element - better performance for elements that change often

// methods inherit the event object automatically

// attribute / data binding
// v-bind:  --> shorthand: : --> i.e: :href=""

// computed properties
// a way to define a data property inside the component
// it depends on other data - when data changes the computed property will update

// ADVANTAGES OF VUE CLI

// modern JS features not supported in all browsers
// live-reload dev server
// code optimization for production

// REFS
// this.$refs.nameOfElement - to access elements in DOM

// App.vue -> root component

// single source of truth (data)
// passing data as props from parent to several child components

// PROPS
// make components more reusable, customisable and allows for a single source of truth when it comes to data

// custom events
// can be fired from a child component and be listen to from the parent component

// 2-way data binding